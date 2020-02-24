import { ListOfField } from './ListOfField'
import { ListOfImportableField } from './ListOfImportableField'

export class LogicalView {
	public id: string;
	public description: string;
	public hibernateName: string;
	public type: string;
	public entityUid: string;
	public entityType: string;
	public amountOfRecords: number;
	public amountOfColumn: number;
	public deleteStatus: boolean;
	public listType: number;
	public viewable: boolean;
	public importable: boolean;
	public listOfOrgUnits: any[];
	public securityList: any[];
	public listOfFields: ListOfField[];
	public listOfImportableFields: ListOfImportableField[];
}
