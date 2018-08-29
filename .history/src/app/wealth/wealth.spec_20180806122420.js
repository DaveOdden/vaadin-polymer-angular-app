describe('WealthComponent', function() {
	
	it('#currencyFormat() should return currency format', () => {
    const comp = new WealthComponent();
    expect(comp.selectedPage).toBe(0, 'initialized as zero');
    expect(comp.currencyFormat(34981.13)).toBe('34,981.13', 'test');
  });

});