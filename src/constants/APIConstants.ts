'use strict';

import { Idetect_api_url, Idetect_servlet_url } from './apiUrl';

export class APIConstants {

  //User mgmt
  public static getActiveUsers: string = Idetect_api_url.url + '/user/active/users';
  public static getAddRight: string = Idetect_api_url.url + '/user/add/rights';
  public static getUserPermission: string = Idetect_api_url.url + '/user/all/permission';
  public static postUserAll: string = Idetect_api_url.url + '/user/all';
  public static postUserSession: string = Idetect_api_url.url + '/user/all/session';
  public static postUserDelete: string = Idetect_api_url.url + '/user/delete';
  public static postUserMerge: string = Idetect_api_url.url + '/user/merge';
  public static getPermissionName: string = Idetect_api_url.url + '/user/permission/name/';
  public static postUserSavePassword: string = Idetect_api_url.url + '/user/save/password';

  //group mgmt
  public static getActiveGroup: string = Idetect_api_url.url + '/group/active/group';
  public static getGroupActiveRole: string = Idetect_api_url.url + '/group/active/role';
  public static postGroupAll: string = Idetect_api_url.url + '/group/all';
  public static postGroupAllRole: string = Idetect_api_url.url + '/group/all/role';
  public static postGroupDelete: string = Idetect_api_url.url + '/group/delete';
  public static postGroupMerge: string = Idetect_api_url.url + '/group/merge';

  //role mgmt
  public static getRolePermission: string = Idetect_api_url.url + '/role/check/permission/';
  public static postRoleDelete: string = Idetect_api_url.url + '/role/delete';
  public static postRoleMerge: string = Idetect_api_url.url + 'role/merge';

  //orgUnit
  public static getOrgUnitAll: string = Idetect_api_url.url + '/orgunit/all';
  public static getOrgUnitAllActive: string = Idetect_api_url.url + '/orgunit/all/active';
  public static getOrgUnitCheckByName: string = Idetect_api_url.url + '/orgunit/check/byname/';
  public static getOrgUnitCheckCode: string = Idetect_api_url.url + '/orgunit/check/code/';
  public static postOrgUnitActiveFilter: string = Idetect_api_url.url + '/orgunit/active/filter';
  public static postOrgUnitAllChild: string = Idetect_api_url.url + '/orgunit/all/child';
  public static postOrgUnitAllParent: string = Idetect_api_url.url + '/orgunit/all/parent';
  public static postOrgUnitCreate: string = Idetect_api_url.url + '/orgunit/create';
  public static postOrgUnitDelete: string = Idetect_api_url.url + '/orgunit/delete';
  public static postOrgUnitMerge: string = Idetect_api_url.url + '/orgunit/merge';
  public static postOrgUnitUpdateLink: string = Idetect_api_url.url + '/orgunit/update/link';

  //risk
  public static postRiskAll: string = Idetect_api_url.url + '/risk/all';
  public static postRiskMerge: string = Idetect_api_url.url + '/risk/merge';

  //login
  public static getLoginInitLogin: string = Idetect_api_url.url + '/logincontroller/initLogin';
  public static postLogin: string = Idetect_api_url.url + '/logincontroller/login';
  public static getAlertUserPreference: string = Idetect_api_url.url + '/alert/get/user/dashboard/preferences';
  public static saveAlertUserPreference: string = Idetect_api_url.url + '/alert/save/user/dashboard/preferences';
  public static saveUserPreferenceParameters: string = Idetect_api_url.url + '/alert/save/user/dashboard/preferences';

  //Alert
  public static getAlertEntityCommentWithHistory: string = Idetect_api_url.url + '/alert/get/entitycomment/withhistory/';
  public static getAlertKPIList: string = Idetect_api_url.url + '/alert/get/kpi/list/';
  public static getAlertInitWorkflowStatus: string = Idetect_api_url.url + '/alert/init/workflow/status';
  public static postAlertChangeStatus: string = Idetect_api_url.url + '/alert/change/alert/status';
  public static postAlertChangeCaseStatus: string = Idetect_api_url.url + '/alert/change/case/status';
  public static postAlertDownloadDocument: string = Idetect_api_url.url + '/alert/download/document';
  public static postAlertGetUserDashboardPreferences: string = Idetect_api_url.url + '/alert/get/user/dashboard/preferences';
  public static postAlertInitCaseStatus: string = Idetect_api_url.url + '/alert/init/case/status';
  public static postAlertInitLinkchartStatus: string = Idetect_api_url.url + '/alert/init/linkchart/status';
  public static postAlertInitStatus: string = Idetect_api_url.url + '/alert/init/status';
  public static postAlertMainAlertFilter: string = Idetect_api_url.url + '/alert/main/alert/filter';
  public static postAlertMainAll: string = Idetect_api_url.url + '/alert/main/all';
  public static postAlertMainAuditLog: string = Idetect_api_url.url + '/alert/main/audit/log';
  public static postAlertMainByUser: string = Idetect_api_url.url + '/alert/main/byuser';
  public static postAlertMainCasesFilter: string = Idetect_api_url.url + '/alert/main/cases/filter';
  public static postAlertLinkchartFilter: string = Idetect_api_url.url + '/alert/main/linkchart/filter';
  public static postAlertMainRelationShipTypeEntity: string = Idetect_api_url.url + '/alert/main/relationshiptype/entity';
  public static postAlertSaveUserDashboardPreferences: string = Idetect_api_url.url + '/alert/save/dashboard/preferences';
  public static postAlertUpdateEntitiesDate: string = Idetect_api_url.url + '/alert/update/entities/data';
  public static postAlertUpdateEntitiesDataWithKPI: string = Idetect_api_url.url + '/alert/update/entities/with/kpi';
  public static postAlertUpdateEntityCommentForEntity: string = Idetect_api_url.url + '/alert/update/entity/comment/forentity';
  public static postAlertUploadDocument: string = Idetect_api_url.url + '/alert/upload/document';
  public static getCommentHistory: string = Idetect_api_url.url + '/comment/get/commenthistory/byuid';
  public static saveComment: string = Idetect_api_url.url + '/comment/save/comment';
  public static downloadDocument: string = Idetect_api_url.url + '/AttachDocServlet?filename=';
  public static uploadDocument: string = Idetect_servlet_url.url + '/AttachDocServlet';


  //Detection
  public static getRuleStatus: string = Idetect_api_url.url + '/detection/rule/status';
  public static getScenarioStatus: string = Idetect_api_url.url + '/detection/scenario/status';
  public static getAllSbDetectionRulesStatus: string = Idetect_api_url.url + '/detection/rule/stats/detection';
  public static getAllSbDetectionScenariosStatus: string = Idetect_api_url.url + '/detection/scenario/stats/detection';
  public static getAllSbDetectionProfilesStatus: string = Idetect_api_url.url + '/detection/profile/stats/detection';
  public static getAllDetectionRulesList: string = Idetect_api_url.url + '/detection/rules/from';
  public static getAllDetectionScenariosList: string = Idetect_api_url.url + '/detection/scenario/from';
  public static getAllDetectionProfilesList: string = Idetect_api_url.url + '/detection/profile/from';


  // Data 
  public static getChildrenListByParentID: string = Idetect_api_url.url + '/list/children/list/by/parentId';

  
  //List mgmt
  public static getLookupFieldsData: string = Idetect_api_url.url + '/list/lookup/all/fieldsdata';
  public static getAllActiveList: string = Idetect_api_url.url + '/list/all/active';
  public static getAllFieldType: string = Idetect_api_url.url + '/list/all/fieldtype';
  public static getUserDataPreferenceList: string = Idetect_api_url.url + '/list/user/preference';
  public static getLanguageDataSource: string = Idetect_api_url.url + '/list/all/language';
  public static getTree: string = Idetect_api_url.url + '/list/all/tree/folder';


  //Common
  public static getAllAvailableJob: string = Idetect_api_url.url + '/common/all/availablejob';
  public static getInternalListsByOrgUnitForJobs: string = Idetect_api_url.url + '/common/all/internallist/';
  public static getPermission: string = Idetect_api_url.url + '/common/all/permission';
  public static getProfileNameList: string = Idetect_api_url.url + '/common/all/profilename';
  public static getScenariosForJob: string = Idetect_api_url.url + '/common/all/scenario';
  public static getAllTemplates: string = Idetect_api_url.url + '/common/all/template';
  public static getAuditAction: string = Idetect_api_url.url + '/common/audit/action';
  public static getFilesForJobs: string = Idetect_api_url.url + '/common/all/files';
  public static getPathsForJobs: string = Idetect_api_url.url + '/common/all/paths';

  //Admin
  public static getAllAdminUserList: string = Idetect_api_url.url + '/user/all';
  public static getAllAdminGroupList: string = Idetect_api_url.url + '/group/all';
  public static getAllAdminRoleList: string = Idetect_api_url.url + '/group/all/role';
  public static getAllAdminRisksList: string = Idetect_api_url.url + '/risk/all';
  public static riskMergeRequest: string = Idetect_api_url.url + '/risk/merge';
  public static getAllAdminOrgUnitList: string = Idetect_api_url.url + '/orgunit/all/active';
  public static getAllAdminLogicalViews: string = Idetect_api_url.url + '/logicalviews/getalllogicalviewslist';
  public static getAllAdminSchedulerList: string = Idetect_api_url.url + '/scheduler/all/job';
  public static getAdminLogsByCatagory: string = Idetect_api_url.url + '/log/audit/log/by/category';
  public static getAllAdminWorkflowList: string = Idetect_api_url.url + '/workflow/all';
  public static getAdminCategoryHistory: string = Idetect_api_url.url + '/alert/main/audit/log';
  public static getLookupCountryData: string = Idetect_api_url.url + '/list/lookup/all/elements/org.namematching.model.lu.LUCountryData.';
  public static updateUserInformation: string = Idetect_api_url.url + '/user/merge';
  public static deleteReqForAdminUser: string = Idetect_api_url.url + '/user/delete';
  public static getAdminRolesSecurity: string = Idetect_api_url.url + '/role/check/permission/';
  public static deleteRolesInformation: string = Idetect_api_url.url + '/role/delete';
  public static updateRolesInformation: string = Idetect_api_url.url + '/role/merge';
  public static updateAdminGroupsInformation: string = Idetect_api_url.url + '/group/merge';
  public static deleteAdminGroupsInformation: string = Idetect_api_url.url + '/group/delete';
  public static addAdminOrgUnit: string = Idetect_api_url.url + '/orgunit/merge';
  public static saveAdminOrgUnit: string = Idetect_api_url.url + '/orgunit/merge';
  public static deleteAdminOrgUnit: string = Idetect_api_url.url + '/orgunit/delete';
  public static updateAdminScheduleInformation : string = Idetect_api_url.url + '/scheduler/merge/job';
 
}
