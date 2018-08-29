import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PolymerModule } from '@codebakery/origami';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';

@NgModule({
	 exports: [ DashboardComponent ],
})

export class DashboardModule { }
