'use strict';

export class Permission {
    id: number;
    parentId: number;
    name: string;
    description: string;
    read: boolean;
    write: boolean;
    active: boolean;
    deleted: boolean;
    creationDate: any;
}