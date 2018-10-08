import { Component, OnInit } from '@angular/core';
import { HerokuAPI } from '../heroku.purchases.service';
import { Purchase } from '../purchase-history/purchase-history.interface';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class PurchaseHistoryComponent implements OnInit {

  dbData: any;
  loadingData: boolean = true;
  selectedGroup: Purchase;
  listFilter: Object = {
    name: '',
  };

  constructor( public herokuAPI: HerokuAPI ) {}

  ngOnInit() {
    this.herokuAPI.getRecords().subscribe( this.prepareDataForUI.bind(this) )
  }

  prepareDataForUI( apiData ) {
    this.loadingData = false;
    this.dbData = apiData;
  }

  onSelect(purchase: Purchase): void {
    this.selectedGroup = purchase;
  }

}
