'use strict';

import { Permission } from './permission';
import { User } from './roleUser';

export class RolesList {
    id: number;
    name: string;
    description: string;
    active: boolean;
    deleted: boolean;
    updatedOn: any;
    updatedBy: string;
    permission: Permission[];
    group: any[];
    user: User[];
    auditEntityType: string;
    auditId: string;
    createdOn?: number;
    createdBy: string;
}
