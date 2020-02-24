import { User } from './../user/User';
import { ListDetails } from './ListDetails';
import { SecurityModel } from './../com/SecurityModel';

export class NavigatorData {

	public id: string;
	public parentId: string;
	public label: string;
	public description: string;
	public creationTimestamp: Date;
	public updateTimestamp: Date;
	public updateUser: string;
	public creationUser: string;
	public owner: User;
	public listType: number;
	public orgUnitId: number;
	public permissionId: number;
	public isFolder: boolean;
	public isFile: boolean;
	public isRoot: boolean;
	public deleted: boolean;
	public propagateSecurityFiles: boolean;
	public propagateSecurityFolders: boolean;
	public children: any;
	public childrenFiles: number;
	public logicalViews: Array<ListDetails>;
	public listOfOrgUnits: Array<SecurityModel>;
	public securityList: Array<SecurityModel>;
	public evaluation: string;
	public propagateEvaluationFiles: boolean;
	public propagateEvaluationFolders: boolean;
	public originalUid: string;
	public name: string;
	public languageIso3: string;

}
