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

  private allSheetIds: any = [
    '1-pZdo3jdqKQYW47wJtN4Z9WOxejJoxh0JGxNSuJ3c1w',
    '1K3Tf5-KwZdgeXu2V-x6CPZuORAqxc6ttkEcwuOD67AE',
    '1-HC53Txh75EcPeBOQhkNzbbfR96smzFwKOzdQ3hx12Q'
  ]

  constructor(private userService: UserService,
              private sheetResource: SheetResource,
              private authService: GoogleAuthService,
              private gapiService: GoogleApiService) {
     // First make sure gapi is loaded can be in AppInitilizer
     this.gapiService.onLoad().subscribe();
     this.authService.getAuth().subscribe((auth) => {
      for(let x = 0; x <= this.allSheetIds.length; x++ ) {
        console.log(this.findSheet(this.allSheetIds[x]));
      }
     });
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

  public findSheet( sheetIdParam ) {
    // if (!(sheetIdParam || this.sheetId)) {
    //   console.warn("no sheet id provided");
    //   return;
    // }

    this.sheetResource.findById('1-pZdo3jdqKQYW47wJtN4Z9WOxejJoxh0JGxNSuJ3c1w', this.userService.getToken())
      .subscribe( res=> this.foundSheet = res);
  }
}