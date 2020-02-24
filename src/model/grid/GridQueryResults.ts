export class GridQueryResults<T> {
	public pageNumber: number;
	public maximumAmount: number;
	public amountReturned: number;

	public resultList: Array<T>;
}
