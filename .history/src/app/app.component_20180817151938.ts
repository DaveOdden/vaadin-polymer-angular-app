import { Component } from '@angular/core';

import '@polymer/iron-pages';
import '@vaadin/vaadin-core';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/paper-spinner/paper-spinner';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `Hello World`
})
export class AppComponent {
  title: string = 'sucka';
}