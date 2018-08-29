import { Injectable } from '@angular/core';
//import { environment } from 'environments/environment';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: Http ) {
  }
}
