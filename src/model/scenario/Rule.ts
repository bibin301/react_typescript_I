import { RulesPeriodicity } from './RulesPeriodicity';
import { ArrayOfRuleSecurity } from './ArrayOfRuleSecurity';
export class Rule {
  public id: string;
  public ruleName: string;
  public condition: string;
  public action: string;
  public created: any;
  public updated: any;
  public createdBy: string;
  public updatedBy: string;
  public status: string;
  public type: number;
  public rulesPeriodicity: RulesPeriodicity;
  public arrayOfRuleSecurity: Array<ArrayOfRuleSecurity>;
  public validateComment: string;
  public outdated: boolean;
  public auditEntityType: string;
  public auditId: string;
  public description: string;
  public ruleActivationGroup: string;
}