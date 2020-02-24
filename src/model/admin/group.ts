'use strict';

 export class Group {
    id: number;
    name: string;
    description: string;
    email: string;
    deleted: boolean;
    active: boolean;
    updatedOn: any;
    updatedBy: string;
    auditEntityType: string;
    auditId: string;
}
