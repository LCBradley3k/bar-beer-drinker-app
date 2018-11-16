import { Component, OnInit } from '@angular/core';
import { BarsService } from '../bars.service';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.css']
})
export class BarDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private barService: BarsService
  ) { }

  ngOnInit() {
  }

}
