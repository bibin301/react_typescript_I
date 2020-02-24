export class ListOfImportableField {
	public description: string;
	public typeOfEntity: number;
	public hibernateName: string;
	public type: string;
	public dataType: string;
	public algorithmPercent: number;
	public mandatory: boolean;
	public toBeTranslated: boolean;
	public viewable: boolean;
	public searchAble: boolean;
	public importable: boolean;
	public arrayOfException: any[];
	public arrayOfPossibilities: any[];
	public auditEntityType: string;
	public auditId: string;
	public id: number;
	public deleteStatus?: boolean;
	public uidIcons: string;
	public forEditing?: boolean;
}