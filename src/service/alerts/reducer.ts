import actionType from './actionType';
import { AlertManagementResponseDTO } from './../../model/dto/AlertManagementResponseDTO';
import { WorkflowStatus } from './../../model/workflow/WorkflowStatus';
import { ResultList } from './../../model/alert/resultList';
import { ResultListCase } from './../../model/alert/resultListcase';
import { RootObject } from './../../model/alert/rootObj';
import { RelatedData } from './../../model/alert/relatedData';


export type State = {
  workFlowStatusList: AlertManagementResponseDTO["workFlowStatusList"],

  maxRecords: number,
  pageReturned: number,
  paginatedList: ResultList[] | ResultListCase[],
  allAlertList: ResultList[] | ResultListCase[],
  allSbAlertRecentStatus: RootObject[],
  allSbAlertCaseStatus: RootObject[],
  entityCommentForEntityWithHistory: any,
  allRightPaneRelatedData: RelatedData[],
  allRightPaneHistoryData: any,
  topBarTitleSelectedSb: string,
  alertIdSelectedSb: number
};

const initialState: State = {
  workFlowStatusList: [new WorkflowStatus()],

  maxRecords: 0,
  pageReturned: 0,
  paginatedList: [],
  allAlertList: [],
  allSbAlertRecentStatus: [],
  allSbAlertCaseStatus: [],
  entityCommentForEntityWithHistory: [],
  allRightPaneRelatedData: [],
  allRightPaneHistoryData: {},
  topBarTitleSelectedSb: 'My Alerts',
  alertIdSelectedSb: 1
}

interface actionTypeInterface {
  type: actionType,
  payload: any
}


export function alertsReducer(state: State = initialState, action: actionTypeInterface) {
  switch (action.type) {
    case actionType.GET_ALERT_INIT_WORKFLOW_STATUS:
      return {
        ...state,
        workFlowStatusList: action.payload,
      }

      case actionType.ALL_ALERT_LIST_SUCCESS:
      return {
        ...state,
        maxRecords: action.payload.list,
        allAlertList: action.payload.allAlertList,
        pageReturned: action.payload.pageReturned
      }
    case actionType.ALL_ALERT_FILTER_LIST_SUCCESS:
      return {
        ...state,
        maxRecords: action.payload.list,
        allAlertList: action.payload.allAlertList
      }
    case actionType.ALL_ALERT_PAGINATION_SUCCESS:
      return {
        ...state,
        paginatedList: action.payload
      }
    case actionType.ALL_SB_ALERT_RECENT_STATUS_SUCCESS:
      return {
        ...state,
        allSbAlertRecentStatus: action.payload
      }
    case actionType.ALL_SB_ALERT_CASE_STATUS_SUCCESS:
      return {
        ...state,
        allSbAlertCaseStatus: action.payload
      }
    case actionType.ALL_RIGHT_PANE_RELATED_DATA_SUCCESS:
      return {
        ...state,
        allRightPaneRelatedData: action.payload
      }
    case actionType.ALL_RIGHT_PANE_HISTORY_DATA_SUCCESS:
      return {
        ...state,
        allRightPaneHistoryData: action.payload
      }
    case actionType.TOP_BAR_TITLE_SELECTED_SB:
      return {
        ...state,
        topBarTitleSelectedSb: action.payload
      }
    case actionType.COMMENT_HISTORY_SUCCESS:
      return {
        ...state,
        entityCommentForEntityWithHistory: action.payload
      }
    case actionType.ALERT_ID_SELECTED_SB:
      return {
        ...state,
        alertIdSelectedSb: action.payload
      }
    default:
      return state;
  }
}

export default alertsReducer;
