import { RuleVariable } from './RuleVariable';

export class RulesDefinition {
	public uid: string;
	public ruleTemplate: string;
	public type: string;
	public category: string;
	public outCategory: string;
	public variables: Array<RuleVariable>;
	public description: string;
}
