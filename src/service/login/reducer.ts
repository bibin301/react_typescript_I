import { LoginInfoDTO } from './../../model/dto/LoginInfoDTO';
import { LoginDTO } from './../../model/dto/LoginDTO';
import { ListDetails } from './../../model/list/ListDetails';
import { UserDashBoardPreferences } from './../../model/user/UserDashBoardPreferences';
import actionType from './actionType';


export type State = {
  loginSuccess: boolean,
  isAuth: boolean,
  userDetails?: LoginInfoDTO,
  loginErrMsg?: string,
  initCacheLoaded?: boolean,
  loginDTO?: LoginDTO,
  
  availableLists: string[],
  availableOrgUnits: string[],
  availablePerms: string[],
  orgUnits: LoginInfoDTO['user']['orgUnits'],
  orgUnitId: number,
  alertUserPreferenceList: UserDashBoardPreferences[],
  AlertsListFields: ListDetails['listOfFields'],
  alertListDetails: ListDetails,
  caseListDetails: ListDetails,
  caseListFields: ListDetails['listOfFields'],
  defaultAlertDisplay: Array<number>,
  defaultCaseDisplay: Array<number>,
  alertCaseAvailableFields: LoginInfoDTO['multiSelectPreferences']['availableFields'],
  maxRecordPerAlertPage: number,
  maxRecordPerCasePage: number,
  //the rest from git are just properties for userDetails in fact so no need to have them somewhere else we can just set them on useDetails
};

export let initialState: State = {
  loginSuccess: false,
  isAuth: false,
  userDetails: new LoginInfoDTO(),
  initCacheLoaded: false,
  loginDTO: new LoginDTO(),

  loginErrMsg: '',
  availableLists: [],
  availableOrgUnits: [],
  availablePerms: [],
  orgUnits: [],
  orgUnitId: null,
  alertUserPreferenceList: [] as UserDashBoardPreferences[],
  AlertsListFields: [],
  alertListDetails: {} as ListDetails,
  caseListDetails: {} as ListDetails,
  caseListFields: [],
  defaultAlertDisplay: [],
  defaultCaseDisplay: [],
  alertCaseAvailableFields: [],
  maxRecordPerAlertPage: 10,
  maxRecordPerCasePage: 10
}

interface actionTypeInterface {
  type: actionType,
  payload: any
}


export function loginReducer(state: State = initialState, action: actionTypeInterface) {
  switch (action.type) {
    case actionType.GET_LOGIN_INIT_CACHE:
      return {
        ...state,
        initCacheLoaded: true,
        loginDTO: action.payload
      }

    case actionType.AUTHENTICATE_USER:
      return {
        ...state,
        loginSuccess: true,
        isAuth: true,
        // userDetails: action.payload
        userDetails: action.payload,
        availableLists: action.payload.user.availableLists,
        orgUnitId: action.payload.user.orgUnitId,
        alertUserPreferenceList: action.payload.userDashBoardPreferences,
        AlertsListFields: action.payload.alertListDetails.listOfFields,
        alertListDetails: action.payload.alertListDetails,
        caseListDetails: action.payload.caseListDetails,
        caseListFields: action.payload.caseListDetails.listOfFields,
        availableOrgUnits: action.payload.user.availableOrgUnits,
        availablePerms: action.payload.user.availablePerms,
        orgUnits: action.payload.user.orgUnits,
        workflowStatusAlertClosed: action.payload.workflowStatusAlertClosed,
        workflowStatusAlertOpen: action.payload.workflowStatusAlertOpen,
        workflowStatusCaseClosed: action.payload.workflowStatusCaseClosed,
        workflowStatusCaseOpen: action.payload.workflowStatusCaseOpen,
        alertCaseAvailableFields: action.payload.multiSelectPreferences.availableFields,
        loginErrMsg: ''
      }

    case actionType.SHOW_LOGIN_ERR_MSG:
      return {
        ...state,
        loginErrMsg: action.payload,
        loginSuccess: false,
        isAuth: false,
      }

    case actionType.LOGOUT_USER:
      return {
        ...state,
        loginSuccess: false,
        isAuth: false,
        userDetails: new LoginInfoDTO(),
        loginErrMsg: '',
        availableLists: [],
        alertUserPreferenceList: [],
        AlertsListFields: [],
        caseListDetails: [],
        caseListFields: []
      }
      case actionType.ALL_ALERT_USER_PREFERENCE:
      return {
        ...state,
        alertUserPreferenceList: action.payload
      }
    case actionType.MANAGE_DEFAULT_DISPLAY:
      return {
        ...state,
        defaultAlertDisplay: action.payload.defaultAlertDisplay,
        defaultCaseDisplay: action.payload.defaultCaseDisplay,
        maxRecordPerAlertPage: action.payload.defaultMaxRecordPerPageAlert,
        maxRecordPerCasePage: action.payload.defaultMaxRecordPerPageCase
      }
    default:
      return state;
  }
}

export default loginReducer;
