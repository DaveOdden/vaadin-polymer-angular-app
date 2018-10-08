import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
	
	public getRecords(): any {
    return this.http.get<any>( APIURL + '/purchases/history' );
	}
	
	public insertRecord(): any {
    return this.http.post<any>( APIURL + '/purchases/history/insert', [], {} );
	}
	
	public deleteRecord(): any {
    return this.http.delete<any>( APIURL + '/purchases/history/delete' ).map((response: Response) => response);
	}
	
	public update(): any {
    return this.http.put<any>( APIURL + '/purchases/history/update', {} );
	}
	
	public insertSubcategory( newCategory ): any {
    return this.http.put<any>( APIURL + '/purchases/history/subcategory/update', newCategory );
  }
}