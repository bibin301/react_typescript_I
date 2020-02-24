import { BatchTemplateColumns } from './BatchTemplateColumns';

export class BatchTemplateActionColumns {
	public id: number;
	public actionId: number;
	public index: number;
	public cfunction: number;
	public name: string;
	public value: string;
	public selectedColumn: string;
	public columnList: Array<BatchTemplateColumns>;
}
