import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/Rx';import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { SpotifyAPIService } from '../spotify.service';

@Component({
  selector: 'dashboard-component',
  template: `<iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DWZeKCadgRdKQ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
})
export class DashboardComponent implements OnInit {
  
  constructor( public router: Router, public spotifyAPI: SpotifyAPIService ) {
    this.spotifyAPI.login().subscribe( ( res ) => {
      console.log(res);
    });
  }

  ngOnInit() {
    console.log('crank box');
  }
}