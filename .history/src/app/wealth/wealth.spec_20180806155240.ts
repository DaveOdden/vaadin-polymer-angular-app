import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TestBed, async, inject} from '@angular/core/testing';
import { WealthComponent } from './wealth.component';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { APP_BASE_HREF } from '@angular/common';
import { ApiService } from '../api.service';

describe('WealthComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WealthComponent
			],
			providers: [
				ApiService,
				{provide: APP_BASE_HREF, useValue: '/'}
			],
			imports: [
				HttpClientModule,
        HttpClientTestingModule
      ],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
	}));

	var myService = null;

  it('should create the component', done => {
    const fixture = TestBed.createComponent(WealthComponent);
    const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
		done();
	});

	it('should invoke the getStocks function', inject([ApiService], (ApiService) => {
    const fixture = TestBed.createComponent(WealthComponent);
    const app = fixture.debugElement.componentInstance;
		console.log( ApiService.getStock() );
	}));
	
});