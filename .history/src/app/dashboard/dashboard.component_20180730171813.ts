import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-component',
  template: `<h1>Tab</h1>`
})
export class DashboardComponent implements OnInit {

	constructor( public router: Router ) { }
	
  ngOnInit() {
    console.log('crank box');
  }
}