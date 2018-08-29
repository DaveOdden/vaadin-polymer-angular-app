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

    <paper-dropdown-menu label="Dinosaurs">
      <paper-listbox slot="dropdown-content" selected="1">
        <paper-item>allosaurus</paper-item>
        <paper-item>brontosaurus</paper-item>
        <paper-item>carcharodontosaurus</paper-item>
        <paper-item>diplodocus</paper-item>
      </paper-listbox>
    </paper-dropdown-menu>
})
export class AppComponent {
  value: string;
  checked: boolean;
}