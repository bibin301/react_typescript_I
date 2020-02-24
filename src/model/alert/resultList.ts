import { WorkflowStatus } from './workflowStatusAlert'
import { OrgUnitObj } from './orgUnitObjAlert'
import { UserAlert } from './UserAlert'
  
export class ResultList {
    worldCheckResult: any[];
    alertDetailsDescription: any[];
    userAlert: UserAlert;
    priorityDescription: string;
    workflowStatusDescription: string;
    popupDisplay: string;
    entityType: number;
    id: number;
    atomId: number;
    uid: string;
    ownedBy: string;
    deleted: boolean;
    createdBy: string;
    createdOn: string;
    updatedOn: string;
    updatedBy: string;
    sourceOfData: string;
    longitude: number;
    latitude: number;
    formattedFullName: string;
    scenarioName: string;
    ruleName: string;
    information: string;
    detailledInformation?: any;
    description: string;
    score: number;
    alertDate: string;
    assignTo: string;
    assignToGroup: string;
    locked: boolean;
    lockedBy?: any;
    lockedOn?: any;
    priority: number;
    statusID: number;
    workflowStatus: WorkflowStatus;
    organizationId: string;
    orgUnitObj: OrgUnitObj;
    listId: string;
    transactionReference?: any;
    messageReference?: any;
    version: number;
    dueDate: string;
}
