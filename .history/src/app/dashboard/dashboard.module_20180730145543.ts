import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

@NgModule({
	 imports: [ DashboardComponent ],
	 exports: [ DashboardModule ],
	 declarations: [ DashboardComponent ],
})

export class DashboardModule {
	constructor() {

	}
}
