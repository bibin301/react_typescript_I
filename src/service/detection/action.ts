import { store } from './../../index';
import { dispatchLoadingShow, dispatchHideIsLoading } from './../../service/common/action';
import { actionType } from './actionType';

import { DetectionDAO } from './../../model/dao/DetectionDAO';
import { RulesStats } from './../../model/scenario/RulesStats';
import { ProfileStats } from './../../model/scenario/ProfileStats';
import { ProfileInfoList } from './../../model/scenario/ProfileInfoList';
import { ScenarioInfoList } from './../../model/scenario/ScenarioInfoList';
import { Rules } from './../../model/scenario/Rules';
import { OrgUnitObj } from './../../model/alert/OrgUnitObj';
import { ScenarioStats } from './../../model/scenario/ScenarioStats';

export const getRuleStatus = () => {
	let detectionDAO = new DetectionDAO();
	let response = detectionDAO.getRuleStatus();

	response.then(function(results) {
		store.dispatch({
			type: actionType.GETRULESTATUS,
			payload: results.ruleStatusList
		})
	})
}

export const getScenarioStatus = () => {
	let detectionDAO = new DetectionDAO();
	let response = detectionDAO.getScenarioStatus();

	response.then(function(results) {
		store.dispatch({
			type: actionType.GETSCENARIOSTATUS,
			payload: results.scenarioStatusList
		})

	});
}

export const getAllSbDetectionRulesStatus = (userId: string, availableLists: Array<string>) => {
  let detectionDAO = new DetectionDAO();
	let response = detectionDAO.getAllSbDetectionRulesStatus(userId, availableLists);

  response.then(function(result: { status: string, message: string, rulesStats: RulesStats}){
    if (result.status === "Success") {
      store.dispatch(allSbDetectionRulesStatusSuccess(result.rulesStats))
    } else {
      console.log(result)
    }
  });
}
export const getAllSbDetectionScenariosStatus = (userId: string, availableLists: Array<string>) => {
  let detectionDAO = new DetectionDAO();
	let response = detectionDAO.getAllSbDetectionScenariosStatus(userId, availableLists);

  response.then(function(result: { status: string, message: string, scenarioStats: ScenarioStats}){
    if (result.status === "Success") {
      store.dispatch(allSbDetectionScenariosStatusSuccess(result.scenarioStats))
    } else {
      console.log(result)
    }
  });
}
export const getAllSbDetectionProfilesStatus = (userId: string, availableLists: Array<string>) => {
  let detectionDAO = new DetectionDAO();
	let response = detectionDAO.getAllSbDetectionProfilesStatus(userId, availableLists);

  response.then(function(result: { status: string, message: string, profileStats: ProfileStats}){
    if (result.status === "Success") {
      store.dispatch(allSbDetectionProfilesStatusSuccess(result.profileStats))
    } else {
      console.log(result)
    }
  });
}
export const getAllDetectionRulesList = (detectionIdSelectedSb: number, id: number, userId: string, availableLists: Array<string>, availableOrgUnits: Array<string>, orgUnits: Array<OrgUnitObj>, availablePerms: Array<number>) => {
  dispatchLoadingShow();
  let detectionDAO = new DetectionDAO();
	let response = detectionDAO.getAllDetectionRulesList(detectionIdSelectedSb, id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms);

  response.then(function(result: { status: string, message: string, rulesInfoList: Array<any>}){
    if (result.status === "Success") {
      dispatchHideIsLoading();
      store.dispatch(allDetectionRulesListSuccess(result.rulesInfoList[1] as Array<Rules>))
    } else {
      dispatchHideIsLoading();
      console.log(result)
    }
  });
}
export const getAllDetectionScenariosList = (detectionNameSelectedSb: string, id: number, userId: string, availableLists: Array<string>, availableOrgUnits: Array<string>, orgUnits: Array<OrgUnitObj>, availablePerms: Array<number>) => {
  dispatchLoadingShow();
  let detectionDAO = new DetectionDAO();
	let response = detectionDAO.getAllDetectionScenariosList(detectionNameSelectedSb, id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms);

  response.then(function(result: { status: string, message: string, scenarioInfoList: any[]}){
    if (result.status === "Success") {
      dispatchHideIsLoading();
      store.dispatch(allDetectionScenariosListSuccess(result.scenarioInfoList[1] as Array<ScenarioInfoList>))
    } else {
      dispatchHideIsLoading();
      console.log(result)
    }
  });
}
export const getAllDetectionProfilesList = (detectionIdSelectedSb: number, id: number, userId: string, availableLists: Array<string>, availableOrgUnits: Array<string>, orgUnits: Array<OrgUnitObj>, availablePerms: Array<number>) => {
  dispatchLoadingShow();
  let detectionDAO = new DetectionDAO();
	let response = detectionDAO.getAllDetectionProfilesList(detectionIdSelectedSb, id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms);

  response.then(function(result: { status: string, message: string, profileInfoList: Array<any>}){
    if (result.status === "Success") {
      dispatchHideIsLoading();
      store.dispatch(allDetectionProfilesListSuccess(result.profileInfoList[1] as Array<ProfileInfoList>))
    } else {
      dispatchHideIsLoading();
      console.log(result)
    }
  });
}

export const allSbDetectionRulesStatusSuccess = (response) => {
  return {
    type: actionType.ALL_SB_DETECTION_RULES_STATUS_SUCCESS,
    payload: response
  }
}

export const allSbDetectionScenariosStatusSuccess = (response) => {
  return {
    type: actionType.ALL_SB_DETECTION_SCENARIOS_STATUS_SUCCESS,
    payload: response
  }
}

export const allSbDetectionProfilesStatusSuccess = (response) => {
  return {
    type: actionType.ALL_SB_DETECTION_PROFILES_STATUS_SUCCESS,
    payload: response
  }
}

export const allDetectionRulesListSuccess = (response) => {
  return {
    type: actionType.ALL_DETECTION_LIST_SUCCESS,
    payload: response
  }
}

export const allDetectionScenariosListSuccess = (response) => {
  return {
    type: actionType.ALL_DETECTION_LIST_SUCCESS,
    payload: response
  }
}

export const allDetectionProfilesListSuccess = (response) => {
  return {
    type: actionType.ALL_DETECTION_LIST_SUCCESS,
    payload: response
  }
}
// export const topBarTitleSelectedSb = (data) => {
//   return {
//     type: actionType.TOP_BAR_TITLE_SELECTED_SB,
//     payload: data
//   }
// }
export const detectionIdSelectedSb = (data) => {
  return {
    type: actionType.DETECTION_ID_SELECTED_SB,
    payload: data
  }
}
export const detectionNameSelectedSb = (data) => {
  return {
    type: actionType.DETECTION_NAME_SELECTED_SB,
    payload: data
  }
}

