import { User } from './../user/User';
import { Group } from './../adm/group/Group';
import { OrgUnit } from './../adm/orgunit/OrgUnit';

export class SecurityModel {
	public id: string;
	public ownership: boolean;
	public readwrite: boolean;
	public readonly: boolean;
	public checkedin: boolean;

	public listId: string;
	public description: string;

	public user: User;
	public group: Group;
	public orgUnit: OrgUnit;

	public inAll: boolean;
}
