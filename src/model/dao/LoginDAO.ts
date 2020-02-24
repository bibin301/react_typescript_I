'use strict';

import axios from 'axios';
import { LoginDTO } from './../dto/LoginDTO';
import { APIConstants } from './../../constants/APIConstants';
import { Dispatch } from 'redux';
import { LoginInfoDTO } from './../dto/LoginInfoDTO';
import { UserDashBoardPreferences } from './../user/UserDashBoardPreferences';

export class LoginDAO {

  constructor() {
  }

  public async getInitLogin() {
    return (await axios.get(APIConstants.getLoginInitLogin)).data;
  }

  public async postLogIn(userId: string, password: string) {
    return (await axios.post(APIConstants.postLogin, {
      userId: userId,
      password: password
    })).data;
  }

  public async getAlertUserPreference(userId: number) {
    return (await axios.post(APIConstants.getAlertUserPreference, {
      user: {
        id: userId 
      }
    })).data;
  }

  public async saveUpAlertDisplay(id: number, userId: string, hiddenFields: Array<string>) {
    return (await axios.post(APIConstants.saveAlertUserPreference, {
      user: {
        id: id,
        userId: id
      },
      hideFiledsAlert: hiddenFields
    })).data;
  }

  public async saveUpCaseDisplay(id: number, userId: string, hiddenFields: Array<string>) {
    return (await axios.post(APIConstants.saveAlertUserPreference, {
      user: {
        id: id,
        userId: id
      },
      hideFiledsCase: hiddenFields
    })).data;
  }

  public async saveUserPreferenceParameters(id: number, userId: string, upList: Array<UserDashBoardPreferences>) {
    return (await axios.post(APIConstants.saveUserPreferenceParameters, {
      user: {
        userId: userId,
        id: id
      },
      dashPref: upList
    })).data;
  }
  
}
