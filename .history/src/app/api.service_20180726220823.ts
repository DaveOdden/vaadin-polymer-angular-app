import { Injectable } from '@angular/core';
//import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const APIURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AMZN&apikey=2G4VGF27YKEL4R6G'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: Http ) {
  }

  public getStock(): Observable<Response>
 {
    return this.http
      .get(APIURL).map(response => {
        console.log(response.json());
        //return todos.map((todo) => new Todo(todo));
      })
      .catch( () => {
        console.log('erre');
      });
  }
}
