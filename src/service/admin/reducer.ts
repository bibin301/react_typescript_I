import { find as _find } from 'lodash';
import actionType from './actionType';
import { OrgUnitList } from '../../model/admin/orgUnitList';
import { AllRiskList } from '../../model/admin/allRiskList';
import { User } from '../../model/admin/users';
import { RolesList } from '../../model/admin/roleList';
import { GroupList } from '../../model/admin/groupList';
import { Country } from '../../model/admin/country';
import { getAdminLogsByCatagory } from './action';


export type State = {
  adminDataList: User | RolesList | GroupList,
  adminRiskList: AllRiskList,
  adminOrgUnitList: OrgUnitList
  adminModifyingUser: any,
  adminScheduleModifying: any,
  adminModifyingGroup: any,
  adminDeleteGroup: any,
  userUpdateHistory: any,
  userUpdateSecurity: any,
  adminLogsByCatagory: any,
  lookupCountryList: Array<Country>,
  adminLogsByCatagoryCount: number,
};

const initialState: State = {
  adminDataList: {} as User | RolesList | GroupList,
  adminRiskList: {} as AllRiskList,
  adminOrgUnitList: {} as OrgUnitList,
  adminModifyingUser: null,
  adminModifyingGroup: null,
  adminScheduleModifying: null,
  adminDeleteGroup: null,
  userUpdateHistory: null,
  userUpdateSecurity: null,
  adminLogsByCatagory: null,
  lookupCountryList: null,
  adminLogsByCatagoryCount: null,
}

interface actionTypeInterface {
  type: actionType,
  payload: any
}

export function adminReducer(state: State = initialState, action: actionTypeInterface) {
  switch (action.type) {
    case actionType.ALL_ADMIN_DATALIST_SUCCESS:
      return {
        ...state,
        adminDataList: action.payload
      }

    case actionType.ALL_ADMIN_RISKLIST_SUCCESS:
      return {
        ...state,
        adminRiskList: action.payload
      }
    case actionType.ALL_ADMIN_ORGUNIT_LIST_SUCCESS:
      return {
        ...state,
        adminOrgUnitList: action.payload
      }
    case actionType.USER_UPDATE_HISTORY_SUCCESS:
      return {
        ...state,
        userUpdateHistory: action.payload
      }
    case actionType.USER_UPDATE_SECURITY_SUCCESS:
      return {
        ...state,
        userUpdateSecurity: action.payload
      }
    case actionType.ADD_USER_TO_MODIFY:
      return {
        ...state,
        adminModifyingUser: _find(state.adminDataList, { id: action.payload })
      }
    case actionType.EDIT_SCHEDULE_TO_MODIFY:
      return {
        ...state,
        adminScheduleModifying: _find(state.adminDataList, { id: action.payload })
      }
    case actionType.ADD_GROUP_TO_MODIFY:
      return {
        ...state,
        adminModifyingGroup: _find(state.adminDataList, { id: action.payload })
      }
    case actionType.DELETE_GROUP_TO_MODIFY:
      return {
        ...state,
        adminDeleteGroup: _find(state.adminDataList, { id: action.payload })
      }
    case actionType.LOOKUP_COUNTRY_DATA_SUCCESS:
      return {
        ...state,
        lookupCountryList: action.payload
      }
    case actionType.ADMIN_LOG_CATAGORY_SUCCESS:
      return {
        ...state,
        adminLogsByCatagoryCount: action.payload[0],
        adminLogsByCatagory: action.payload[1]
      }
    default:
      return state
  }
}

export default adminReducer;
