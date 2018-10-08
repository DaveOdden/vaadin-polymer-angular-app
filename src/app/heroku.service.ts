import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//const APIURL = 'https://cryptic-wildwood-23826.herokuapp.com'; 
const APIURL = 'http://localhost:5000'; 

interface myData {
  obj: Object
}

@Injectable({
  providedIn: 'root'
})

export class HerokuAPI {

  constructor( private http: HttpClient ) {

	}
	
	public insertRecord(): any {
    return this.http.post<any>( APIURL + '/interviews/insert', [], {} );
	}
	
	public getRecords(): Observable<any> {
    return this.http.get<any>( APIURL + '/interviews/read' );
	}
	
	public deleteRecord(): any {
    return this.http.delete<any>( APIURL + '/interviews/delete' ).map((response: Response) => response);
	}
	
	public update(): any {
    return this.http.put<any>( APIURL + '/interviews/put', {} );
  }
}