'use strict';

export class Role {
    id: number;
    name: string;
    description: string;
    active: boolean;
    deleted: boolean;
    updatedOn: any;
    updatedBy: string;
    auditEntityType: string;
    auditId: string;
    createdOn?: number;
    createdBy: string;
}