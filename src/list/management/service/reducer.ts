import actionType from './actionType';
import { ListManagementResponseDTO } from './../../../model/dto/ListManagementResponseDTO';


export type State = {
	workFlowStatusList: ListManagementResponseDTO["lookUpFieldsList"],
	fieldTypeList: ListManagementResponseDTO["fieldTypeList"],
	userDataPreferenceList: ListManagementResponseDTO["userDataPreferenceList"],
	languageDataSourceList: ListManagementResponseDTO["languageDataSourceList"],
	allActiveList: ListManagementResponseDTO["allActiveList"],
	allTreeFolderList: ListManagementResponseDTO["allTreeFolderList"]
};

//TODO might be needed to set an initialState

export const initialState: State = {
	workFlowStatusList: [],
	fieldTypeList: [],
	userDataPreferenceList: [],
	languageDataSourceList: [],
	allActiveList: [],
	allTreeFolderList: []
}

interface actionTypeInterface {
	type: actionType,
	payload: any
}


export function listReducer(state: State = initialState, action: actionTypeInterface) {
	switch (action.type) {
		case actionType.GETLOOKUPFIELDSDATA:
			return {
				...state,
				lookUpFieldsList: action.payload,
			}
		case actionType.GETALLFIELDTYPE:
			return {
				...state,
				fieldTypeList: action.payload
			}
		case actionType.GETUSERDATAPREFERENCELIST:
			return {
				...state,
				userDataPreferenceList: action.payload
			}
		case actionType.GETLANGUAGEDATASOURCES:
			return {
				...state,
				languageDataSourceList: action.payload
			}
		case actionType.GETALLACTIVELIST:
			return {
				...state,
				allActiveList: action.payload
			}
		case actionType.GETTREE:
			return {
				...state,
				allTreeFolderList: action.payload
			}
		default:
			return state;
	}
}

export default listReducer;
