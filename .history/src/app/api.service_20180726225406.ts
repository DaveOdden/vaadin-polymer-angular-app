import { Injectable } from '@angular/core';
//import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const APIURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AMZN&apikey=2G4VGF27YKEL4R6G'

interface myData {
  obj: Object
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) {
    //console.log(this.getStock());
  }

  public getStock(): any {
    return this.http.get<myData>(APIURL).subscribe( data => {
      console.log(data["Time Series (Daily)"])
    });
  }
}
