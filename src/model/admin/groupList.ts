'use strict';

import { User } from './groupUser';

export class GroupList {
    id: number;
    name: string;
    description: string;
    email: string;
    deleted: boolean;
    active: boolean;
    updatedOn: number;
    updatedBy: string;
    user: User[];
    role: any[];
    auditEntityType: string;
    auditId: string;
}
