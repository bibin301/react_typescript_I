import { RiskLevel } from './RiskLevel';

export class OrgUnitObj {
  public id: number;
  public description: string;
  public name: string;
  public code: string;
  public deleted: boolean;
  public riskLevel: RiskLevel;
  public children: any[];
  public parents: any[];
  public links: any[];
  public createdOn: any;
  public updatedOn: any;
  public createdBy: string;
  public updatedBy: string;
  public auditEntityType: string;
  public auditId: string;
}