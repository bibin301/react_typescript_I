import axios from 'axios';

import { store } from './../../index';
import { DashBoardDAO } from './../../model/dao/DashBoardDAO';
import { dispatchLoadingShow, dispatchHideIsLoading } from './../../service/common/action';

import { alertUserPreferenceSuccess } from './../../service/login/action';
import actionType from './actionType';

export const getAlertInitWorkflowStatus = () => {
  let dashBoardDAO = new DashBoardDAO();
  let response = dashBoardDAO.getAlertInitWorkflowStatus();

  response.then(function (results) {
    store.dispatch({
      type: actionType.GET_ALERT_INIT_WORKFLOW_STATUS,
      payload: results.workFlowStatusList
    })
  })
}

export const getAllAlertList = (alertIdSelectedSb: number, id: number, userId: string, availableLists: any, orderField: string, orderDirection: string, defaultAlertDisplay: any, maxRecordPerAlertPage: number) => {
  dispatchLoadingShow();
  let dashBoardDAO = new DashBoardDAO();
  let response = dashBoardDAO.getAllAlertList(alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, defaultAlertDisplay, maxRecordPerAlertPage);

  response.then(function (results) {
    dispatchHideIsLoading();
    store.dispatch(allAlertListSuccess(results));
  });
}

export const getAllCaseList = (alertIdSelectedSb: number, id: number, userId: string, availableLists: any, orderField: string, orderDirection: string, defaultCaseDisplay: any, maxRecordPerCasePage: number) => {
  dispatchLoadingShow();
  let dashBoardDAO = new DashBoardDAO();
  let response = dashBoardDAO.getAllCaseList(alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, defaultCaseDisplay, maxRecordPerCasePage);

  response.then(function (results) {
    dispatchHideIsLoading();
    store.dispatch(allAlertCaseSuccess(results));
  });
}

export const getAllAlertFilterList = (alertId: number, id: number, userId: string, availableLists: any, name: string, filterArray: any, alertListDetails: any, defaultAlertDisplay: any) => {
  dispatchLoadingShow();
  let dashBoardDAO = new DashBoardDAO();
  let response = dashBoardDAO.getAllAlertFilterList(alertId, id, userId, availableLists, name, filterArray, alertListDetails, defaultAlertDisplay);

  response.then(function (results) {
    dispatchHideIsLoading();
    store.dispatch(allAlertFilterListSuccess(results));
  });
}

export const getAllCaseFilterList = (caseId: number, id: number, userId: string, availableLists: any, name: string, filterArray: any, caseListDetails: any, defaultCaseDisplay: any) => {
  dispatchLoadingShow();
  let dashBoardDAO = new DashBoardDAO();
  let response = dashBoardDAO.getAllCaseFilterList(caseId, id, userId, availableLists, name, filterArray, caseListDetails, defaultCaseDisplay);

  response.then(function (results) {
    dispatchHideIsLoading();
    store.dispatch(allCaseFilterSuccess(results));
  });
}

export const getAllSbAlertRecentStatus = (userId: string | number, availableLists: any, defaultAlertDisplay: any) => {
  dispatchLoadingShow();
  let dashBoardDAO = new DashBoardDAO();
  let response = dashBoardDAO.getAllSbAlertRecentStatus(userId, availableLists, defaultAlertDisplay);

  response.then(function (results) {
    dispatchHideIsLoading();
    store.dispatch(allSbAlertRecentStatusSuccess(results));
  });
}

export const getAllSbAlertCaseStatus = (userId: string | number, availableLists: any, defaultCaseDisplay: any) => {
  dispatchLoadingShow();
  let dashBoardDAO = new DashBoardDAO();
  let response = dashBoardDAO.getAllSbAlertCaseStatus(userId, availableLists, defaultCaseDisplay);

  response.then(function (results) {
    dispatchHideIsLoading();
    store.dispatch(allSbAlertCaseStatusSuccess(results));
  });
}

export const getAllAlertSortedList = (alertIdSelectedSb: number, id: number, userId: string, availableLists: any, orderField: string = null, orderDirection: string = null, pageNumber: number, maxRecordPerAlertPage: number, defaultAlertDisplay: any) => {
  dispatchLoadingShow();
  let dashBoardDAO = new DashBoardDAO();
  let response = dashBoardDAO.getAllAlertSortedList(alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, pageNumber, maxRecordPerAlertPage, defaultAlertDisplay);

  response.then(function (results) {
    dispatchHideIsLoading();
    store.dispatch(allAlertSortedListSuccess(results));
    store.dispatch(alertUserPreferenceSuccess(results.getUserDashBoardPreferences));
  });
}

export const getAllCasesSortedList = (alertIdSelectedSb: number, id: number, userId: string, availableLists: any, orderField: string = null, orderDirection: string = null, pageNumber: number, maxRecordPerCasePage: number, defaultCaseDisplay: any) => {
  dispatchLoadingShow();
  let dashBoardDAO = new DashBoardDAO();
  let response = dashBoardDAO.getAllCasesSortedList(alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, pageNumber, maxRecordPerCasePage, defaultCaseDisplay);

  response.then(function (results) {
    dispatchHideIsLoading();
      store.dispatch(allCaseSortedListSuccess(results));
      store.dispatch(alertUserPreferenceSuccess(results.getUserDashBoardPreferences))
  });
}

export const getRightPaneRelated = (id: number, userId: string, availableLists: any) => {
  dispatchLoadingShow();
  let dashBoardDAO = new DashBoardDAO();
  let response = dashBoardDAO.getRightPaneRelated(id, userId, availableLists);

  response.then(function (results) {
    dispatchHideIsLoading();
      store.dispatch(rightPaneRelatedSuccess(results));
  });
}

export const getRightPaneHistory = (selectedListId: string | number, userId: string | number) => {
  dispatchLoadingShow();
  let dashBoardDAO = new DashBoardDAO();
  let response = dashBoardDAO.getRightPaneHistory(selectedListId, userId);

  response.then(function (results) {
    dispatchHideIsLoading();
      store.dispatch(rightPaneHistorySuccess(results));
  });
}


export const downloadDocument = (filePath) => {
  let dashBoardDAO = new DashBoardDAO();
  let response = dashBoardDAO.downloadDocument(filePath);
}

export const uploadDocument = (uid: any, file: any, userId: string, availableLists: any) => {
  dispatchLoadingShow();
  let dashBoardDAO = new DashBoardDAO();
  let response = dashBoardDAO.uploadDocument(uid, file, userId, availableLists);

  response.then(function (results) {
    dispatchHideIsLoading();
    if (results.status === 'Success') {
      store.dispatch(uploadDocumentSuccess(results))
      getRightPaneRelated(uid, userId, availableLists);
    } else {
      /* eslint-disable */
      console.warn(results.message);
      /* eslint-enable */
    }
  });
}

export const getCommentHistory = (alertID:any) => {
  dispatchLoadingShow();
  let dashBoardDAO = new DashBoardDAO();
  let response = dashBoardDAO.getCommentHistory(alertID);

  response.then(function (results) {
    dispatchHideIsLoading();
    store.dispatch(commentHistorySuccess(results));
  });
}

export const saveComment = (uid:any, comment:string, alertUid:any, userId:any) => {
  dispatchLoadingShow();
  let dashBoardDAO = new DashBoardDAO();
  let response = dashBoardDAO.saveComment(uid, comment, alertUid, userId);

  response.then(function (results) {
    dispatchHideIsLoading();
    if (results.status === 'Success') {
      store.dispatch(saveCommentSuccess(results));
      getCommentHistory(alertUid);
    } else {
      /* eslint-disable */
      console.warn(results.message);
      /* eslint-enable */
    }
  });
}


export const setTopBarTitle = (title) => {
  store.dispatch(topBarTitleSelectedSb(title))
}

export const allAlertFilterListSuccess = (response) => {
  return {
    type: actionType.ALL_ALERT_FILTER_LIST_SUCCESS,
    payload: { allAlertList: response.alertFilterList.resultList }
  }
}
export const allCaseFilterSuccess = (response) => {
  return {
    type: actionType.ALL_ALERT_FILTER_LIST_SUCCESS,
    payload: { allAlertList: response.casesFilterList.resultList }
  }
}

export const allAlertListSuccess = (response) => {
  return {
    type: actionType.ALL_ALERT_FILTER_LIST_SUCCESS,
    payload: {
      allAlertList: response.alertFilterList.resultList,
      list: response.alertFilterList.maximumAmount,
    }
  }
}

export const allAlertCaseSuccess = (response) => {
  return {
    type: actionType.ALL_ALERT_FILTER_LIST_SUCCESS,
    payload: {
      allAlertList: response.casesFilterList.resultList,
      list: response.casesFilterList.maximumAmount,
    }
  }
}
export const allAlertSortedListSuccess = (response) => {
  return {
    type: actionType.ALL_ALERT_LIST_SUCCESS,
    payload: {
      allAlertList: response.alertFilterList.resultList,
      list: response.alertFilterList.maximumAmount,
      pageReturned: response.alertFilterList.pageNumber
    }
  }
}
export const allCaseSortedListSuccess = (response) => {
  return {
    type: actionType.ALL_ALERT_LIST_SUCCESS,
    payload: response.casesFilterList.resultList,
    list: response.casesFilterList.maximumAmount,
    pageReturned: response.casesFilterList.pageNumber
  }
}
export const allSbAlertRecentStatusSuccess = (response) => {
  return {
    type: actionType.ALL_SB_ALERT_RECENT_STATUS_SUCCESS,
    payload: response.alertManagementStats
  }
}

export const allSbAlertCaseStatusSuccess = (response) => {
  return {
    type: actionType.ALL_SB_ALERT_CASE_STATUS_SUCCESS,
    payload: response.alertManagementStats
  }
}

export const rightPaneRelatedSuccess = (response) => {
  return {
    type: actionType.ALL_RIGHT_PANE_RELATED_DATA_SUCCESS,
    payload: response
  }
}

export const rightPaneHistorySuccess = (response) => {
  return {
    type: actionType.ALL_RIGHT_PANE_HISTORY_DATA_SUCCESS,
    payload: response.auditLogList
  }
}

export const topBarTitleSelectedSb = (data) => {
  return {
    type: actionType.TOP_BAR_TITLE_SELECTED_SB,
    payload: data
  }
}
export const alertIdSelectedSb = (data) => {
  return {
    type: actionType.ALERT_ID_SELECTED_SB,
    payload: data
  }
}
export const commentHistorySuccess = (response) => {
  return {
    type: actionType.COMMENT_HISTORY_SUCCESS,
    payload: response.entityCommentForEntityWithHistory
  }
}
export const saveCommentSuccess = (response) => {
  return {
    type: actionType.SAVE_COMMENT_SUCCESS,
    payload: response.updateEntityCommentForEntity
  }
}
export const uploadDocumentSuccess = (response) => {
  return {
    type: actionType.FILE_UPLOAD_SUCCESS,
    payload: response
  }
}
