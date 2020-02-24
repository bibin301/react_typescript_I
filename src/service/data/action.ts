import { store } from './../../index';
import { dispatchLoadingShow, dispatchHideIsLoading } from 'src/service/common/action';
import { topBarTitleSelectedSb } from 'src/service/alerts/action';
import actionType from './actionType';
import * as listAction from './../../list/management/service/action';

import { DataDAO } from './../../model/dao/DataDAO';
import { ComListData } from './../../model/com/ComListData';
import { ChildrenListByParentId } from './../../model/list/ChildrenListByParentId';

export const dispatchClickedFolder = (folder: ComListData) => {
	store.dispatch({ type: actionType.FOLDER_CLICKED, payload: folder });
}

export const initDataList = (userid: string) => {
	listAction.getAllFieldType();
	listAction.getUserDataPreferenceList(userid);
	listAction.getLanguageDataSource();
	listAction.getAllActiveList();
}

export const getTreeFolderList = (id: number, userId: string, name: string) => {
	dispatchLoadingShow();
	let loginDAO = new DataDAO();
	let response = loginDAO.getTreeFolderList(id, userId, name);
	
	response.then(function(result: { status: string, message: string, allTreeFolderList: Array<ComListData> }) {
		if (result.status === "Success") {
			dispatchHideIsLoading();
			store.dispatch(treeFolderListSuccess(result.allTreeFolderList));
		} else {
			console.log(result);
			dispatchHideIsLoading();
		}
	});
}
  
export const getChildrenListByParentID = (dataID: string, id: number, userId: string, name: string) => {
	dispatchLoadingShow();
	let loginDAO = new DataDAO();
	let response = loginDAO.getChildrenListByParentID(dataID, id, userId, name);

	response.then(function(result: { status: string, message: string, childrenListByParentId: Array<ChildrenListByParentId> }) {
		if (result.status === "Success") {
			dispatchHideIsLoading();
			store.dispatch(childrenListByParentIDSuccess(result.childrenListByParentId));
		} else {
			console.log(result);
			dispatchHideIsLoading();
		}
	});
}
  
export const treeFolderListSuccess = (response) => {
	return ({
		type: actionType.TREE_FOLDER_LIST_SUCCESS,
		payload: response
	});
	}

	export const childrenListByParentIDSuccess = (response) => {
	return ({
		type: actionType.CHILDREN_LIST_BY_PARENT_ID_SUCCESS,
		payload: response
	});
}
  