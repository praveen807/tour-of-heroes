import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  ngOnInit(): void {
    this.getHeroes();
  }
constructor(private heroService:HeroService ) {};
heroes : Hero[] = [];
getHeroes() : void{
  this.heroes = this.heroService.getHeroes();
}
}
