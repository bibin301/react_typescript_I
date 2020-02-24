'use strict';

import { RiskLevel } from './riskLevel';
import {Child} from './child';
import {Parent} from './parent';
import {Link} from './link';


export class OrgUnitList {

    public id: number;
    public description: string;
    public name: string;
    public code: string;
    public deleted: boolean;
    public riskLevel: RiskLevel;
    public children: Child;
    public parents: Parent;
    public links: Link[];
    public updatedOn: any;
    public updatedBy: string;
    public auditEntityType: string;
    public auditId: string;
    public createdOn?: number;
    public createdBy: string;
    public parentId?: number;
    public associatedBIC: string;
    public associatedCurrency: string;
    
}

