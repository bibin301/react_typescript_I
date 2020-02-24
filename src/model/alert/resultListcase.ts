import { WorkflowStatus } from './workFowStatusCase'

export class ResultListCase {
    version: number;
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
    startDate?: any;
    endDate?: any;
    sourceOfData: string;
    longitude: number;
    latitude: number;
    formattedFullName: string;
    name: string;
    description: string;
    statusId: number;
    assignTo?: any;
    assignToGroup?: any;
    workflowStatus: WorkflowStatus;
    locked: boolean;
    listId: string;
}