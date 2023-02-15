import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HEROES } from './mocks/heroes';
import { Hero } from './models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);

    this.messageService.addMessage(`HeroService: fetched heroes`);

    return heroes;
  }

  getHero(id: number) {
    const hero = of(HEROES.find(h => h.id === id))!;
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`);

    return hero;
  }
}
