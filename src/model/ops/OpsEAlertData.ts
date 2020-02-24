import { BaseOpsData } from './BaseOpsData';
import { WorkflowStatusData } from './../base/WorkflowStatusData';
import { OrganizationUnitData } from './../base/OrganizationUnitData';
import { OpsEUserAlertData } from './OpsEUserAlertData';
import { OpsEAlertDetailledInformation } from './OpsEAlertDetailledInformation';

export class OpsEAlertData extends BaseOpsData {
	public uid: string;
	public scenarioName: string;
	public ruleName: string;
	public information: string;
	public detailledInformation: string;
	public description: string;
	public alertedEntityDescription: string;
	public score: number;
	public alertDate: Date;

	public priority: number;
	public statusID: number;

	public workflowStatusData: WorkflowStatusData;

	public listId: string;
	public originId: string;

	public assignTo: string;
	public assignToGroup: string;
	public dueDate: Date;

	public locked: number;
	public lockedBy: string;
	public lockedOn: Date;

	public organizationId: string;
	public orgUnitData: OrganizationUnitData;

	public transactionReference: string;
	public messageReference: string;

	public detailsInformation: Set<OpsEAlertDetailledInformation>;
	public userAlertData: Set<OpsEUserAlertData>;

	public version: number;

	public batchId: string;
	public whatIfId: string;
}
