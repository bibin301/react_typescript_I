import { Idetect_api_url } from './../../../constants/apiUrl';
import { store } from './../../../index';
import { ListDAO } from './../../../model/dao/ListDAO';
import { ListManagementResponseDTO } from './../../../model/dto/ListManagementResponseDTO';
import { ListManagementRequestDTO } from './../../../model/dto/ListManagementRequestDTO';

import actionType from './actionType';

export const getLookupFieldsData = () => {
	let listDAO = new ListDAO();
	let response = listDAO.getLookupFieldsData();

	response.then(function(results: { status: string, message: string, lookUpFieldsList: ListManagementResponseDTO["lookUpFieldsList"] }) {
		store.dispatch({
			type: actionType.GETLOOKUPFIELDSDATA,
			payload: results.lookUpFieldsList
		})
	})
}

export const getAllFieldType = () => {
	let listDAO = new ListDAO();
	let response = listDAO.getAllFieldType();

	response.then(function(results: { status: string, message: string, fieldTypeList: ListManagementResponseDTO["fieldTypeList"] }) {
		store.dispatch({
			type: actionType.GETALLFIELDTYPE,
			payload: results.fieldTypeList
		})
	})
}

export const getUserDataPreferenceList = (userid: string) => {
	let listDAO = new ListDAO();
	let response = listDAO.getUserDataPreferenceList(userid);

	response.then(function(results: { status: string, message: string, userDataPreferenceList: ListManagementResponseDTO["userDataPreferenceList"] }) {
		store.dispatch({
			type: actionType.GETUSERDATAPREFERENCELIST,
			payload: results.userDataPreferenceList
		})
	})
}

export const getLanguageDataSource = () => {
	let listDAO = new ListDAO();
	let response = listDAO.getLanguageDataSource();

	response.then(function(results: { status: string, message: string, languageDataSourceList: ListManagementResponseDTO["languageDataSourceList"] }) {
		store.dispatch({
			type: actionType.GETLANGUAGEDATASOURCES,
			payload: results.languageDataSourceList
		})
	})
}

export const getAllActiveList = () => {
	let listDAO = new ListDAO();
	let response = listDAO.getAllActiveList();

	response.then(function(results: { status: string, message: string, allActiveList: ListManagementResponseDTO["allActiveList"] }) {
		console.log(results);
		store.dispatch({
			type: actionType.GETALLACTIVELIST,
			payload: results.allActiveList
		})
	})
}

export const getTree = (listManagementRequestDTO: ListManagementRequestDTO) => {
	let listDAO = new ListDAO();
	let response = listDAO.getTree(listManagementRequestDTO);

	response.then(function(results: { status: string, message: string, allTreeFolderList: ListManagementResponseDTO["allTreeFolderList"] }) {
		store.dispatch({
			type: actionType.GETTREE,
			payload: results.allTreeFolderList
		})
	})
}
