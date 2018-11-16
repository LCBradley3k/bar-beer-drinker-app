import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DrinkerService, DrinkerDetail } from '../drinker.service';
import { HttpResponse } from '@angular/common/http';
import * as CanvasJS from '../canvasjs.min';


@Component({
  selector: 'app-drinker-details',
  templateUrl: './drinker-details.component.html',
  styleUrls: ['./drinker-details.component.css']
})
export class DrinkerDetailsComponent implements OnInit {

  drinkerName: string;
  drinkerDetails: DrinkerDetail[];

  constructor(
    private drinkerService: DrinkerService,
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
    });
   }

  ngOnInit() {
  }

  

}
