import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

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
    return this.http.get<Bar[]>(url);
  }
}
