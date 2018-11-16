import { Component, OnInit } from '@angular/core';
import { DrinkerService, Drinker } from '../drinker.service'


@Component({
  selector: 'app-drinker',
  templateUrl: './drinker.component.html',
  styleUrls: ['./drinker.component.css']
})
export class DrinkerComponent implements OnInit {

  drinkers: Drinker[];

  constructor(
    public drinkerService: DrinkerService
  ) { 
    this.getDrinkers()
  }

  getDrinkers(){
    this.drinkerService.getDrinkers().subscribe(
      data => {
        this.drinkers = data;
      },
      error => {
        alert("Could not retrieve drinkers");
      }
    )
  }

  ngOnInit() {

  }

}
