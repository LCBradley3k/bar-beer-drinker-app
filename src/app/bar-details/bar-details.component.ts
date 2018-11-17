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
            console.log(data);
            const bars = [];
            const counts = [];
    
            data.forEach(bar => {
              bars.push(bar.name);
              counts.push(bar.total_spent);
            });
    
            this.renderChart(bars, counts);
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
        text: 'Highest Spenders'
      },
      xAxis: {
        categories: beers,
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

}
