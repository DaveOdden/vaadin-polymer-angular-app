import { Component } from '@angular/core';

import '@polymer/iron-pages';
import '@vaadin/vaadin-core';
import '@polymer/paper-checkbox/paper-checkbox';
import '@polymer/paper-input/paper-input';

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

    <vaadin-list-box>
      <vaadin-item>Jose</vaadin-item>
      <vaadin-item>Manolo</vaadin-item>
      <vaadin-item>Pedro</vaadin-item>
    </vaadin-list-box>`
})
export class AppComponent {
  value: string;
  checked: boolean;
}