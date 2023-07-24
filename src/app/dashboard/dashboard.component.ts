import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getHeroes();
    
  }
  constructor(private heroService : HeroService ){}
  heroes? : Hero[];
  getHeroes() :void {
    this.heroes = this.heroService.getHeroes();
  }
}
