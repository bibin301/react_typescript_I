import { FieldDescription } from './../base/FieldDescription';
import { DoiTBasicTransaction } from './../transaction/DoiTBasicTransaction';

export class RelationShip {
	public id: number;
	public atomId: number;
	public uid: string;
	public name: string;
	public type: string;
	public linkWeight: number;
	public linkDirection: string;
	public description: string;
	public dateBegin: Date;
	public dateEnd: Date;
	public startOfDtgTz: string;
	public endOfDtgTz: string;

	public fromClientId: string;
	public toClientId: string;

	public listId: string;
	public orgUnitId: number;
	public originId: string;

	public fromUid: string;
	public toUid: string;
	public fromSourceOfData: string;
	public toSourceOfData: string;

	public fromFormattedFullName: string;
	public toFormattedFullName: string;
	public originIdEnd1: string;
	public originIdEnd2: string;

	//Transactions
	public transactions: Array<DoiTBasicTransaction>;

	public ownedBy: string;

	// Data Information
	public createdBy: string;
	public createdOn: Date;
	public updatedOn: Date;
	public updatedBy: string;

	public sourceOfData: string;
	public deleted: boolean;
	public descriptionFull: string;

	public linkStatus: number;
	public searchParameter: Array<FieldDescription>;
}
