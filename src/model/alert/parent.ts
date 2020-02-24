import { RiskLevel } from './RiskLevel';


export class Parent {
    id: number;
    description: string;
    name: string;
    code: string;
    deleted: boolean;
    riskLevel: RiskLevel;
    updatedOn: number;
    updatedBy: string;
    auditEntityType: string;
    auditId: string;
    type: number;
}