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
    
    <h1>{{selectedPage}}</h1>
    <h1>{{endStockVal}}</h1>`
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

  private applyCurrency(c, d, t): any {
    var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };
  

  constructor( private StockApi: ApiService ) {
    StockApi.getStock().subscribe( data => {
      var date = new Date();
      var month = date.getMonth();
      //month = month.toString().length > 1 ? month : 
      //console.log(month + 1);
      var dateFormatted = date.getFullYear() + '-' + ( this.applyLeadingZer( date.getMonth() + 1, 2)) + '-' + date.getDate();
      this.apiData = data["Time Series (Daily)"][dateFormatted];
      console.log(this.apiData['4. close']);
      this.endStockVal = this.apiData['4. close'];
    });
  }
}