import AppComponent from './wealth.component.ts';
import WealthComponent from '../app.component.ts';

beforeEach(() => {
	TestBed.configureTestingModule({
		imports: [FormsModule],
		declarations: [AppComponent, WealthComponent]
	});
});

describe('WealthComponent', function() {
	
	it('#currencyFormat() should return currency format', () => {
		const comp = new WealthComponent();
		console.log(comp);
		//expect(comp.selectedPage).toBe(0, 'initialized as zero');
		comp.calculateYesterdaysVariance();
    expect(comp.testTest).toBe('knocker', 'test Test');
  });

});