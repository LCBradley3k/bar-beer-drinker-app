import { Injectable } from '@angular/core';


export interface Bar{

}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    public http: HttpClient
  ) { }

  getBars() {
    this.http.get('/api/bar');
  }
}
