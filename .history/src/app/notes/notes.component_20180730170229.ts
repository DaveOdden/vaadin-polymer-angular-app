import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notes-component',
  template: `<h1>Wonk Gone</h1>`
})
export class NotesComponent implements OnInit {
  ngOnInit() {
    console.log('flare');
  }
}