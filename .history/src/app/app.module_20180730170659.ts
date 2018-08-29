import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PolymerModule } from '@codebakery/origami';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WealthComponent } from './wealth/wealth.component';
import { NotesComponent } from './notes/notes.component';

@NgModule({
   imports: [
      BrowserModule,
      FormsModule, // Origami requires the Angular Forms module
      PolymerModule.forRoot(), // Do not call .forRoot() when importing in child modules
      HttpClientModule,
      AppRoutingModule
   ],
   declarations: [
      AppComponent,
      DashboardComponent,
      WealthComponent,
      NotesComponent
   ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
   bootstrap: [AppComponent],
})

export class AppModule { }
