import { UserAlert } from './UserAlert';
import { WorkflowStatus } from './WorkflowStatus';
import { OrgUnitObj } from './OrgUnitObj';

export class RightPaneDetailsAlert{
	public worldCheckResult: any[];
	public alertDetailsDescription: any[];
	public userAlert: UserAlert;
	public priorityDescription: string;
	public workflowStatusDescription: string;
	public popupDisplay: string;
	public entityType: number;
	public id: number;
	public atomId: number;
	public uid: string;
	public ownedBy: string;
	public deleted: boolean;
	public createdBy: string;
	public createdOn: string;
	public updatedOn: string;
	public updatedBy: string;
	public sourceOfData: string;
	public longitude: number;
	public latitude: number;
	public formattedFullName: string;
	public scenarioName: string;
	public ruleName: string;
	public information: string;
	public detailledInformation?: any;
	public description: string;
	public score: number;
	public alertDate: string;
	public assignTo: string;
	public assignToGroup: string;
	public dueDate: string;
	public locked: boolean;
	public lockedBy?: any;
	public lockedOn?: any;
	public priority: number;
	public statusID: number;
	public workflowStatus: WorkflowStatus;
	public organizationId: string;
	public orgUnitObj: OrgUnitObj;
	public listId: string;
	public transactionReference?: any;
	public messageReference?: any;
	public version: number;
	public originId: string;

	constructor() {
                
	}
}