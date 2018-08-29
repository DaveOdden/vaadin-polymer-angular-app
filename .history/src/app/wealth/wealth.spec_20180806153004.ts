import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { WealthComponent } from './wealth.component';
import { Http, HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { ApiService } from '../api.service';

describe('WealthComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WealthComponent
			],
			providers: [
				HttpModule,
				{provide: ApiService, useClass: ApiService},
				{provide: APP_BASE_HREF, useValue: '/'}
			],
			imports: [
        HttpModule
      ],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
	}));
	
  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(WealthComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
	}));
	
});