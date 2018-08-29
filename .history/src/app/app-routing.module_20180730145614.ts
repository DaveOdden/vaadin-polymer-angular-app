import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
    path: '',
    component: DashboardComponent,
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },{
    path: '/wealth',
    component: DashboardComponent
  },{
    path: '/notes',
    component: DashboardComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  constructor() {
    console.log('inside router file');
  }
}
