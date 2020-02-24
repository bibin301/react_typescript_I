'use strict';

import { RiskLevel } from './riskLevel';


export class Child {
    public id: number;
    public description: string;
    public name: string;
    public code: string;
    public deleted: boolean;
    public riskLevel: RiskLevel;
    public createdOn: any;
    public updatedOn: any;
    public createdBy: string;
    public updatedBy: string;
    public auditEntityType: string;
    public auditId: string;
    public type: number;
    public parentId?: number;
    public associatedBIC: string;
    public associatedCurrency: string;
}