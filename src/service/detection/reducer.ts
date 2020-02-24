import actionType from './actionType';

import { DetectionResponseDTO } from './../../model/dto/DetectionResponseDTO';
import { RulesStats } from './../../model/scenario/RulesStats';
import { ProfileStats } from './../../model/scenario/ProfileStats';
import { ProfileInfoList } from './../../model/scenario/ProfileInfoList';
import { ScenarioInfoList } from './../../model/scenario/ScenarioInfoList';
import { Rules } from './../../model/scenario/Rules';
import { OrgUnitObj } from './../../model/alert/OrgUnitObj';
import { ScenarioStats } from './../../model/scenario/ScenarioStats';

export type State = {
  ruleStatus: DetectionResponseDTO["ruleStatusList"],
  scenarioStatus: DetectionResponseDTO["scenarioStatusList"],
  allDetectionList: Array<ProfileInfoList | ScenarioInfoList | Rules>,
  allSbDetectionRulesStatus: RulesStats,
  allSbDetectionScenariosStatus: ScenarioStats,
  allSbDetectionProfilesStatus: ProfileStats,
  detectionIdSelectedSb: number,
  detectionNameSelectedSb: string
};

export let initialState: State = {
  ruleStatus: [{ id: 0, description: '' }],
  scenarioStatus: [{ id: 0, description: '' }],
  allDetectionList: [] as Array<ProfileInfoList | ScenarioInfoList | Rules>,
  allSbDetectionRulesStatus: {} as RulesStats,
  allSbDetectionScenariosStatus: {} as ScenarioStats,
  allSbDetectionProfilesStatus: {} as ProfileStats,
  detectionIdSelectedSb: 0,
  detectionNameSelectedSb: ''
}

interface actionTypeInterface {
  type: actionType,
  payload: any
}


export function detectionReducer(state: State = initialState, action: actionTypeInterface) {
  switch (action.type) {
    case actionType.GETRULESTATUS:
      return {
        ...state,
        ruleStatus: action.payload
      }
    case actionType.GETSCENARIOSTATUS:
      return {
        ...state,
        scenarioStatus: action.payload
      }
    case actionType.ALL_SB_DETECTION_RULES_STATUS_SUCCESS:
      return {
        ...state,
        allSbDetectionRulesStatus: action.payload
      }
    case actionType.ALL_SB_DETECTION_SCENARIOS_STATUS_SUCCESS:
      return {
        ...state,
        allSbDetectionScenariosStatus: action.payload
      }
    case actionType.ALL_SB_DETECTION_PROFILES_STATUS_SUCCESS:
      return {
        ...state,
        allSbDetectionProfilesStatus: action.payload
      }
    case actionType.ALL_DETECTION_LIST_SUCCESS:
      return {
        ...state,
        allDetectionList: action.payload
      }
    // case actionType.TOP_BAR_TITLE_SELECTED_SB:
    //   return {
    //     ...state,
    //     topBarTitleSelectedSb: action.payload
    //   }
    case actionType.DETECTION_ID_SELECTED_SB:
      return {
        ...state,
        detectionIdSelectedSb: action.payload
      }
    case actionType.DETECTION_NAME_SELECTED_SB:
      return {
        ...state,
        detectionNameSelectedSb: action.payload
      }
    default:
      return state;
  }
}

export default detectionReducer;
