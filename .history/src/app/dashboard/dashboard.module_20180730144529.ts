import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

@NgModule({
	 exports: [ DashboardComponent ],
	 declarations: [ DashboardComponent ],
	 bootstrap: [DashboardComponent]
})

export class DashboardModule { }
