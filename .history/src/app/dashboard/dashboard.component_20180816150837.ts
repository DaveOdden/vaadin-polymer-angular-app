import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-component',
  template: `<h1>Tab</h1>`
})
export class DashboardComponent implements OnInit {
  
  constructor(
    public router: Router,
    public spotifyAudio: SpotifyAudioService,
    public spotifyAPI: SpotifyAPIService
  ) {
    this.spotifyAPI.login()
      .subscribe((res) => {
        console.log(res);
      });
      

    //this.spotifyAudioSubscription = spotifyAudio.ended$.subscribe(() => this.album = null )
  }



	
  ngOnInit() {
    console.log('crank box');
  }
}