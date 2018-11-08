import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BarComponent } from './bar/bar.component';
import { BeerComponent } from './beer/beer.component';
import { DrinkerComponent } from './drinker/drinker.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarComponent,
    BeerComponent,
    DrinkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
