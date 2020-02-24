import { OrgUnit } from './../adm/orgunit/OrgUnit';

export class ListOfOrgUnit {
	public id: string;
	public ownership: boolean;
	public readwrite: boolean;
	public readonly: boolean;
	public checkedin: boolean;
	public orgUnit: OrgUnit;
}