export class Purchase {
	_id: string;
	name: string;
	description: string;
	subCategories: Array<any>;
}

export class SubPurchase {
	_id: string;
	newCategory: Object;
}