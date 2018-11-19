import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  baseUrl = environment.baseUrl;

  constructor(
    public http: HttpClient
  ) { }

  getTimeVerification(){
    let url = this.baseUrl + '/api/verify_times';
    return this.http.get<Array<{ CheckTimes: number; }>>(url)
      .pipe(
        retry(3)
      )
  }

  getStateVerification(){
    let url = this.baseUrl + '/api/verify_states';
    return this.http.get<Array<{ CheckStates: number; }>>(url)
      .pipe(
        retry(3)
      )
  }

  getPriceVerification(){
    let url = this.baseUrl + '/api/verify_prices';
    return this.http.get<Array<{ CheckPrices: number; }>>(url)
      .pipe(
        retry(3)
      )
  }
}