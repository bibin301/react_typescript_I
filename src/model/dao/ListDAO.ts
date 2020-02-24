'use strict';

import axios from 'axios';
import { APIConstants } from './../../constants/APIConstants';
import { ListManagementResponseDTO } from './../dto/ListManagementResponseDTO';
import { ListManagementRequestDTO } from './../dto/ListManagementRequestDTO';


export class ListDAO {

	constructor() {

	}

	public async getLookupFieldsData() {
		return (await axios.get(APIConstants.getLookupFieldsData)).data;
	}

	public async getAllActiveList() {
		return (await axios.get(APIConstants.getAllActiveList)).data;
	}

	public async getUserDataPreferenceList(userid: string) {
		return (await axios.post(APIConstants.getUserDataPreferenceList, {
			'user': {
				'id': userid
			}
		})).data
	}

	public async getAllFieldType() {
		return (await axios.get(APIConstants.getAllFieldType)).data;
	}

	public async getLanguageDataSource() {
		return (await axios.get(APIConstants.getLanguageDataSource)).data
	}

	public async getTree(listManagementRequestDTO: ListManagementRequestDTO) {
		return (await axios.post(APIConstants.getTree, listManagementRequestDTO)).data;
	}
}
