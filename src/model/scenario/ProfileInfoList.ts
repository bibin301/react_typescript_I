import { ArrayOfRuleSecurity } from './ArrayOfRuleSecurity';

export class ProfileInfoList {
  public id: string;
  public name: string;
  public description: string;
  public profileTypeId: number;
  public timeAmount: number;
  public created: any;
  public updated: any;
  public createdBy: string;
  public updatedBy: string;
  public transactionsHistory: boolean;
  public arrayOfRuleSecurity: Array<ArrayOfRuleSecurity>;
  public auditEntityType: string;
  public auditId: string;
}