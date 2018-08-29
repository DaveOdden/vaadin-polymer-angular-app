import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publishLast';

@Injectable()
export class SpotifyAPIService {
  client_id = "25d8d763125d4bacb1c16797a1f4266d";
  client_secret = "ecd4390f85f04f899a2255b34aa4aa7a";

  private accessToken: any;
  private tokenType: string;

  constructor(private http: Http, private httpClient: HttpClientModule) { }

  login() {
    // let authorizationTokenUrl = `https://accounts.spotify.com/api/token`;
    let authorizationTokenUrl = `/api/token`;

    let header = new Headers();
    header.append('Authorization', 'Basic  ' + btoa(this.client_id + ':' + this.client_secret));
    header.append('Content-Type', 'application/x-www-form-urlencoded;');

    let options = new RequestOptions({ headers: header });
    let body = 'grant_type=client_credentials';


    return this.http.post(authorizationTokenUrl, body, options)
      .map(data => data.json())
      .do(token => {
        this.accessToken = token.access_token;
        this.tokenType = token.token_type;
      }, error => console.log(error));
  }

  searchAlbums(title: string) {
    const options = this.getOptions();
    return this.http.get(`https://api.spotify.com/v1/search?query=${title}&type=album`, options)
      .map(res => res.json())
      .publishLast()
      .refCount()
  }

  loadAlbum(id) {
    const options = this.getOptions();
    return this.http.get(`https://api.spotify.com/v1/albums/${id}`, options)
      .map(res => res.json())
      .publishLast()
      .refCount()
  }


  private getOptions() {
    console.log(this.accessToken);
    console.log(this.tokenType);

    let header = new Headers();
    header.append('Authorization', this.tokenType + ' ' + this.accessToken);
    let options = new RequestOptions({ headers: header });

    return options;
  }
}