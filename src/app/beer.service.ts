import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';

export interface Beer {
  category: string;
  item: string;
  manf: string;
}

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  baseUrl = environment.baseUrl;

  constructor(
    public http: HttpClient
  ) {}

  getItems(){
    let url = this.baseUrl + '/api/item';
    return this.http.get<Beer[]>(url)
      .pipe(
        retry(3)
      )
  }

  getTopBarsByBeer(beer: string){
    let url = this.baseUrl + '/api/top-bars-by-beer/' + beer;
    return this.http.get<any[]>(url)
      .pipe(
        retry(3)
      )
  }

  getTopDrinkersByBeer(beer: string){
    let url = this.baseUrl + '/api/top-drinkers-by-beer/' + beer;
    return this.http.get<any[]>(url)
      .pipe(
          retry(3)
      )
  }

  getBeerDistributionByMonth(beer: string){
    let url = this.baseUrl + '/api/find-beer-sales-per-month/' + beer;
    return this.http.get<any[]>(url)
      .pipe(
          retry(3)
      )
  }
}