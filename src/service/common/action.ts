import actionType from './actionType';
import { store } from './../../index';
import BottomNotificationVariants from './../../constants/bottomNotification/BottomNotificationVarientEnum';
import sidebarEnum from './../../constants/SidebarEnum';
import { CommonDAO } from './../../model/dao/CommonDAO';
import { CommonResponseDTO } from './../../model/dto/CommonResponseDTO';
import { UserDTO } from './../../model/dto/UserDTO';
import { CommonFilesReqDTO } from './../../model/dto/CommonFilesReqDTO';

export const dispatchLoadingShow = () => {
  store.dispatch(showIsLoading());
}

export const dispatchHideIsLoading = () => {
  store.dispatch(hideIsLoading());
}

const showIsLoading = () => {
  return {
    type: actionType.SHOW_IS_LOADING
  }
}

const hideIsLoading = () => {
  return {
    type: actionType.HIDE_IS_LOADING
  }
}

export const showNotification = (variants: BottomNotificationVariants, message: string, loadingCurrent: string = null, loadingMax: string = null ) => {
  store.dispatch({
    type: actionType.SHOW_BOTTOM_NOTIFICATION,
    payload: {
      variants,
      message,
      loadingCurrent,
      loadingMax,
      time: new Date().toLocaleTimeString()
    }
  });
}

export const switchView = () => {
  store.dispatch({ type: actionType.SWITCHVIEW });
}

export const switchSidebar = () => {
  store.dispatch({ type: actionType.SIDEBAR });
}

export const changeTab = (sidebar: sidebarEnum) => {
  store.dispatch({ type: actionType.CHANGETAB, payload: sidebar });
}

export const resetTab = () => {
  store.dispatch({ type: actionType.RESETTAB });
}

export const userMenuOpen = () => {
  store.dispatch({ type: actionType.USERMENU })
}

export const popoverChildIsAvailable = () => {
  store.dispatch({ type: actionType.POPOVER_CHILD_IS_AVAILABLE })
}
export const popoverChildNotAvailable = () => {
  store.dispatch({ type: actionType.POPOVER_CHILD_NOT_AVAILABLE })
}

export const getAllAvailableJob = () => {
  let commonDAO = new CommonDAO();
  commonDAO.getAllAvailableJob().then(function(result: { status: string, message: string, allJobsList: CommonResponseDTO["allJobsList"] }) {
    store.dispatch({
      type: actionType.GETALLAVAILABLEJOBS,
      payload: result.allJobsList
    })
  })
}

export const getPermission = () => {
  let commonDAO = new CommonDAO();
  commonDAO.getPermission().then(function(result: { status: string, message: string, permissions: CommonResponseDTO["permissions"] }) {
    store.dispatch({
      type: actionType.GETPERMISSION,
      payload: result.permissions
    })
  })
}

export const getInternalListsByOrgUnitForJobs = (orgunit: string) => {
  let commonDAO = new CommonDAO();
  commonDAO.getInternalListsByOrgUnitForJobs(orgunit).then(function(result) {
    console.log('debug, i need the third type of result to know what type to use');
    console.log(result);
    store.dispatch({
      type: actionType.GETINTERNALLISTSBYORGUNITFORJOBS,
      payload: result
    })
  })
}

export const getProfileNameList = () => {
  let commonDAO = new CommonDAO();
  commonDAO.getProfileNameList().then(function(result: { status: string, message: string, listDetails: CommonResponseDTO["listDetails"] }) {
    store.dispatch({
      type: actionType.GETPROFILENAMELIST,
      payload: result.listDetails
    })
  })
}

export const getAllScenarioJob = () => {
  let commonDAO = new CommonDAO();
  commonDAO.getScenariosForJob().then(function(result: { status: string, message: string, scenarioJobList: CommonResponseDTO["scenarioJobList"] }) {
    store.dispatch({
      type: actionType.ALLSCENARIOJOB,
      payload: result.scenarioJobList
    })
  })
}

export const getAuditAction = () => {
  let commonDAO = new CommonDAO();
  commonDAO.getAuditAction().then(function(result: { status: string, message: string, auditActionResponseList: CommonResponseDTO["auditActionResponseList"] }) {
    store.dispatch({
      type: actionType.ALLSCENARIOJOB,
      payload: result.auditActionResponseList
    })
  })
}

export const getAllTemplate = () => {
  let commonDAO = new CommonDAO();
  commonDAO.getAllTemplate().then(function(result: { status: string, message: string, batchTemplates: CommonResponseDTO["batchTemplates"] }) {
    store.dispatch({
      type: actionType.GETALLTEMPLATES,
      payload: result.batchTemplates
    })
  })
}

export const getPathsForJobs = (userDTO: UserDTO) => {
  let commonDAO = new CommonDAO();
  commonDAO.getPathForJobs(userDTO).then(function(result: { status: string, message: string, pathJobList: CommonResponseDTO["pathJobList"] }) {
    store.dispatch({
      type: actionType.ALLPATHJOB,
      payload: result.pathJobList
    })
  })
}

export const getFilesForJobs = (commonFilesReqDTO: CommonFilesReqDTO) => {
  let commonDAO = new CommonDAO();
  commonDAO.getFilesForJobs(commonFilesReqDTO).then(function(result: { status: string, message: string, fileJobList: CommonResponseDTO["fileJobList"] }) {
    store.dispatch({
      type: actionType.ALLFILESJOB,
      payload: result.fileJobList
    })
  })
}

export const commonActions = (userDTO: UserDTO) => {
  let commonFilesReqDTO = new CommonFilesReqDTO();
  commonFilesReqDTO["userDTO"] = userDTO;
  commonFilesReqDTO["folderId"] = '';
  commonFilesReqDTO["fileType"] = '';

  getAllAvailableJob();
  getPermission();
  getInternalListsByOrgUnitForJobs(userDTO.orgUnits[0].code); //TODO what is expected a code ? the id which is a number ? the description ?
  getProfileNameList();
  getAuditAction();
  getProfileNameList();
  getAllScenarioJob();
  getPathsForJobs(userDTO);
  getFilesForJobs(commonFilesReqDTO);
  getAllTemplate();
}
