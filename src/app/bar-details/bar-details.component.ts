import { Component, OnInit } from '@angular/core';
import { BarsService } from '../bars.service';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'

declare const Highcharts: any;

@Component({
  selector: 'app-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.css']
})
export class BarDetailsComponent implements OnInit {

  barName: string;

  constructor(
    private route: ActivatedRoute,
    private barService: BarsService
  ) { 
    route.paramMap.subscribe((paramMap) => {
      this.barName = paramMap.get('bar');
        this.barService.getSpendersByBar(this.barName).subscribe(
          data => {
            //console.log(data);
            const bars = [];
            const counts = [];
    
            data.forEach(bar => {
              bars.push(bar.name);
              counts.push(bar.total_spent);
            });
    
            this.renderChart(bars, counts);
          }
        );
        this.barService.getMostPopularBeers(this.barName).subscribe(
          data => {
            //console.log(data);
            const beers = [];
            const counts = [];
    
            data.forEach(beer => {
              beers.push(beer.beer);
              counts.push(beer.total_bought);
            });
    
            this.renderChart2(beers, counts);
          }
        );
        this.barService.getTopManfByBar(this.barName).subscribe(
          data => {
            //console.log(data);
            const manfs = [];
            const counts = [];
    
            data.forEach(manf => {
              manfs.push(manf.manf);
              counts.push(manf.total_manf);
            });
    
            this.renderChart3(manfs, counts);
          }
        );
    });
  }

  ngOnInit() {
  }

  renderChart(bars: string[], counts: string[]){
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Highest Spenders'
      },
      xAxis: {
        categories: bars,
        title: {
          text: 'Drinker'
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

  renderChart2(beers: string[], counts: string[]){
    Highcharts.chart('bargraph2', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Most Sold Items'
      },
      xAxis: {
        categories: beers,
        title: {
          text: 'Item'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total Purchased'
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

  renderChart3(beers: string[], counts: string[]){
    Highcharts.chart('bargraph3', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Top Manufacturers at Bar'
      },
      xAxis: {
        categories: beers,
        title: {
          text: 'Manfuacturer'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of Items Sold'
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
