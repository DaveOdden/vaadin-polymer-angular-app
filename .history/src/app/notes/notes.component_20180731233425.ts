import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import { UserService } from '../user.service';
import { GoogleApiService } from 'ng-gapi';
import { SheetResource } from '../SheetsResource'

@Component({
  selector: 'notes-component',
  templateUrl: 'notes.component.html'
})
export class NotesComponent implements OnInit {
  ngOnInit() {
    console.log('flare');
  }

  public sheetId: string;
  public sheet: any;
  public foundSheet: any;
  public allSheets: any;

  constructor(private userService: UserService,
              private sheetResource: SheetResource,
              private authService: GoogleAuthService,
              private gapiService: GoogleApiService) {
     // First make sure gapi is loaded can be in AppInitilizer
     this.gapiService.onLoad().subscribe();
     this.authService.getAuth().subscribe((auth) => {
       //alert('Is SignedIn = ' + auth.isSignedIn.get())
     });
     console.log( this.getAllSheets() );
  }

  public isLoggedIn(): boolean {
    return this.userService.isUserSignedIn();
  }

  public signIn() {
    this.userService.signIn();
  }

  public create() {
    this.sheetResource.create(this.userService.getToken())
      .subscribe( res => this.sheet = res );
  }

  public getAllSheets() {
    this.sheetResource.findAll("", this.userService.getToken())
      .subscribe( res=> this.allSheets = res);
  }

  public findSheet() {
    if (!this.sheetId) {
      console.warn("no sheet id provided");
      return;
    }

    this.sheetResource.findById(this.sheetId, this.userService.getToken())
      .subscribe( res=> this.foundSheet = res);
  }
}