import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardModule
  },
  {
    path: 'wealth',
    component: DashboardModule
  },
  {
      path: 'notes',
      component: DashboardModule
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
