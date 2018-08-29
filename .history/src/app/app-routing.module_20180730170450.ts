import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WealthComponent } from './wealth/wealth.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [{
    path: 'dashboard',
    component: DashboardComponent,
  },{
    path: 'wealth',
    component: WealthComponent,
  },{
    path: 'notes',
    component: NotesComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
