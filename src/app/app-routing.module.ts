import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WealthComponent } from './wealth/wealth.component';
import { NotesComponent } from './notes/notes.component';
import { InterviewsDetailComponent } from './interviews-detail/interviews-detail.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';

const routes: Routes = [{
    path: 'dashboard',
    component: DashboardComponent
  },{
    outlet: 'detailview',
    path: "details/:id",
    component: InterviewsDetailComponent
  },{
    path: 'wealth',
    component: WealthComponent,
  },{
    path: 'purchases',
    component: PurchaseHistoryComponent,
  },{
    path: 'notes',
    component: NotesComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
