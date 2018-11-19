import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DrinkerService, DrinkerDetail } from '../drinker.service';
import { HttpResponse } from '@angular/common/http';
import { getLocaleMonthNames } from '@angular/common';

declare const Highcharts: any;

@Component({
  selector: 'app-drinker-details',
  templateUrl: './drinker-details.component.html',
  styleUrls: ['./drinker-details.component.css']
})
export class DrinkerDetailsComponent implements OnInit {

  drinkerName: string;
  drinkerDetails: DrinkerDetail[];

  constructor(
    public drinkerService: DrinkerService,
    private route: ActivatedRoute
  ) { 
    route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinker');
        this.drinkerService.getDrinker(this.drinkerName).subscribe(
          data => {
            this.drinkerDetails = data;
          },
          (error: HttpResponse<any>) => {
            if (error.status === 404){
              alert("Bar not found");
            } else {
              console.error(error.status + ' - ' + error.body);
              alert("An error occurred on the server. Please check the console");
            }
          }
        );
        this.drinkerService.getDrinkerTopItems(this.drinkerName).subscribe(
          data => {
            //console.log(data);
            const beers = [];
            const counts = [];
    
            data.forEach(beer => {
              beers.push(beer.beer);
              counts.push(beer.total_bought);
            });
    
            this.renderChart(beers, counts);
          }
        );
        this.drinkerService.getDrinkerSpendingDistribution(this.drinkerName).subscribe(
          data => {
            const bars = [];
            const counts = [];
    
            data.forEach(bar => {
              bars.push(bar.bar_name)
              counts.push(bar.total_per_month);
            });
    
            this.renderChart2(bars, counts);
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
        text: 'Most ordered items'
      },
      xAxis: {
        categories: beers,
        title: {
          text: 'Beer'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of items ordered'
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

  renderChart2(bars: string[], counts: string[]){
    Highcharts.chart('bargraph2', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Distribution of Amount Spent By Drinker at Bars in May'
      },
      xAxis: {
        categories: bars,
        title: {
          text: 'Month'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Dollars Spent'
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
