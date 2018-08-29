import { Component } from '@angular/core';
import { ApiService } from './api.service';

import '@polymer/iron-pages';
import '@vaadin/vaadin-core';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/paper-spinner/paper-spinner';

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

    <div style="width: 70%; margin: 0 auto">
      <div style="margin: 2rem;">
      <vaadin-context-menu>
        <template>
          <vaadin-list-box>
            <vaadin-item>Edit</vaadin-item>
            <vaadin-item disabled>Refresh</vaadin-item>
          </vaadin-list-box>
        </template>

        <vaadin-item class="card-no-padding shadow-xl" style="max-width:15rem">
          <div class="space-m">
            Amazon Stock
            <span theme="badge contrast pill small" class="">12 Shares</span>     
            <hr>

            <div *ngIf="loadingStocks" style="margin: 1rem;">
              <paper-spinner active class="thin"></paper-spinner>
            </div>

            <div *ngIf="!loadingStocks">
              <h2 style="margin: 0; color: #15c15d">\${{netGainsString}}</h2>
              <small *ngIf="isMarketOpen()" class="secondary-text">Current Price: \${{endStockValString}}</small>
              <small *ngIf="!isMarketOpen()" class="secondary-text">Close Price: \${{endStockValString}}</small>
            </div>
          </div>

          <div class="contrast-5pct space-xs">
            <p *ngIf="isMarketOpen()" style="font-size: .6375rem; padding-top: .12rem; line-height: 0; vertical-align: middle" class="secondary-text">Last Sync: {{lastReload}}</p>
            <p *ngIf="!isMarketOpen()" style="font-size: .6375rem; padding-top: .12rem; line-height: 0; vertical-align: middle" class="secondary-text">Market Closed</p>
          </div>
        </vaadin-item>
      </vaadin-context-menu>
      </div>
      
      <div style="margin: 2rem;">
      <vaadin-context-menu>
        <template>
          <vaadin-list-box>
            <vaadin-item>Edit</vaadin-item>
            <vaadin-item disabled>Refresh</vaadin-item>
          </vaadin-list-box>
        </template>

        <vaadin-item class="card-no-padding" style="max-width:15rem">
          <div class="space-m">
            '79 Ford F100        
            <hr>

            <h2 style="margin: 0; color: #15c15d">\${{ this.numberWithCommas( 5000 - 1825.61 ) }}</h2>
            <small class="secondary-text">Invested: \${{ this.numberWithCommas( 1825.61 ) }}</small>
          </div>
        </vaadin-item>
      </vaadin-context-menu>
      </div>
    </div>`
})
export class AppComponent {
  value: string;
  checked: boolean;
  selectedPage: number = 0;
  loadingStocks: boolean = true;

  endStockVal: number = 0;
  endStockValString: string;
  netGains: number = 0;
  netGainsString: string;
  apiData;

  lastReload: string = this.calcLastSync();
  timerID;

  updateLabel: string = "";

  private applyLeadingZer(num, size): any {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

  private numberWithCommas(x): string {
    x = x.toString().substring(0, (x.toString().indexOf('.') + 2));
    x = (x.length - 1) > (x.indexOf('.') + 2) ? x : x + '0';
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  constructor( private StockApi: ApiService ) {
    this.getStocks();

    if( this.isMarketOpen() ) {
      this.timerID = setInterval(this.reloadStocks.bind(this), 60000);
    }
  }

  private calcLastSync(): string {
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    return datetime;
  }

  private isMarketOpen(): boolean {
    let hour = new Date().getHours();
    return hour <= 16 && hour >= 9; // 4pm
  }

  private reloadStocks(): void {
    this.loadingStocks = true;
    this.getStocks();
    this.lastReload = this.calcLastSync();
  }

  private getStocks(): void {
    this.StockApi.getStock().subscribe( data => {

      var date = new Date();
      var dateFormatted = date.getFullYear() + '-' + ( this.applyLeadingZer( date.getMonth() + 1, 2)) + '-' + date.getDate();
      var lastChar = dateFormatted.substr(dateFormatted.length - 1);
      var yesterday = dateFormatted.substring(0, dateFormatted.length - 1) + ( parseInt(lastChar) - 1 );

      this.apiData = data["Time Series (Daily)"][dateFormatted] || data["Time Series (Daily)"][yesterday];

      this.endStockVal = this.apiData['4. close'];
      this.netGains = (this.endStockVal - 1577.50) * 12;

      var twoAfterDecimal_endStockVal = this.endStockVal.toString().indexOf('.') + 3;
      var twoAfterDecimal_netGains = this.netGains.toString().indexOf('.') > -1 ? this.netGains.toString().indexOf('.') + 3 : twoAfterDecimal_endStockVal;

      this.endStockValString = this.numberWithCommas( this.endStockVal.toString().substring( 0, twoAfterDecimal_endStockVal ) );
      this.netGainsString = this.numberWithCommas( this.netGains.toString().substring( 0, twoAfterDecimal_netGains ) );

      this.loadingStocks = false;
    });
  }
}