import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

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
    let url = this.baseUrl + '/api/drinker'
    return this.http.get<Drinker[]>(url);
  }
  
}
