'use strict';

import { RiskLevel } from './riskLevel';
import { Child } from './child';
import { Parent } from './parent';
import { Link } from './link';


export class AllRiskList {
    id: number;
    description: string;
    name: string;
    code: string;
    deleted: boolean;
    riskLevel: RiskLevel;
    children: Child[];
    parents: Parent[];
    links: Link[];
    updatedOn: any;
    updatedBy: string;
    auditEntityType: string;
    auditId: string;
    createdOn?: number;
    createdBy: string;
    parentId?: number;
    associatedBIC: string;
    associatedCurrency: string;
}