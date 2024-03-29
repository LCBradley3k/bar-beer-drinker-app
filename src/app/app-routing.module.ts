import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import {HomeComponent} from './home/home.component'
import {BarComponent} from './bar/bar.component'
import {BeerComponent} from './beer/beer.component'
import {DrinkerComponent} from './drinker/drinker.component'
import {DrinkerDetailsComponent} from './drinker-details/drinker-details.component'
import {BarDetailsComponent} from './bar-details/bar-details.component'
import {BeerDetailsComponent} from './beer-details/beer-details.component'
import {VerificationComponent} from './verification/verification.component'

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
  },
  {
    path: 'bar/:bar',
    component: BarDetailsComponent
  },
  {
    path: 'beer/:beer',
    component: BeerDetailsComponent
  },
  {
    path: 'verification',
    component: VerificationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
