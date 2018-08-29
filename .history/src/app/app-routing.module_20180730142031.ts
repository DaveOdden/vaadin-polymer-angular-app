import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [{
    path: '/dashboard',
    component: DashboardModule
  },{
    path: 'wealth',
    component: DashboardModule
  },{
    path: 'notes',
    component: DashboardModule
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
