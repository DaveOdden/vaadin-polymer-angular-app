import { Component } from '@angular/core';

import '@polymer/iron-pages';
import '@vaadin/vaadin-core';
import '@polymer/paper-checkbox/paper-checkbox';
import '@polymer/paper-input/paper-input';
import '@vaadin/vaadin-dropdown-menu/vaadin-dropdown-menu.js';

@Component({
  selector: 'app-root',
  template: `
    <vaadin-tabs
      id="tabs"
      [selected]="selectedPage"
      (selected-changed)="selectedPage=$event.detail.value">
      <vaadin-tab>All Contacts</vaadin-tab>
      <vaadin-tab>Add New</vaadin-tab>
    </vaadin-tabs>
     <paper-input label="Hello from Polymer" ironControl [(ngModel)]="value"></paper-input>
     <paper-checkbox [checked]="checked" (checked-changed)="checked = $event.detail.value"></paper-checkbox>`
})
export class AppComponent {
  value: string;
  checked: boolean;
}