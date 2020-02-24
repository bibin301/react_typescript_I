import axios from 'axios';
import { isEmpty as _isEmpty } from 'lodash';

import { store } from './../../index';
import actionType from './actionType';
import { dispatchLoadingShow, dispatchHideIsLoading, showNotification } from './../../service/common/action';
import BottomNotificationVariants from './../../constants/bottomNotification/BottomNotificationVarientEnum';
import { Idetect_api_url } from './../../constants/apiUrl';

import { OrgUnitList } from '../../model/admin/orgUnitList';

import { AdminDAO } from './../../model/dao/AdminDAO';
import { RiskLevel } from '../../model/admin/riskLevel';
import { Country } from '../../model/admin/country';
import { func } from 'prop-types';


export const getAllAdminUserList = (userId: string , sort?: { sortBy: string, sortOrder: string }, filter?: { filterType: string, filterCritUser: any}) => {
  dispatchLoadingShow();
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.getAllAdminUserList(userId, sort, filter);

  response.then(function (result: { status: string, message: string, users: any[] }) {
    dispatchHideIsLoading();
    store.dispatch(allAdminUserListSuccess(result));
  })
};

export const getAllAdminGroupList = (userId: string, filter?: { filterType: string, group: any}) => {
  dispatchLoadingShow();
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.getAllAdminGroupList(userId, filter);

  response.then(function (result: { status: string, message: string, groupList: any[] }) {
    dispatchHideIsLoading();
    store.dispatch(allAdminGroupListSuccess(result));
  })
};

export const getAllAdminRoleList = (userId: string, filter?: { filterType: string, role: any}) => {
  dispatchLoadingShow();
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.getAllAdminRoleList(userId, filter);

  response.then(function (result: { status: string, message: string, rolesList: any[] }) {
    dispatchHideIsLoading();
    store.dispatch(allAdminRoleListSuccess(result));
  })
};

export const getAllAdminRisksList = (userId: string) => {
  dispatchLoadingShow();
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.getAllAdminRisksList(userId);

  response.then(function (result: { status: string, message: string, allRiskList: any[] }) {
    dispatchHideIsLoading();
    store.dispatch(allAdminRisksListSuccess(result));
  })
};

export const riskMergeRequest = (userId: string, id: string, name: string, riskLevel: RiskLevel) => {
  dispatchLoadingShow();
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.riskMergeRequest(userId, id, name, riskLevel);

  response.then(function (result: { status: string, message: string, mergeRisk: boolean }) {
    dispatchHideIsLoading();
    store.dispatch(riskMergeRequestSuccess(result));
  })
};

export const getAllAdminOrgUnitList = () => {
  dispatchLoadingShow();
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.getAllAdminOrgUnitList();

  response.then(function (result: { status: string, message: string, OrgUnitList: OrgUnitList }) {
    dispatchHideIsLoading();
    store.dispatch(allAdminOrgUnitListSuccess(result));
  })
};

export const getAllAdminLogicalViews = (id: string | number, userId: string) => {
  dispatchLoadingShow();
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.getAllAdminLogicalViews(id, userId);

  response.then(function (result: { status: string, message: string, logicalViewsList: any[]; }) {
    dispatchHideIsLoading();
    store.dispatch(adminLogicalViewsSuccess(result));
  })
};

export const getAllAdminSchedulerList = (user) => {
  dispatchLoadingShow();
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.getAllAdminSchedulerList(user);

  response.then(function (result: { status: string, message: string, scheduledJobList: any[]; }) {
    dispatchHideIsLoading();
    store.dispatch(allAdminSchedulerListSuccess(result));
  })
};
export const getAdminLogsByCatagory = (category: string, currentPage: number = 0, sortField: string= "Id", sortMethod: string ="desc") => {
  dispatchLoadingShow();
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.getAdminLogsByCatagory(category, currentPage, sortField, sortMethod);

  response.then(function(result: { status: string, message: string, auditLogs: any[]; }){
    dispatchHideIsLoading();
    store.dispatch(adminLogsCatagorySuccess(result.auditLogs))
  })
}
export const getAdminCategoryHistory = (id, userId, userName, value) => {
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.getAdminCategoryHistory(id, userId, userName, value);

  response.then(function(result) {
    store.dispatch({
      type: actionType.USER_UPDATE_HISTORY_SUCCESS,
      payload: result.auditLogList
    })
  })

}

export const getAdminRolesSecurity = (userId) => {
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.getAdminRolesSecurity(userId);

  response.then(function(result) {
    store.dispatch({
      type: actionType.USER_UPDATE_SECURITY_SUCCESS,
      payload: result.permissionData
    })
  })
}
export const getUserGroups = (id, userId, userName) =>{
let adminDAO:AdminDAO = new AdminDAO();
let response = adminDAO.getUserGroups(id, userId, userName);

response.then(function(result) {
  getAllAdminGroupList(userId); 
  store.dispatch({
    type: actionType.USER_UPDATE_HISTORY_SUCCESS,
   payload: result.auditLogList

  })
})
}

export const getLookupCountryData = () => {
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.getLookupCountryData();

  response.then(function(result: {status: string, message: string, getAllElementsOfLookup: [number, Array<Country>]}) {
    store.dispatch({
      type: actionType.LOOKUP_COUNTRY_DATA_SUCCESS,
      payload: result.getAllElementsOfLookup[1]
    })
  })

}
export const deleteReqForAdminUser = (id, userId, currentId, currentUserId) => {
  dispatchLoadingShow();
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.deleteReqForAdminUser(id, userId, currentId, currentUserId);

  response.then(function(result) {
    dispatchHideIsLoading();
    getAllAdminUserList(currentId);
    showNotification(result.status === 'Success'
      ? BottomNotificationVariants.PRIMARY
      : BottomNotificationVariants.ERROR, result.message);
  })
}

export const duplicateUserInformation = (currentUserName, id, userId, availableLists, availablePerms, orgUnitId, userDTO) => {
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.duplicateUserInformation(currentUserName, id, userId, availableLists, availablePerms, orgUnitId, userDTO);

  response.then(function(result: { status: string, message: string, mergeUser: number }) {
    getAllAdminUserList(userId);
    showNotification(result.status === 'Success'
      ? BottomNotificationVariants.PRIMARY
      : BottomNotificationVariants.ERROR, result.message);
  })
}
export const updateUserInformation = (currentUserName, id, userId, availableLists, availablePerms, orgUnitId, userDTO) => {
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.updateUserInformation(currentUserName, id, userId, availableLists, availablePerms, orgUnitId, userDTO);

  response.then(function(result: { status: string, message: string, mergeUser: number }) {
    getAllAdminUserList(userId);
    showNotification(result.status === 'Success'
      ? BottomNotificationVariants.PRIMARY
      : BottomNotificationVariants.ERROR, result.message);
  })
}
export const updateRolesInformation = (currentUserName, id, userId, availableLists, availablePerms, orgUnitId, userDTO) => {
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.updateRolesInformation(currentUserName, id, userId, availableLists, availablePerms, orgUnitId, userDTO);

  response.then(function(result) { 
    if(result.status === "Success")
    {
      getAllAdminRoleList(userId);
    }
    else
    {
      console.log("Roles not updated");
    }
  })

}

export const deleteRolesInformation = (currentUserName, id, userId, availableLists, availablePerms, orgUnitId, userDTO) => {
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.deleteRolesInformation(currentUserName, id, userId, availableLists, availablePerms, orgUnitId, userDTO);

  response.then(function(result) { 
    getAllAdminRoleList(userId);
  })
}

export const updateGroupsInformation = (users,groups) => {
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.updateGroupsInformation(users,groups);

  response.then(function(result) { 
    getUserGroups(users.id,users.userId,users.userName);
  })

}

export const updateScheduleInformation = (users,groups) => {
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.updateScheduleInformation(users,groups);

  response.then(function(result){
    getAllAdminSchedulerList(users);
  })

}


export const addGroupsInformation = (users,groups) => {
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.addGroupsInformation(users,groups);
  
  response.then(function(result) { 
    getUserGroups(users.id,users.userId,users.userName);
  })

}

export const addAdminOrgUnit = ( orgUnit: any, currentUser: any ) => {
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.addAdminOrgUnit(orgUnit, currentUser);
  
  response.then(function(result: { status: string, message: string}) {
    showNotification(result.status === 'Success'
      ? BottomNotificationVariants.PRIMARY
      : BottomNotificationVariants.ERROR, result.message);
    getAllAdminOrgUnitList();
    if(result.status !== 'Success')
    {
      console.log("org unit is not updated");
    } 
  })
}

export const saveAdminOrgUnit = ( orgUnit: any, currentUser: any ) => {
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.saveAdminOrgUnit(orgUnit, currentUser);
  
  response.then(function(result: { status: string, message: string}) {
    showNotification(result.status === 'Success'
      ? BottomNotificationVariants.PRIMARY
      : BottomNotificationVariants.ERROR, result.message);
    getAllAdminOrgUnitList();
    if (result.status !== 'Success')
    {
      console.log("org unit is not saved");
    } 
  })
}

export const deleteAdminOrgUnit = ( orgUnit: any, currentUser: any ) => {
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.deleteAdminOrgUnit(orgUnit, currentUser);
  
  response.then(function(result: { status: string, message: string, isDelete: boolean}) {
    
    getAllAdminOrgUnitList();
    if (result.status === 'Success')
    {
      showNotification(result.isDelete
        ? BottomNotificationVariants.PRIMARY
        : BottomNotificationVariants.ERROR, result.message);
    } else {
      console.log("error");
    } 
  })
}
export const getAdminOrgUnitHistory = (user: any, entityID: any) => {
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.getAdminOrgUnitHistory(user, entityID);
  
  response.then(function(result: { status: string, message: string, auditLogList: any[] }) {
    if (result.status === 'Success') {
      store.dispatch({
        type: actionType.USER_UPDATE_HISTORY_SUCCESS,
        payload: result.auditLogList
      })
    } else {
      console.log('orgList history error')
    }
  })
}

export const addRolesInformation = (users,groups) => {
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.addRolesInformation(users,groups);
  
  response.then(function(result) { 
    getAllAdminRoleList(users.userId);
  })

}

export const deleteGroupsInformation = (users,groups,comment) => {
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.deleteGroupsInformation(users,groups,comment);

  response.then(function(result) { 
    getUserGroups(users.id,users.userId,users.userName);
  })

}

export const getAllAdminWorkflowList = (user) => {
  dispatchLoadingShow();
  let adminDAO: AdminDAO = new AdminDAO();
  let response = adminDAO.getAllAdminWorkflowList(user);

  response.then(function (result: { status: string, message: string, allWorkFlowList: any[]; }) {
    dispatchHideIsLoading();
    store.dispatch(allAdminWorkflowListSuccess(result));
  })
};

export const addUserToModify = (id) => {
  store.dispatch({
    type: actionType.ADD_USER_TO_MODIFY,
    payload: id
  })
}

export const editScheduleToModify =(id)=>{
  store.dispatch({
    type: actionType.EDIT_SCHEDULE_TO_MODIFY,
    payload: id
  })
}

export const addGroupToModify = (id) => {
  store.dispatch({
    type: actionType.ADD_GROUP_TO_MODIFY,
    payload: id
  })
}

export const addGroupdelete =(id) =>{
  store.dispatch({
    type: actionType.DELETE_GROUP_TO_MODIFY,
    payload: id
  })
}

export const adminLogsCatagorySuccess = (data) => {
  return {
    type: actionType.ADMIN_LOG_CATAGORY_SUCCESS,
    payload: data
  }
}
export const allAdminUserListSuccess = (data) => {
  return {
    type: actionType.ALL_ADMIN_DATALIST_SUCCESS,
    payload: _isEmpty(data.users[1]) ? [] : data.users[1]
  }
}

export const allAdminGroupListSuccess = (data) => {
  return {
    type: actionType.ALL_ADMIN_DATALIST_SUCCESS,
    payload: _isEmpty(data.groupList[1]) ? [] : data.groupList[1]
  }
}

export const allAdminRoleListSuccess = (data) => {
  return {
    type: actionType.ALL_ADMIN_DATALIST_SUCCESS,
    payload: _isEmpty(data.rolesList[1]) ? [] : data.rolesList[1]
  }
}

export const allAdminRisksListSuccess = (data) => {
  return {
    type: actionType.ALL_ADMIN_RISKLIST_SUCCESS,
    payload: _isEmpty(data.allRiskList[1]) ? [] : data.allRiskList[1]
  }
}

export const riskMergeRequestSuccess = (data) => {
  return {
    type: actionType.ADMIN_RISK_MERGE_REQUEST_SUCCESS,
    payload: data
  }
}

export const allAdminOrgUnitListSuccess = (data) => {
  return {
    type: actionType.ALL_ADMIN_ORGUNIT_LIST_SUCCESS,
    payload: data.orgUnitList
  }
}

export const adminLogicalViewsSuccess = (data) => {
  return {
    type: actionType.ALL_ADMIN_DATALIST_SUCCESS,
    payload: data.logicalViewsList[1]
  }
}

export const allAdminSchedulerListSuccess = (data) => {
  return {
    type: actionType.ALL_ADMIN_DATALIST_SUCCESS,
    payload: data.scheduledJobList[1]
  }
}

export const allAdminWorkflowListSuccess = (data) => {
  return {
    type: actionType.ALL_ADMIN_DATALIST_SUCCESS,
    payload: data.allWorkFlowList[1]
  }
}

