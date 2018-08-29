import { Component } from '@angular/core';

import '@polymer/iron-pages';
import '@vaadin/vaadin-core';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/paper-spinner/paper-spinner';

@Component({
  selector: 'app-root',
  template: `
    <vaadin-tabs
      id="tabs"
      style="background-color: white; padding: 1rem 1rem 0 1rem">
      <vaadin-tab routerLink="/dashboard">Dashboard</vaadin-tab>
      <vaadin-tab routerLink="/wealth">Wealth</vaadin-tab>
      <vaadin-tab routerLink="/notes">Notes</vaadin-tab>
    </vaadin-tabs>

    <router-outlet></router-outlet>`
})
export class AppComponent {
  title: string = 'sucka';
}