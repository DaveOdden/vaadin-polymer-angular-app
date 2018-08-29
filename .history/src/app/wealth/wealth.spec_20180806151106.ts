/* tslint:disable:no-unused-variable */
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { WealthComponent } from './wealth.component';
// import { APP_BASE_HREF } from '@angular/common';
// import { RouterModule } from '@angular/router';

// describe('WealthComponent', () => {
// 	let comp: WealthComponent;
//   let fixture: ComponentFixture<WealthComponent>;
// 	let spy: any;

// 	beforeEach(async(() => {

//     TestBed.configureTestingModule({
//       declarations: [WealthComponent],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//       providers: [
//         {provide: APP_BASE_HREF, useValue: '/'}
//       ],
//       imports: [
//         RouterModule.forRoot([]),
//       ]
//     }).compileComponents();

// 	}));

// 	beforeEach(() => {
// 		fixture = TestBed.createComponent(WealthComponent);
// 		comp = fixture.componentInstance;
// 		fixture.detectChanges();
//   });

// 	it('should be created', () => {
//     expect(comp).toBeTruthy();
//   });
	
// });


import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { WealthComponent } from './wealth.component';

describe('WealthComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WealthComponent
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
	}));
	
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(WealthComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
	}));
	
});