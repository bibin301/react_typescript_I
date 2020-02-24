import { Group } from './../adm/group/Group';
import { OrgUnit } from './../adm/orgunit/OrgUnit';

export class LinkChartSecurity {

	public uid: string;
	public linkChartId: string;
	public description: string;
	public userId: string;
	public groupId: number;
	public orgunitId: string;
	public group: Group;
	public orgUnit: OrgUnit;
	public permission: string;
	public creationUser: string;
	public creationDtg: Date;
	public deletionUser: string;
	public deletionDtg: Date;
	public deleteStatus: string;

}
