import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';

export interface DrinkerDetail {
  bar_name: string;
  name: string;
  time: string;
  transaction_id: string;
}

export interface Drinker {
  address: string;
  name: string;
  phone: string;
  state: string;
}

@Injectable({
  providedIn: 'root'
})

export class DrinkerService {

  baseUrl = environment.baseUrl;

  constructor(
    public http: HttpClient
  ) { }

  getDrinkers(){
    let url = this.baseUrl + '/api/drinker';
    return this.http.get<Drinker[]>(url)
      .pipe(
        retry(3)
      )
  }

  getDrinker(drinker: string){
    let url = this.baseUrl + '/api/transactions/' + drinker;
    return this.http.get<DrinkerDetail[]>(url)
      .pipe(
        retry(3)
      )
  }
  
}
