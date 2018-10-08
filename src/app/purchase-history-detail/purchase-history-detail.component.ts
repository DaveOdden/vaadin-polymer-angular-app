import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { HerokuAPI } from '../heroku.purchases.service';
import { Purchase, SubPurchase } from '../purchase-history/purchase-history.interface';

@Component({
  selector: 'app-purchase-history-detail',
  templateUrl: './purchase-history-detail.component.html',
  styleUrls: ['./purchase-history-detail.component.scss']
})

export class PurchaseHistoryDetailComponent implements OnInit, OnChanges {

  @Input() purchase: Purchase;

  uiState: any = {
    createNew: false
  };
  
  subCategoryForm: SubPurchase = {
    _id: '',
    newCategory: {
      name: '',
      amount: ''
    }
  };

  constructor( public herokuAPI: HerokuAPI ) { }

  ngOnInit() { }

  ngOnChanges( changes: SimpleChanges ) {
    console.log( changes );
    this.subCategoryForm._id = changes.purchase ? changes.purchase.currentValue._id : '';
  }

  createSubCategory() {
    console.log( this.subCategoryForm );
    this.herokuAPI.insertSubcategory(this.subCategoryForm).subscribe( ( updatedDoc ) => {
      this.purchase = updatedDoc;
    } )

  }

}
