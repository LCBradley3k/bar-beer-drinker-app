import { Component, OnInit } from '@angular/core';
import { VerificationService } from '../verification.service'

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  checkTime: Array<{ CheckTimes: number; }>;
  checkState: Array<{ CheckStates: number; }>;
  checkPrice: Array<{ CheckPrices: number; }>;

  constructor(
    public verificationService: VerificationService
  ) { 
    this.getTimeVerification();
  }

  ngOnInit() {
  }

  getTimeVerification(){
    this.verificationService.getTimeVerification().subscribe(
      data => {
        this.checkTime = data
        console.log(data)
      },
      error => {
        alert("Could not retrieve time verification")
      }
    )
  }

  getStateVerification(){
    this.verificationService.getStateVerification().subscribe(
      data => {
        this.checkState = data
      },
      error => {
        alert("Could not retrieve time verification")
      }
    )
  }

  getPriceVerification(){
    this.verificationService.getPriceVerification().subscribe(
      data => {
        this.checkPrice = data
      },
      error => {
        alert("Could not retrieve time verification")
      }
    )
  }

}
