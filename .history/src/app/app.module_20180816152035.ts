import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PolymerModule } from '@codebakery/origami';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WealthComponent } from './wealth/wealth.component';
import { NotesComponent } from './notes/notes.component';
import {
  GoogleApiModule, 
  GoogleApiService, 
  GoogleAuthService, 
  NgGapiClientConfig, 
  NG_GAPI_CONFIG,
  GoogleApiConfig
} from "ng-gapi";
import { UserService } from './user.service';
import { SheetResource } from './SheetsResource';
import { SpotifyAPIService } from './spotify.service';

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "655855026823-n01ko5eu7ua0jch7nk2npsvavjks24bl.apps.googleusercontent.com",
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  scope: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.readonly",
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/spreadsheets.readonly"
  ].join(" ")
};

@NgModule({
   imports: [
      BrowserModule,
      FormsModule, // Origami requires the Angular Forms module
      PolymerModule.forRoot(), // Do not call .forRoot() when importing in child modules
      HttpModule,
      HttpClientModule,
      AppRoutingModule,
      GoogleApiModule.forRoot({
        provide: NG_GAPI_CONFIG,
        useValue: gapiClientConfig
      }),
   ],
  declarations: [
    AppComponent,
    DashboardComponent,
    WealthComponent,
    NotesComponent
  ],
  providers: [
    UserService,
    SheetResource,
    SpotifyAPIService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})

export class AppModule { }
