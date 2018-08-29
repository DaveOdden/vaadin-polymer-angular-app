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