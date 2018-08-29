import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'wealth-component',
  templateUrl: `./wealth.component.html`
})
export class WealthComponent implements OnInit {

  value: string;
  checked: boolean;
  selectedPage: number = 0;
  loadingStocks: boolean = true;

  endStockVal: number = 0;
  endStockValString: string;
  netGains: number = 0;
  netGainsString: string;
  pointVarianceToday: number;
  pointVarianceTodayString: string;
  pointIncreaseBoolean: boolean;
  apiData;

  lastReload: string = this.calcLastSync();
  timerID;

  updateLabel: string = "";

  ngOnInit() {
    console.log('wealth');
  }

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
    var day = new Date().getDay();
    return hour <= 16 && hour >= 9 && day != 0 && day != 6; // 4pm
  }

  private reloadStocks(): void {
    this.loadingStocks = true;
    this.getStocks();
    this.lastReload = this.calcLastSync();
  }

  private getStocks(): void {
    this.StockApi.getStock().subscribe( data => {

      var date = new Date();
      var dateFormatted = date.getFullYear() + '-' + ( this.applyLeadingZer( date.getMonth() + 1, 2)) + '-' + this.applyLeadingZer( date.getDate(), 2);
      var lastChar = dateFormatted.substr(dateFormatted.length - 1);
      var yesterday = dateFormatted.substring(0, dateFormatted.length - 1) + ( parseInt(lastChar) - 1 );

      this.apiData = data["Time Series (Daily)"][dateFormatted] || data["Time Series (Daily)"][yesterday];
      this.pointVarianceToday = parseFloat( this.apiData['4. close'] ) - parseFloat( this.apiData['1. open'] );
      this.pointVarianceTodayString = this.numberWithCommas( this.pointVarianceToday );
      this.pointIncreaseBoolean = Math.sign( this.pointVarianceToday ) == -1 ? false : true; // -1 == negative, 0 == zero, 1 == positive
      this.endStockVal = this.apiData['4. close'] || 0;
      this.netGains = (this.endStockVal - 1577.50) * 12;

      var twoAfterDecimal_endStockVal = this.endStockVal.toString().indexOf('.') + 3;
      var twoAfterDecimal_netGains = this.netGains.toString().indexOf('.') > -1 ? this.netGains.toString().indexOf('.') + 3 : twoAfterDecimal_endStockVal;

      this.endStockValString = this.numberWithCommas( this.endStockVal.toString().substring( 0, twoAfterDecimal_endStockVal ) );
      this.netGainsString = this.numberWithCommas( this.netGains.toString().substring( 0, twoAfterDecimal_netGains ) );

      this.loadingStocks = false;
    });
  }
}