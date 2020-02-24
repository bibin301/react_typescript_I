import { OrgUnit } from './../adm/orgunit/OrgUnit';
import { User } from './../user/User';
import { SecurityList2 } from './SecurityList2';

export class ComListData {
	public children: Array<ComListData>;
	public childrenFiles: number;
	public creationTimestamp: number;
	public creationUser: string;
	public deleted: boolean;
	public description: string;
	public id: string;
	public isFile: boolean;
	public isFolder: boolean;
	public isRoot: boolean;
	public label: string;
	public listOfOrgUnits: Array<OrgUnit>;
	public listType: number;
	public orgUnitId: number;
	public owner: User;
	public parentId: string;
	public securityList: Array<SecurityList2> //TODO find the type used Here
	public updateTimeStamp: number;
	public updateUser: string;
}
