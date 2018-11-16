import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BarComponent } from './bar/bar.component';
import { BeerComponent } from './beer/beer.component';
import { DrinkerComponent } from './drinker/drinker.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarComponent,
    BeerComponent,
    DrinkerComponent,
    DrinkerDetailsComponent,
    BarDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
