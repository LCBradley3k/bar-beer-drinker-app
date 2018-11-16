import { Component, OnInit } from '@angular/core';
import { BeerService, Beer } from '../beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  beers: Beer[];

  constructor(
    public beerService: BeerService
  ) {
    this.getItems();
   }

  ngOnInit() {
  }

  getItems(){
    this.beerService.getItems().subscribe(
      data => {
        this.beers = data;
      },
      error => {
        alert("Could not access items table");
      }
    )
  }

}
