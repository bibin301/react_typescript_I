'use strict';

import axios from 'axios';
import { APIConstants } from './../../constants/APIConstants';
import { CommonResponseDTO } from './../dto/CommonResponseDTO';
import { UserDTO } from './../dto/UserDTO';
import { CommonFilesReqDTO } from './../dto/CommonFilesReqDTO';


export class CommonDAO {

	constructor() {

	}

	public async getAllAvailableJob() {
		return (await axios.get(APIConstants.getAllAvailableJob)).data;
	}

	public async getPermission() {
		return (await axios.get(APIConstants.getPermission)).data;
	}

	public async getInternalListsByOrgUnitForJobs(orgunit: string) {
		return (await axios.get(APIConstants.getInternalListsByOrgUnitForJobs + orgunit)).data;
	}

	public async getProfileNameList() {
		return (await axios.get(APIConstants.getProfileNameList)).data;
	}

	public async getScenariosForJob() {
		return (await axios.get(APIConstants.getScenariosForJob)).data;
	}

	public async getAllTemplate() {
		return (await axios.get(APIConstants.getAllTemplates)).data;
	}

	public async getPathForJobs(userDTO: UserDTO) {
		return (await axios.post(APIConstants.getPathsForJobs,
			JSON.stringify(userDTO)
		)).data;
	}

	public async getFilesForJobs(commonFilesReqDTO: CommonFilesReqDTO) {
		return (await axios.post(APIConstants.getFilesForJobs, JSON.stringify(commonFilesReqDTO))).data;
	}

	public async getAuditAction() {
		return (await axios.get(APIConstants.getAuditAction)).data;
	}

}
