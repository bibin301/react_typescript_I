import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'

import * as loginReducer from './../service/login/reducer';
import * as alertsReducer from './../service/alerts/reducer';
import * as commonReducer from './../service/common/reducer';
import * as dataReducer from './../service/data/reducer';
import * as detectionReducer from './../service/detection/reducer';
import * as adminReducer from './../service/admin/reducer';
import * as listReducer from './../list/management/service/reducer';

export interface RootStore {
  loginReducer: loginReducer.State,
  commonReducer: commonReducer.State,
  dataReducer: dataReducer.State,
  detectionReducer: detectionReducer.State,
  adminReducer: adminReducer.State,
  listReducer: listReducer.State,
  alertsReducer: alertsReducer.State
}

const loginPersistConfig = {
  key: 'login',
  storage: storage,
};


export const rootReducer = combineReducers({
  form: formReducer,
  loginReducer: persistReducer(loginPersistConfig, loginReducer.loginReducer),
  commonReducer: commonReducer.commonReducer,
  dataReducer: dataReducer.dataReducer,
  detectionReducer: detectionReducer.detectionReducer,
  adminReducer: adminReducer.adminReducer,
  listReducer: listReducer.listReducer,
  alertsReducer: alertsReducer.alertsReducer
});
