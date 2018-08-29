/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { WealthComponent } from './wealth.component';

describe('WealthComponent', () => {
	let comp: WealthComponent;
  let fixture: ComponentFixture<WealthComponent>;
	let spy: any;

	beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [WealthComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        HeroService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
      imports: [
        RouterModule.forRoot([]),
        HttpModule
      ]
    }).compileComponents();

	}));
	
});