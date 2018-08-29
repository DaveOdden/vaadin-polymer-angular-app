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
  stockInfoIsAvailable: boolean = true;

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

  testTest: string = 'fart';

  historicalStockData: object[] = [{
    '0': {
      date: '',
      data: {}
    }
  },{
    '1': {
      date: '',
      data: {}
    }
  },{
    '2': {
      date: '',
      data: {}
    }
  },{
    '3': {
      date: '',
      data: {}
    }
  },{
    '4': {
      date: '',
      data: {}
    }
  },{
    '5': {
      date: '',
      data: {}
    }
  }];

  updateLabel: string = "";

  ngOnInit() {
    console.log('component loaded: Wealth');
  }

  constructor( private StockApi: ApiService ) {
    this.getStocks();

    if( this.isMarketOpen() ) {
      this.timerID = setInterval(this.reloadStocks.bind(this), 60000);
    }
  }
  

  /* utility functions */

  private formatNumberToCommaString(x): string {
    x = parseFloat(x).toFixed(2).toString()
    // x = x.toString().substring(0, (x.toString().indexOf('.') + 2));
    // x = (x.length - 1) > (x.indexOf('.') + 2) ? x : x + '0';
    x = x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    x = x.indexOf('.00') > -1 ? x.substring( 0, x.indexOf('.00') ) : x;
    return x;
  }

  private formatNumberToCurrencyString(num): string {
    return num.toFixed(2).replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")
  }

  /* component specific */

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
    return hour <= 16 && hour >= 9 && day != 0 && day != 6; // 16 == 4pm, 9 == 9am, day != Sunday, day != Saturday
  }

  private getStocks(): void {
    this.StockApi.getStock().subscribe( this.prepareDataForUI.bind(this) );
  }

  private reloadStocks(): void {
    this.loadingStocks = true;
    this.getStocks();
    this.lastReload = this.calcLastSync();
  }

  private prepareDataForUI( data ) : void {

    // access self in other contexts
    var self = this;

    let todaysDate, yesterdaysDate, dateFormatted;

    function generateNeededDates() {
      todaysDate = new Date();
      dateFormatted = todaysDate.getFullYear() + '-' + ( applyLeadingZer( todaysDate.getMonth() + 1, 2)) + '-' + applyLeadingZer( todaysDate.getDate(), 2);
      var dateslastChar = dateFormatted.substr(dateFormatted.length - 1);
      yesterdaysDate = dateFormatted.substring(0, dateFormatted.length - 1) + ( parseInt(dateslastChar) - 1 );  
    }

    function storeHistoricalData() {
      var counter = 0;
      for( let contextdate in data["Time Series (Daily)"] ) {
        if(counter <= 5) {
          self.historicalStockData[counter]['date'] = contextdate;
          self.historicalStockData[counter]['data'] = data["Time Series (Daily)"][contextdate];
          counter++;
        }
      }
    }

    function applyLeadingZer(num, size): any {
      var s = num+"";
      while (s.length < size) s = "0" + s;
      return s;
    }

    function drillIntoDataStructure( data: object[] ) {
      return data["Time Series (Daily)"][dateFormatted] || data["Time Series (Daily)"][yesterdaysDate];
    }

    function currentStockPrice() {
      return self.apiData ? (self.apiData['4. close']) : 0;
    }

    function calculateVarianceInPrice() {
      console.log(self.historicalStockData[1]);
      var yesterday = 1;
      return self.apiData ? ( parseFloat( self.apiData['4. close'] ) - parseFloat( self.historicalStockData[yesterday]['data']['4. close'] ) ) : 0;
    }

    function calculateNetGains() {
      return (self.endStockVal - 1577.50) * 12;
    }

    function formatCurrentStockPriceForUi() {
      var twoAfterDecimal_endStockVal = self.endStockVal.toString().indexOf('.') + 3;
      return self.formatNumberToCommaString( self.endStockVal.toString().substring( 0, twoAfterDecimal_endStockVal ) );
    }

    function formatNetGainsForUi() {
      var twoAfterDecimal_endStockVal = self.endStockVal.toString().indexOf('.') + 3;
      var twoAfterDecimal_netGains = self.netGains.toString().indexOf('.') > -1 ? self.netGains.toString().indexOf('.') + 3 : twoAfterDecimal_endStockVal;
      return self.formatNumberToCommaString( self.netGains.toString().substring( 0, twoAfterDecimal_netGains ) );  
    }

    function determinePointIncrease() {
      return Math.sign( self.pointVarianceToday ) == -1 ? false : true; // -1 == negative, 0 == zero, 1 == positive
    }

    /* upfront invocations */

    generateNeededDates()
    storeHistoricalData();

    /* calculations stored into variables - mainly used in UI */
    
    this.apiData = drillIntoDataStructure( data );
    this.pointVarianceToday = calculateVarianceInPrice();
    this.pointVarianceTodayString = this.formatNumberToCurrencyString( this.pointVarianceToday );
    this.pointIncreaseBoolean = determinePointIncrease();
    this.netGains = calculateNetGains();    
    this.netGainsString = formatNetGainsForUi();
    this.endStockVal = currentStockPrice();
    this.endStockValString = formatCurrentStockPriceForUi();
    this.stockInfoIsAvailable = true;
    this.loadingStocks = false;
  }
}