import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { WealthComponent } from './wealth.component';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

describe('WealthComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WealthComponent
			],
			providers: [
				ApiService,
				HttpClient,
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