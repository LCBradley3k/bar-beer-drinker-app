import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import {HomeComponent} from './home/home.component'
import {BarComponent} from './bar/bar.component'
import {BeerComponent} from './beer/beer.component'
import {DrinkerComponent} from './drinker/drinker.component'
import {DrinkerDetailsComponent} from './drinker-details/drinker-details.component'

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'bar',
    component: BarComponent
  },
  {
    path: 'beer',
    component: BeerComponent
  },
  {
    path: 'drinker',
    component: DrinkerComponent
  },
  {
    path: 'drinker/:drinker',
    component: DrinkerDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
