import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponentComponent } from './hero-detail-component/hero-detail-component.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
