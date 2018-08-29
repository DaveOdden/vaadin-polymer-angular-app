import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/Rx';import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { SpotifyAPIService } from '../spotify.service';

@Component({
  selector: 'dashboard-component',
  template: `<h1>Tab</h1>`
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