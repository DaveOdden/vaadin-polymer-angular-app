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
      (selected-changed)="selectedPage=$event.detail.value"
      style="background-color: white; padding: 1rem 1rem 0 1rem">
      <vaadin-tab>Dashboard</vaadin-tab>
      <vaadin-tab>Wealth</vaadin-tab>
    </vaadin-tabs>

    <div style="padding: 1rem 4rem">
      <vaadin-item class="card" style="max-width:15rem">
        <div>Amazon Stock</div>
        <hr>
        <h2 style="margin: 0; color: #15c15d">\${{netGainsString}}</h2>
        <small>Current Price: \${{endStockValString}}</small>
      </vaadin-item>
    </div>`
})
export class AppComponent {
  value: string;
  checked: boolean;
  selectedPage: number = 0;

  endStockVal: number = 0;
  endStockValString: string;
  netGains: number = 0;
  netGainsString: string;
  apiData;

  private applyLeadingZer(num, size): any {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

  private numberWithCommas(x): any {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  constructor( private StockApi: ApiService ) {
    StockApi.getStock().subscribe( data => {

      var date = new Date();
      var dateFormatted = date.getFullYear() + '-' + ( this.applyLeadingZer( date.getMonth() + 1, 2)) + '-' + date.getDate();
      var lastChar = dateFormatted.substr(dateFormatted.length - 1);
      var yesterday = dateFormatted.substring(0, dateFormatted.length - 1) + ( parseInt(lastChar) - 1 );

      this.apiData = data["Time Series (Daily)"][dateFormatted] || data["Time Series (Daily)"][yesterday];

      this.endStockVal = this.apiData['4. close'];
      this.netGains = (this.endStockVal - 1555.83) * 12;

      var twoAfterDecimal_endStockVal = this.endStockVal.toString().indexOf('.') + 3;
      var twoAfterDecimal_netGains = this.netGains.toString().indexOf('.') + 3;

      this.endStockValString = this.numberWithCommas( this.endStockVal.toString().substring( 0, twoAfterDecimal_endStockVal ) );
      this.netGainsString = this.numberWithCommas( this.netGains.toString().substring( 0, twoAfterDecimal_netGains ) );
    });
  }
}