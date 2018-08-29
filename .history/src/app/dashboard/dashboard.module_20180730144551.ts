import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

@NgModule({
	 exports: [ DashboardComponent ],
	 declarations: [ DashboardComponent ],
	 entryComponents: [DashboardComponent]
})

export class DashboardModule { }
