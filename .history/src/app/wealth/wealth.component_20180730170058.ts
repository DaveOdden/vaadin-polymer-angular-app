import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-component',
  template: `<h1>Tab</h1>`
})
export class DashboardComponent implements OnInit {
  ngOnInit() {
    console.log('crank box');
  }
}