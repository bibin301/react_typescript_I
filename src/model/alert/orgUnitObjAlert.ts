import { RiskLevel } from './RiskLevel';
import { Parent } from './parent';
import { Link } from './link';

export class OrgUnitObj {
    id: number;
    description: string;
    name: string;
    code: string;
    parentId: number;
    deleted: boolean;
    associatedBIC: string;
    associatedCurrency: string;
    riskLevel: RiskLevel;
    children: any[];
    parents: Parent[];
    links: Link[];
    createdOn: any;
    updatedOn: any;
    createdBy: string;
    updatedBy: string;
    auditEntityType: string;
    auditId: string;
}