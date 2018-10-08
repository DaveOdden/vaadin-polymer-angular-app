import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/Rx';import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { SpotifyAPIService } from '../spotify.service';
import { HerokuAPI } from '../heroku.service';

@Component({
  selector: 'dashboard-component',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dbData: any;
  
  constructor( public router: Router, public spotifyAPI: SpotifyAPIService, public herokuAPI: HerokuAPI ) {
    // this.spotifyAPI.login().subscribe( ( res ) => {
    //   console.log(res);
    // });
  }

  ngOnInit() {
    this.herokuAPI.getRecords().subscribe( this.prepareDataForUI.bind(this) )
    //this.herokuAPI.deleteRecord()
  }

  prepareDataForUI( apiData ) {
    console.log(apiData);
    this.dbData = apiData;
  }
}