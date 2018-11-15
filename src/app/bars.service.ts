import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

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

  constructor(
    public http: HttpClient
  ) { }

  getBars() {
    return this.http.get<Bar[]>('https://bbd-api.herokuapp.com/api/bar');
  }
}
