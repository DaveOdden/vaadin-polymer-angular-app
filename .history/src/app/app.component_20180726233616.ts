import { Component } from '@angular/core';
import { ApiService } from './api.service';

import '@polymer/iron-pages';
import '@vaadin/vaadin-core';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-listbox/paper-listbox';

@Component({
  selector: 'app-root',
  template: `
    <vaadin-tabs
      id="tabs"
      [selected]="selectedPage"
      (selected-changed)="selectedPage=$event.detail.value">
      <vaadin-tab>Dashboard</vaadin-tab>
      <vaadin-tab>Wealth</vaadin-tab>
    </vaadin-tabs>`
})
export class AppComponent {
  value: string;
  checked: boolean;
  selectedPage: number = 0;

  apiData;

  constructor( private StockApi: ApiService ) {
    StockApi.getStock().subscribe( data => {
      var date = new Date();
      var month = date.getMonth();
      console.log(month);
      //var dateFormatted = date.getFullYear() + '-' + parseInt(month) + 1) + '-' + date.getDate();
      console.log(dateFormatted);
      this.apiData = data["Time Series (Daily)"];
      console.log(this.apiData['2018-07-26']);

    });
  }
}