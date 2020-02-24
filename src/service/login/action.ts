import { map as _map } from 'lodash';

import { store } from './../../index';
import { DataConstant } from './../../constants/DataConstant';
import { actionType } from './actionType';
import { getRuleStatus, getScenarioStatus } from './../../service/detection/action';
import { getAlertInitWorkflowStatus } from './../../service/alerts/action';
import { getLookupFieldsData } from './../../list/management/service/action';
import { commonActions } from './../../service/common/action';

//import { RoleDAO } from './../../model/dao/RoleDAO';
import { LoginDAO } from './../../model/dao/LoginDAO';
import { LoginDTO } from './../../model/dto/LoginDTO';
import { LoginInfoDTO } from './../../model/dto/LoginInfoDTO';
import { UserDTO } from './../../model/dto/UserDTO';
import { UserDashBoardPreferences } from './../../model/user/UserDashBoardPreferences';

export const loginInitCache = () => {
  let loginDAO = new LoginDAO();
  let response = loginDAO.getInitLogin();
  
  response.then(function(result: { status: string, message: string, loginDTO: LoginDTO }) {
    store.dispatch(loginInitCacheSuccess(result.loginDTO));
  })
}

export const loginStartupCall = () => {
  getRuleStatus();
  getScenarioStatus();
  getAlertInitWorkflowStatus();
  getLookupFieldsData();
  //TODO add the other call needed available on the login sequence diagram
}


export const loginInitCacheSuccess = (response) => {
  return {
    type: actionType.GET_LOGIN_INIT_CACHE,
    payload: response
  };
}

export const authenticateUser = (credentials: { email: string, password: string }) => {
  let loginDAO: LoginDAO = new LoginDAO();
  let response = loginDAO.postLogIn(credentials.email, credentials.password);
  
  response.then(function(result: { status: string, message: string, loginInfoDTO: LoginInfoDTO, token: string }) {
    if (result.status === "Success") {
      store.dispatch(manageDefaultDisplay(result));
      store.dispatch(authenticateUserSuccess(result.loginInfoDTO));
      //sessionStorage.setItem('jwtToken', response.payload.data.token);
      //load permission
      //TODO get the others call from login sequence diagram to be able to get the commonsActions
      //getCommonAction();
      //TODO should also trigger a function that will fetch some data like the preferences
    } else {
      console.log(result);
      store.dispatch(authenticateUserFailure(result.message));
    }
  })

};

export const authenticateUserSuccess = (response) => {
  return {
    type: actionType.AUTHENTICATE_USER,
    payload: response
  };
}

export const authenticateUserFailure = (response) => {
  return {
    type: actionType.SHOW_LOGIN_ERR_MSG,
    payload: response
  };
}

export const logoutUser = () => {
  store.dispatch({ type: actionType.LOGOUT_USER });
}

const getCommonAction = (userDTO: UserDTO) => {
  commonActions(userDTO);
}

export const getAlertUserPreference = (userId: number) => {
  let loginDAO = new LoginDAO();
  let response = loginDAO.getAlertUserPreference(userId);
  
  response.then(function(result: { status: string, message: string, getUserDashBoardPreferences: Array<UserDashBoardPreferences> }) {
    if (result.status === "Success") {
      store.dispatch(alertUserPreferenceSuccess(result.getUserDashBoardPreferences))
    } else {
      console.log(result)
    }
  });
}

export const saveUpAlertDisplay = (id: number, userId: string, hiddenFields: Array<string>) => {
  let loginDAO = new LoginDAO();
  let response = loginDAO.saveUpAlertDisplay(id, userId, hiddenFields);
  
  response.then(function(result: { status: string, message: string, getUserDashBoardPreferences: Array<UserDashBoardPreferences> }) {
    if (result.status === "Success") {
      store.dispatch(alertUserPreferenceSuccess(result.getUserDashBoardPreferences))
    } else {
      console.log(result)
    }
  });
}

export const saveUpCaseDisplay = (id: number, userId: string, hiddenFields: Array<string>) => {
  let loginDAO = new LoginDAO();
  let response = loginDAO.saveUpCaseDisplay(id, userId, hiddenFields);
  
  response.then(function(result: { status: string, message: string, getUserDashBoardPreferences: Array<UserDashBoardPreferences> }) {
    if (result.status === "Success") {
      store.dispatch(alertUserPreferenceSuccess(result.getUserDashBoardPreferences))
    } else {
      console.log(result);
    }
  });
}

export const saveUserPreferenceParameters = (id: number, userId: string, upList: Array<UserDashBoardPreferences>) => {
  let loginDAO = new LoginDAO();
  let response = loginDAO.saveUserPreferenceParameters(id, userId, upList);
  
  response.then(function(result: { status: string, message: string, getUserDashBoardPreferences: Array<UserDashBoardPreferences> }) {
    if (result.status === "Success") {
      store.dispatch(alertUserPreferenceSuccess(result.getUserDashBoardPreferences));
       // note: added userpreference in a object so that you can pass anduse in manageDefaultDisplay
      const resObject = {
        loginInfoDTO: {
          userDashBoardPreferences: result.getUserDashBoardPreferences
        }
      }
      store.dispatch(manageDefaultDisplay(resObject));
    } else {
      console.log(result);
    }
  });
}

// note: since we are getting dashboard userpreference in login response itself we have this action here itself
export const alertUserPreferenceSuccess = (response: Array<UserDashBoardPreferences>) => {
  return {
    type: actionType.ALL_ALERT_USER_PREFERENCE,
    payload: response
  }
}

// note: this function maintains default alert and case display which is from userpreference.
export const manageDefaultDisplay = (response) => (dispatch, getState) => {
  let defaultAlertDisplay, defaultCaseDisplay, defaultMaxRecordPerPageAlert, defaultMaxRecordPerPageCase;
  
  _map(response.loginInfoDTO.userDashBoardPreferences, each => {
    // note: send both alert and case ids togather
    if (each.preferenceCode === 'displayTypeOfAlert') {
      switch (each.preferenceValue) {
        case '0':
          defaultAlertDisplay = response.loginInfoDTO.workflowStatusAlertOpen
            ? response.loginInfoDTO.workflowStatusAlertOpen.concat(response.loginInfoDTO.workflowStatusCaseOpen)
            : getState().loginReducer.workflowStatusAlertOpen.concat(getState().loginReducer.workflowStatusCaseOpen);
          break;
        case '1':
          defaultAlertDisplay = response.loginInfoDTO.workflowStatusAlertOpen
            ? response.loginInfoDTO.workflowStatusAlertOpen.concat(response.loginInfoDTO.workflowStatusAlertClosed, response.loginInfoDTO.workflowStatusCaseOpen, response.loginInfoDTO.workflowStatusCaseClosed)
            : getState().loginReducer.workflowStatusAlertOpen.concat(getState().loginReducer.workflowStatusAlertClosed, getState().loginReducer.workflowStatusCaseOpen, getState().loginReducer.workflowStatusCaseClosed);
          break;
        case '2':
          defaultAlertDisplay = response.loginInfoDTO.workflowStatusAlertClosed
            ? response.loginInfoDTO.workflowStatusAlertClosed.concat(response.loginInfoDTO.workflowStatusCaseClosed)
            : getState().loginReducer.workflowStatusAlertClosed.concat(getState().loginReducer.workflowStatusCaseClosed);
          break;
        default:
          defaultAlertDisplay = response.loginInfoDTO.workflowStatusAlertOpen
            ? response.loginInfoDTO.workflowStatusAlertOpen.concat(response.loginInfoDTO.workflowStatusAlertClosed, response.loginInfoDTO.workflowStatusCaseOpen, response.loginInfoDTO.workflowStatusCaseClosed)
            : getState().loginReducer.workflowStatusAlertOpen.concat(getState().loginReducer.workflowStatusAlertClosed, getState().loginReducer.workflowStatusCaseOpen, getState().loginReducer.workflowStatusCaseClosed);
          break;
      }
    } else if (each.preferenceCode === 'displayTypeOfCase') {
      // note: send both alert and case ids togather
      switch (each.preferenceValue) {
        case '0':
          defaultCaseDisplay = response.loginInfoDTO.workflowStatusAlertOpen
            ? response.loginInfoDTO.workflowStatusAlertOpen.concat(response.loginInfoDTO.workflowStatusCaseOpen)
            : getState().loginReducer.workflowStatusAlertOpen.concat(getState().loginReducer.workflowStatusCaseOpen);
          break;
        case '1':
          defaultCaseDisplay = response.loginInfoDTO.workflowStatusAlertOpen
            ? response.loginInfoDTO.workflowStatusAlertOpen.concat(response.loginInfoDTO.workflowStatusAlertClosed, response.loginInfoDTO.workflowStatusCaseOpen, response.loginInfoDTO.workflowStatusCaseClosed)
            : getState().loginReducer.workflowStatusAlertOpen.concat(getState().loginReducer.workflowStatusAlertClosed, getState().loginReducer.workflowStatusCaseOpen, getState().loginReducer.workflowStatusCaseClosed);
          break;
        case '2':
          defaultCaseDisplay = response.loginInfoDTO.workflowStatusAlertClosed
            ? response.loginInfoDTO.workflowStatusAlertClosed.concat(response.loginInfoDTO.workflowStatusCaseClosed)
            : getState().loginReducer.workflowStatusAlertClosed.concat(getState().loginReducer.workflowStatusCaseClosed);
          break;
        default:
          defaultCaseDisplay = response.loginInfoDTO.workflowStatusAlertOpen
            ? response.loginInfoDTO.workflowStatusAlertOpen.concat(response.loginInfoDTO.workflowStatusAlertClosed, response.loginInfoDTO.workflowStatusCaseOpen, response.loginInfoDTO.workflowStatusCaseClosed)
            : getState().loginReducer.workflowStatusAlertOpen.concat(getState().loginReducer.workflowStatusAlertClosed, getState().loginReducer.workflowStatusCaseOpen, getState().loginReducer.workflowStatusCaseClosed);
          break;
      }
    } else if (each.preferenceCode === 'displayMaxRecordPerPageAlert') {
      defaultMaxRecordPerPageAlert = each.preferenceValue;
    } else if (each.preferenceCode === 'displayMaxRecordPerPageCase') {
      defaultMaxRecordPerPageCase = each.preferenceValue;
    }
  })
  dispatch(updateDefaultDisplay(defaultAlertDisplay, defaultCaseDisplay, defaultMaxRecordPerPageAlert, defaultMaxRecordPerPageCase));
}
export const updateDefaultDisplay = (defaultAlertDisplay, defaultCaseDisplay, defaultMaxRecordPerPageAlert, defaultMaxRecordPerPageCase) => {
  return {
    type: actionType.MANAGE_DEFAULT_DISPLAY,
    payload:{
      defaultAlertDisplay: defaultAlertDisplay,
      defaultCaseDisplay: defaultCaseDisplay,
      defaultMaxRecordPerPageAlert: defaultMaxRecordPerPageAlert,
      defaultMaxRecordPerPageCase: defaultMaxRecordPerPageCase
    }
  }
}
