import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyAPIService } from '../spotify.service';

@Component({
  selector: 'dashboard-component',
  template: `<h1>Tab</h1>`
})
export class DashboardComponent implements OnInit {
  
  constructor( public router: Router, private spotifyAPI: SpotifyAPIService ) {
   
  }

  ngOnInit() {
    console.log('crank box');
  }
}