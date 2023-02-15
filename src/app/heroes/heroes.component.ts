import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];

  // constructor to inject HeroService, MessageService
  constructor(private heroService: HeroService, private messageServce: MessageService) {}

  // on init life cycle
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes
      );
  }
}
