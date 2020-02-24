'use strict';

import axios from 'axios';
import { isEmpty as _isEmpty, isArray as _isArray } from 'lodash';

import { APIConstants } from './../../constants/APIConstants';
import { AlertManagementResponseDTO } from './../dto/AlertManagementResponseDTO';


export class DashBoardDAO {

	constructor() {

	}

	public async getAlertInitWorkflowStatus() {
		return (await axios.get(APIConstants.getAlertInitWorkflowStatus)).data;
	}

	public async getAllAlertList(alertIdSelectedSb: number, id: number, userId: string, availableLists: any, orderField: string, orderDirection: string, defaultAlertDisplay: any, maxRecordPerAlertPage: number) {
		return (await axios.post(APIConstants.postAlertMainAlertFilter, {
			'alertType': alertIdSelectedSb,
			'page': 0,
			'maxRecords': maxRecordPerAlertPage || 10,
			'userFilter': false,
			'isFiltered': false,
			'calculateMaxRecords': true,
			'orderField': _isEmpty(orderField) ? null : orderField,
			'orderDirection': _isEmpty(orderDirection) ? null : orderDirection,
			'user': {
				'id': id,
				'userId': userId,
				'availableLists': availableLists
			},
			'statusIdList': defaultAlertDisplay
		})).data;
	}

	public async getAllCaseList(alertIdSelectedSb: number, id: number, userId: string, availableLists: any, orderField: string, orderDirection: string, defaultCaseDisplay: any, maxRecordPerCasePage: number) {
		return (await axios.post(APIConstants.postAlertMainCasesFilter, {
			'caseType': alertIdSelectedSb,
			'page': 0,
			'maxRecords': maxRecordPerCasePage || 10,
			'userFilter': false,
			'isFiltered': false,
			'orderField': _isEmpty(orderField) ? null : orderField,
			'orderDirection': _isEmpty(orderDirection) ? null : orderDirection,
			'user': {
				'id': 1,
				'groups': [{ 'name': 'CASE1' }],
				'userId': userId,
				'availableLists': availableLists
			},
			'statusIdList': defaultCaseDisplay,
			'listDetails': { 'id': 12 },
			'calculateMaxRecords': true
		})).data;
	}

	public async getAllAlertFilterList(alertId: number, id: number, userId: string, availableLists: any, name: string, filterArray: any, alertListDetails: any, defaultAlertDisplay: any) {
		return (await axios.post(APIConstants.postAlertMainAlertFilter, {
			'alertType': alertId,
			'page': 0,
			'maxRecords': 0,
			'userFilter': true,
			'isFiltered': true,
			'calculateMaxRecords': true,
			'listDetails': alertListDetails,
			'user': {
				'id': id,
				'userId': userId,
				'name': name,
				'availableLists': availableLists,
				'userAlgorithmPreferences': {
					'listOfCheckField': filterArray
				}
			},
			'statusIdList': defaultAlertDisplay
		})).data;
	}

	public async getAllCaseFilterList(caseId: number, id: number, userId: string, availableLists: any, name: string, filterArray: any, caseListDetails: any, defaultCaseDisplay: any) {
		return (await axios.post(APIConstants.postAlertMainCasesFilter, {
			'caseType': caseId,
			'page': 0,
			'maxRecords': 0,
			'userFilter': true,
			'isFiltered': true,
			'calculateMaxRecords': true,
			'listDetails': caseListDetails,
			'user': {
				'id': id,
				'userId': userId,
				'availableLists': availableLists,
				'userAlgorithmPreferences': {
					'listOfCheckField': filterArray
				}
			},
			'statusIdList': defaultCaseDisplay
		})).data;
	}

	public async getAllSbAlertRecentStatus(userId: string | number, availableLists: any, defaultAlertDisplay: any) {
		return (await axios.post(APIConstants.postAlertInitStatus, {
			'user': {
				'userId': userId,
				'availableLists': availableLists
			},
			'statusIdList': defaultAlertDisplay
		})).data;
	}

	public async getAllSbAlertCaseStatus(userId: string | number, availableLists: any, defaultCaseDisplay: any) {
		return (await axios.post(APIConstants.postAlertInitCaseStatus, {
			'user': {
				'groups': [{ 'name': 'CASE1' }],
				'userId': userId,
				'availableLists': availableLists
			},
			'statusIdList': defaultCaseDisplay
		})).data;
	}

	public async getAllAlertSortedList(alertIdSelectedSb: number, id: number, userId: string, availableLists: any, orderField: string = null, orderDirection: string = null, pageNumber: number, maxRecordPerAlertPage: number, defaultAlertDisplay: any) {
		return (await axios.post(APIConstants.postAlertMainAlertFilter, {
			'alertType': alertIdSelectedSb,
			'page': pageNumber || 0,
			'maxRecords': maxRecordPerAlertPage || 10,
			'userFilter': false,
			'isFiltered': false,
			'calculateMaxRecords': true,
			'orderField': _isEmpty(orderField) ? null : orderField,
			'orderDirection': _isEmpty(orderDirection) ? null : orderDirection,
			'user': {
				'id': id,
				'userId': userId,
				'availableLists': availableLists
			},
			'statusIdList': defaultAlertDisplay
		})).data;
	}

	public async getAllCasesSortedList(alertIdSelectedSb: number, id: number, userId: string, availableLists: any, orderField: string = null, orderDirection: string = null, pageNumber: number, maxRecordPerCasePage: number, defaultCaseDisplay: any) {
		return (await axios.post(APIConstants.postAlertMainCasesFilter, {
			'caseType': alertIdSelectedSb,
			'page': pageNumber || 0,
			'maxRecords': maxRecordPerCasePage || 10,
			'userFilter': false,
			'isFiltered': false,
			'orderField': _isEmpty(orderField) ? null : orderField,
			'orderDirection': _isEmpty(orderDirection) ? null : orderDirection,
			'user': {
				'id': 1,
				'groups': [{ 'name': 'CASE1' }],
				'userId': userId,
				'availableLists': availableLists
			},
			'statusIdList': defaultCaseDisplay,
			'listDetails': { 'id': 12 },
			'calculateMaxRecords': true
		})).data;
	}

	public async getRightPaneRelated(id: number, userId: string, availableLists: any) {
		return (await axios.post(APIConstants.postAlertMainRelationShipTypeEntity, {
			'entityIdList': _isArray(id) ? id : [id],
			'paramters': [{ 'id': -2, 'type': -2 }],
			'depth': 1,
			'user': { 'userId': userId, 'availableLists': availableLists }
		})).data;
	}

	public async getRightPaneHistory(selectedListId: string | number, userId: string | number) {
		return (await axios.post(APIConstants.postAlertMainAuditLog, {
			'user': { 'userId': userId, 'orgunitId': 1, 'orgUnits': [{ 'id': 1 }], 'deleted': 'N' },
			'entityId': selectedListId,
			'page': 0,
			'maxRecords': 100,
			'orderField': null,
			'auditCategory': 'ENTITY'
		})).data;
	}

	public async downloadDocument(filePath: string) {
		window.open(APIConstants.downloadDocument + filePath);
	}

	public async uploadDocument(uid: any, file: any, userId: string, availableLists: any) {
		const formData = new FormData();
		formData.append('linkentityid', uid);
		formData.append('baseurl', APIConstants.uploadDocument);
		formData.append('uploadfile', file);
		return (await axios.post(APIConstants.postAlertUploadDocument,  formData,
			{
			  'headers': {
				'content-type': 'multipart/form-data'
			  }
			})).data;
	}

	public async getCommentHistory(alertID:any) {
		return (await axios.post(APIConstants.getCommentHistory, {
			'uid': alertID,
			'type': 'OPS'
		  })).data;
	}

	public async saveComment(uid:any, comment:string, alertUid:any, userId:any) {
		return (await axios.post(APIConstants.saveComment, {
			'comment': {
			  'uid': uid,
			  'comment': comment,
			  'uidTbl': alertUid
			},
			'type': 'OPS',
			'user': {
			  'userId': userId
			}
		  })).data;
	}


}
