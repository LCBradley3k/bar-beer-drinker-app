import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { BeerService, } from '../beer.service';
import { HttpResponse } from '@angular/common/http';

declare const Highcharts: any;

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

  beerName: string;

  constructor(
    private route: ActivatedRoute,
    private beerService: BeerService
  ) { 
    route.paramMap.subscribe((paramMap) => {
      this.beerName = paramMap.get('beer');
        this.beerService.getTopBarsByBeer(this.beerName).subscribe(
          data => {
            const bars = [];
            const counts = [];
    
            data.forEach(bar => {
              bars.push(bar.bar_name);
              counts.push(bar.beers_bought);
            });
    
            this.renderChart(bars, counts);
          }
        );
        this.beerService.getTopDrinkersByBeer(this.beerName).subscribe(
          data => {
            const drinkers = [];
            const counts = [];
    
            data.forEach(drinker => {
              drinkers.push(drinker.name);
              counts.push(drinker.drinker_beers_bought);
            });
    
            this.renderChart2(drinkers, counts);
          }
        );
    });
  }

  ngOnInit() {
  }

  renderChart(beers: string[], counts: string[]){
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Bars Where This Item is Most Sold'
      },
      xAxis: {
        categories: beers,
        title: {
          text: 'Bar'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of Purchases'
        }
      },
      labels: {
        overflow: 'justify'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: counts
      }]
    })
  }

  renderChart2(drinkers: string[], counts: string[]){
    Highcharts.chart('bargraph2', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Top Drinkers of This Beer'
      },
      xAxis: {
        categories: drinkers,
        title: {
          text: 'Bar'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of Purchases'
        }
      },
      labels: {
        overflow: 'justify'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: counts
      }]
    })
  }

}
