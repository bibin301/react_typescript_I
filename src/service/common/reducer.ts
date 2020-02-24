import actionType from './actionType';
import sidebarEnum from './../../constants/SidebarEnum';
import { CommonResponseDTO } from './../../model/dto/CommonResponseDTO';
import { IntBottomNotificationProps } from './../../components/bottomNotification/BottomNotification';

interface actionInterface {
  type: actionType,
  payload: any
}

export interface State {
  childPopover: boolean,
  isLoading: boolean,
  listView: boolean,
  tableView: boolean,
  sidebar: boolean,
  tabSelected: sidebarEnum,
  userMenuOpen: boolean,
  newNotification: boolean,
  bottomNotification: IntBottomNotificationProps,
  newMessage: boolean,
  auditActionResponseList: CommonResponseDTO["auditActionResponseList"],
  allJobsList: CommonResponseDTO["allJobsList"],
  permissions: CommonResponseDTO["permissions"],
  listDetails: CommonResponseDTO["listDetails"],
  batchTemplates: CommonResponseDTO["batchTemplates"],
  scenarioJobList: CommonResponseDTO["scenarioJobList"],
  pathJobList: CommonResponseDTO["pathJobList"],
  fileJobList: CommonResponseDTO["fileJobList"],
}

const initialState: State = {
  childPopover: false,
  isLoading: false,
  listView: true,
  tableView: false,
  sidebar: false,
  tabSelected: sidebarEnum.RELATED,
  userMenuOpen: false,
  newNotification: false,
  bottomNotification: { } as IntBottomNotificationProps,
  newMessage: false,
  auditActionResponseList: [],
  allJobsList: [],
  permissions: [],
  listDetails: [],
  batchTemplates: [],
  scenarioJobList: [],
  pathJobList: [],
  fileJobList: []
}


export const commonReducer = (state: State = initialState, action: actionInterface) => {
  switch (action.type) {
    case actionType.SHOW_BOTTOM_NOTIFICATION:
      return {
        ...state,
        bottomNotification: action.payload
      }
    case actionType.SHOW_IS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case actionType.HIDE_IS_LOADING:
      return {
        ...state,
        isLoading: false
      }
    case actionType.POPOVER_CHILD_IS_AVAILABLE:
     return {
       ...state,
       childPopover: true
     }
    case actionType.POPOVER_CHILD_NOT_AVAILABLE:
     return {
       ...state,
       childPopover: false
     }
    case actionType.SWITCHVIEW:
      return {
        ...state,
        listView: !state.listView,
        tableView: !state.tableView
      }
    case actionType.SIDEBAR:
      return {
        ...state,
        sidebar: !state.sidebar
      }
    case actionType.CHANGETAB:
      return {
        ...state,
        tabSelected: action.payload,
      }
    case actionType.RESETTAB:
      return {
        ...state,
        tabSelected: sidebarEnum.RELATED
      }
    case actionType.USERMENU:
      return {
        ...state,
        userMenuOpen: !state.userMenuOpen
      }
    case actionType.AUDITACTION:
      return {
        ...state,
        auditActionResponseList: action.payload
      }
    case actionType.GETPERMISSION:
      return {
        ...state,
        permissions: action.payload
      }
    case actionType.ALLFILESJOB:
      return {
        ...state,
        allJobsList: action.payload
      }
    case actionType.GETPROFILENAMELIST:
      return {
        ...state,
        listDetails: action.payload
      }
    case actionType.GETALLAVAILABLEJOBS:
      return {
        ...state,
        fileJobList: action.payload
      }
    case actionType.GETALLTEMPLATES:
      return {
        ...state,
        batchTemplates: action.payload
      }
    case actionType.ALLPATHJOB:
      return {
        ...state,
        pathJobList: action.payload
      }
    case actionType.ALLSCENARIOJOB:
      return {
        ...state,
        scenarioJobList: action.payload
      }
    default:
      return state
  }
}
