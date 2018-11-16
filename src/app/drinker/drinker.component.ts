import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
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

    let chart = new CanvasJS.Chart("beerOrderedMostChart", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Beers Ordered Most By Drinker"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Apple" },
          { y: 55, label: "Mango" },
          { y: 50, label: "Orange" },
          { y: 65, label: "Banana" },
          { y: 95, label: "Pineapple" },
          { y: 68, label: "Pears" },
          { y: 28, label: "Grapes" },
          { y: 34, label: "Lychee" },
          { y: 14, label: "Jackfruit" }
        ]
      }]
    });
      
    chart.render();

    let chart2 = new CanvasJS.Chart("daysSpentMostChart", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Drinker Spending Habit by Day"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Apple" },
          { y: 55, label: "Mango" },
          { y: 50, label: "Orange" },
          { y: 65, label: "Banana" },
          { y: 95, label: "Pineapple" },
          { y: 68, label: "Pears" },
          { y: 28, label: "Grapes" },
          { y: 34, label: "Lychee" },
          { y: 14, label: "Jackfruit" }
        ]
      }]
    });
      
    chart2.render();

    let chart3 = new CanvasJS.Chart("monthsSpentMostChart", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Drinker Spending Habit by Month"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Apple" },
          { y: 55, label: "Mango" },
          { y: 50, label: "Orange" },
          { y: 65, label: "Banana" },
          { y: 95, label: "Pineapple" },
          { y: 68, label: "Pears" },
          { y: 28, label: "Grapes" },
          { y: 34, label: "Lychee" },
          { y: 14, label: "Jackfruit" }
        ]
      }]
    });
      
    chart3.render();

  }

}
