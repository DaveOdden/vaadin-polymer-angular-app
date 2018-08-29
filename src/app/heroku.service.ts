CONST 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const APIURL = 'https://cryptic-wildwood-23826.herokuapp.com'; 

interface myData {
  obj: Object
}

@Injectable({
  providedIn: 'root'
})

export class HerokuAPI {

  constructor( private http: HttpClient ) {
		this.http.get<myData>(APIURL + '/mongo/insert');
	}
	
	public insertRecord(): any {
    return this.http.get<myData>(APIURL);
  }
}