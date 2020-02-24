'use strict';

import { RulesDefinition } from './../scenario/RulesDefinition';
import { Rules } from './../scenario/Rules';
import { RuleStatus } from './../scenario/RuleStatus';
import { ScenarioStats } from './../scenario/ScenarioStats';
import { RulesStats } from './../scenario/RulesStats';
import { ScenarioStatus } from './../scenario/ScenarioStatus';

//TODO reestablish the var for list object but a meaningful object created in the javaee would help...

export class DetectionResponseDTO {
	public rulesDefinitionList: Array<RulesDefinition>;
	//  public List<Object> rulesInfoList;
	//  public List<Object> scenarioInfoList;
	//  public List<Object> profileInfoList;
	public ruleStatusList: Array<RuleStatus>;
	public scenarioStatusList: Array<ScenarioStatus>;
	public scenarioStats: ScenarioStats;
	public rulesStats: RulesStats;
	public profileStats: RulesStats;
	public listOfRulesByPeriodicty: Array<Rules>;
}
