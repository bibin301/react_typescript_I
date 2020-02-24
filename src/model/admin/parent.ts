'use strict';

import { RiskLevel } from './riskLevel';


export class Parent {
    public id: number;
    public description: string;
    public name: string;
    public code: string;
    public deleted: boolean;
    public riskLevel: RiskLevel;
    public updatedOn: any;
    public updatedBy: string;
    public auditEntityType: string;
    public auditId: string;
    public type: number;
}