import { Component } from '@angular/core';

import '@polymer/iron-pages';
import '@vaadin/vaadin-core';
import '@polymer/paper-checkbox/paper-checkbox';
import '@polymer/paper-input/paper-input';

@Component({
  selector: 'app-root',
  template: `
     <paper-input label="Hello from Polymer" ironControl [(ngModel)]="value"></paper-input>
     <paper-checkbox [checked]="checked" (checked-changed)="checked = $event.detail.value"></paper-checkbox>`
})
export class AppComponent {
  value: string;
  checked: boolean;
}