import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { retry } from 'rxjs/operators';

export interface Bar {
  address: string;
  city: string;
  closing_hour: string;
  license: string;
  name: string;
  opening_hour: string;
  phone: string;
  state: string;
}

@Injectable({
  providedIn: 'root'
})
export class BarsService {

  baseUrl = environment.baseUrl;

  constructor(
    public http: HttpClient
  ) { }

  getBars() {
    let url = this.baseUrl + '/api/bar'
    return this.http.get<Bar[]>(url)
    .pipe(
      retry(3)
    )
  }

  getSpendersByBar(name: string){
    let url = this.baseUrl + '/api/top-spenders-by-bar/' + name;
    return this.http.get<any[]>(url)
      .pipe(
        retry(3)
      )
  }

  getMostPopularBeers(bar: string){
    let url = this.baseUrl + '/api/top-items-by-bar/' + bar;
    return this.http.get<any[]>(url)
      .pipe (
        retry(3)
      )
  }

  getTopManfByBar(bar: string){
    let url = this.baseUrl + '/api/top-manufacturers-by-bar/' + bar;
    return this.http.get<any[]>(url)
      .pipe(
        retry(3)
      )
  }

  getPopularTimes(bar: string){
    let url = this.baseUrl + '/api/top-bar-sales-per-hour/' + bar;
    return this.http.get<any[]>(url)
      .pipe(
        retry(3)
      )
  }
}
