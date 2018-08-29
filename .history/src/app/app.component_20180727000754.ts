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
    </vaadin-tabs>
    
    <vaadin-item>{{endStockVal}}</vaadin-item>`
})
export class AppComponent {
  value: string;
  checked: boolean;
  selectedPage: number = 0;

  endStockVal: number = 0;

  apiData;

  private applyLeadingZer(num, size): any {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

  constructor( private StockApi: ApiService ) {
    StockApi.getStock().subscribe( data => {
      console.log(data);
      var date = new Date();
      var dateFormatted = date.getFullYear() + '-' + ( this.applyLeadingZer( date.getMonth() + 1, 2)) + '-' + date.getDate();
      console.log(dateFormatted);
      var lastChar = dateFormatted.substr(dateFormatted.length);
      var yesterday = dateFormatted.substr(dateFormatted.length - 1) + (parseInt(lastChar) - 1);
      console.log(yesterday);
      this.apiData = data["Time Series (Daily)"][dateFormatted] || data["Time Series (Daily)"][yesterday];
      console.log(this.apiData['4. close']);
      this.endStockVal = this.apiData['4. close'];
    });
  }
}