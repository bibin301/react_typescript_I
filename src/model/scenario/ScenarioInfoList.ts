import { Rule } from './Rule';
import { ArrayOfRuleSecurity3 } from './ArrayOfRuleSecurity3';
import { ScenarioRuleAssociation } from './ScenarioRuleAssociation'
export class ScenarioInfoList {
  id: string;
  name: string;
  type: string;
  created: any;
  updated: any;
  createdBy: string;
  updatedBy: string;
  version: number;
  status: string;
  rules: Array<Rule>;
  rulesAssociation: Array<ScenarioRuleAssociation>;
  arrayOfRuleSecurity: Array<ArrayOfRuleSecurity3>;
  auditEntityType: string;
  auditId: string;
  workflowScenario: boolean;
  description: string;
}