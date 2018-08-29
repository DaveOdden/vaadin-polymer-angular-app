import { WealthComponent } from './wealth.component';

describe('WealthComponent', function() {
	
	it('#currencyFormat() should return currency format', () => {
		const comp = new WealthComponent();
		console.log(comp);
		//expect(comp.selectedPage).toBe(0, 'initialized as zero');
		comp.calculateYesterdaysVariance();
    expect(comp.testTest).toBe('knocker', 'test Test');
  });

});