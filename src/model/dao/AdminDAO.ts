'use strict';

import axios from 'axios';
import { Dispatch } from 'redux';

import { APIConstants } from './../../constants/APIConstants';
import { RiskLevel } from '../adm/risk/RiskLevel';


export class AdminDAO {

    constructor() {
    }

    public async getAllAdminUserList(userId: string, sort?: { sortBy: string, sortOrder: string }, filter?: { filterType: string, filterCritUser: any }) {
        return (await axios.post(APIConstants.getAllAdminUserList, {
            'page': '0',
            'maxSize': '35',
            "orderField": sort && sort.sortBy,
            "orderDirection": sort && sort.sortOrder,
            'filterType': filter && filter.filterType,
            'filterCritUser': filter && filter.filterCritUser,
            'currentUser': {
                'userId': userId,
                'availableOrgUnits': [
                    '37',
                    '1',
                    '36',
                    '35',
                    '38',
                    '39'
                ]
            }
        })).data;
    }


    public async getAllAdminGroupList(userId: string, filter?: { filterType: string, group: any }) {
        return (await axios.post(APIConstants.getAllAdminGroupList, {
            'page': 0,
            'maxSize': 35,
            'filterType': filter && filter.filterType,
            'group': filter && filter.group,
            'user': { 'userId': userId }
        })).data;
    }

    public async getAllAdminRoleList(userId: string, filter?: { filterType: string, role: any }) {
        return (await axios.post(APIConstants.getAllAdminRoleList, {
            'page': 0,
            'maxSize': 35,
            'filterType': filter && filter.filterType,
            'role': filter && filter.role,
            'user': { 'userId': userId }
        })).data;
    }

    public async getAllAdminRisksList(userId: string) {
        return (await axios.post(APIConstants.getAllAdminRisksList, {
            'page': 0,
            // Todo: per page value need to come here from pagination
            'maxSize': '10',
            'user': {
                'id': '1',
                'userId': userId,
                'availableOrgUnits': [
                    '37',
                    '1',
                    '36',
                    '35',
                    '38',
                    '39'
                ]
            }
        })).data;
    }

    public async riskMergeRequest(userId: string, id: string, name: string, riskLevel: RiskLevel) {
        return (await axios.post(APIConstants.riskMergeRequest, {
            'orgunit': {
                'id': id,
                'riskLevel': riskLevel
            },
            'user': {
                'userId': userId
            },
            'comment': 'Updated Risk Level For OrgUnit: ' + name
        })).data;
    }

    public async getAllAdminOrgUnitList() {
        return (await axios.get(APIConstants.getAllAdminOrgUnitList)).data;
    }

    public async getAllAdminLogicalViews(id: string | number, userId: string) {
        return (await axios.post(APIConstants.getAllAdminLogicalViews, {
            'page': 0,
            'maxRecords': 10,
            'filterTypeKey': null,
            'filtCrit': null,
            'user': {
                'id': id,
                'userId': userId
            }
        })).data;
    }

    public async getAllAdminSchedulerList(user) {
        return (await axios.post(APIConstants.getAllAdminSchedulerList, {
            "page": 0,
            "maxSize": 20,
            "filterType": null,
            "scheduleJob": null,
            "user": user
        })).data;
    }
    public async getAdminLogsByCatagory(category: string, currentPage: number, sortField: string, sortMethod: string) {
        return (await axios.post(APIConstants.getAdminLogsByCatagory, {
            page: currentPage,
            fromDate: null,
            toDate: null,
            users: null,
            actionId: null,
            category: category,
            auditSortField: sortField,
            auditSortMethod: sortMethod
        })).data
    }

    public async getAllAdminWorkflowList(user) {
        return (await axios.post(APIConstants.getAllAdminWorkflowList, {
            "page": 0,
            "maxSize": 20,
            "filterType": null,
            "workFlow": null,
            "user": user
        })).data;
    }

    public async getAdminCategoryHistory(id, userId, userName, value) {
        return (await axios.post(APIConstants.getAdminCategoryHistory, {
            user: {
                id: id,
                userId: userId,
                availableOrgUnits: [
                    "37",
                    "1",
                    "36",
                    "35",
                    "38",
                    "39"
                ]
            },
            entityId: value=== "ROLE" ? id: userName,
            page: 0,
            maxRecords: 0,
            orderField: null,
            auditCategory: "GENERAL",
            field: "entityType",
            value: value
        })).data;
    }

    public async getAdminRolesSecurity(userId) {
        return (await axios.get(APIConstants.getAdminRolesSecurity + userId)).data;
    }

    public async getUserUpdateHistory(id, userId, userName) {
        return (await axios.post(APIConstants.getAdminCategoryHistory, {
            user: {
                id: id,
                userId: userId,
                availableOrgUnits: [
                    "37",
                    "1",
                    "36",
                    "35",
                    "38",
                    "39"
                ]
            },
            entityId: userName,
            page: 0,
            maxRecords: 0,
            orderField: null,
            auditCategory: "GENERAL",
            field: "entityType",
            value: "USER"
        })).data;
    }
    public async getUserGroups(id, userId, userName) {
        return (await axios.post(APIConstants.getAdminCategoryHistory, {
            user: {
                id: id,
                userId: userId,
                availableOrgUnits: [
                    "37",
                    "1",
                    "36",
                    "35",
                    "38",
                    "39"
                ]
            },
            entityId: userName,
            page: 0,
            maxRecords: 0,
            orderField: null,
            auditCategory: "GENERAL",
            field: "entityType",
            value: "GROUP"
        })).data;
    }
    public async getLookupCountryData() {
        return (await axios.get(APIConstants.getLookupCountryData)).data;
    }
    public async deleteReqForAdminUser(id, userId, currentId, currentUserId) {
        return (await axios.post(APIConstants.deleteReqForAdminUser, {
            userDTO: {
                id: id,
                userId: userId
            },
            currentUserDTO: {
                id: currentId,
                userId: currentUserId
            },
            comment: "delete user detail updated successfully"
        })).data;
    }
    public async duplicateUserInformation(activeUserName, activeID, activeUserID, availableLists, availablePerms, orgUnitId, userDTO) {
        return (await axios.post(APIConstants.updateUserInformation, {
            user: userDTO,
            currentUser: {
                id: activeID,
                userId: activeUserID,
                name: activeUserName,
                // orgUnitId:
                availableLists: availableLists,
                availablePerms: availablePerms,
                availableOrgUnits: [
                    '37',
                    '1',
                    '36',
                    '35',
                    '38',
                    '39'
                ]
            },
            duplicateMode: true,
            originalUserName: activeUserName
        })).data;
    }
    public async updateUserInformation(currentUserName, id, userId, availableLists, availablePerms, orgUnitId, userDTO) {
        return (await axios.post(APIConstants.updateUserInformation, {
            user: userDTO,
            currentUser: {
                id: id,
                userId: userId,
                name: currentUserName,
                availableLists: availableLists,
                availablePerms: availablePerms,
                availableOrgUnits: [
                    '37',
                    '1',
                    '36',
                    '35',
                    '38',
                    '39'
                ]
            },
            duplicateMode: false,
            originalUserName: currentUserName
        })).data;
    }
    public async updateRolesInformation(currentUserName, id, userId, availableLists, availablePerms, orgUnitId, userDTO) {
        return (await axios.post(APIConstants.updateRolesInformation, {
            role: userDTO,
            currentUser: {
                id: id,
                userId: userId,
                name: currentUserName,
                availableLists: availableLists,
                availablePerms: availablePerms,
                availableOrgUnits: [
                    '37',
                    '1',
                    '36',
                    '35',
                    '38',
                    '39'
                ]
            }
        })).data;
    }
    public async deleteRolesInformation(currentUserName, id, userId, availableLists, availablePerms, orgUnitId, userDTO) {
        return (await axios.post(APIConstants.deleteRolesInformation, {
            role: userDTO,
            currentUser: {
                id: id,
                userId: userId,
                name: currentUserName,
                availableLists: availableLists,
                availablePerms: availablePerms,
                availableOrgUnits: [
                    '37',
                    '1',
                    '36',
                    '35',
                    '38',
                    '39'
                ]
            },
            comment: "Delete role successfully"
        })).data;
    }


    public async updateGroupsInformation(groups, users) {
        return (await axios.post(APIConstants.updateAdminGroupsInformation, {
            "group": groups,
            "user": users
        })).data;
    }

    public async updateScheduleInformation(groups, users) {
        return (await axios.post(APIConstants.updateAdminScheduleInformation, {
            "scheduleJob": groups,
            "user": users
        })).data;
    }

    public async deleteGroupsInformation(groups, users, comment) {
        return (await axios.post(APIConstants.deleteAdminGroupsInformation, {
            "group": groups,
            "user": users,
            "comment": comment
        })).data;
    }

    public async addAdminOrgUnit(orgUnit: any, currentUser: any) {
        return (await axios.post(APIConstants.addAdminOrgUnit, {
            orgUnit: orgUnit,
            currentUser: currentUser
        })).data;
    }

    public async saveAdminOrgUnit(orgUnit: any, currentUser: any) {
        return (await axios.post(APIConstants.saveAdminOrgUnit, {
            orgUnit: orgUnit,
            currentUser: currentUser
        })).data;
    }
    public async deleteAdminOrgUnit(orgUnit: any, currentUser: any) {
        return (await axios.post(APIConstants.deleteAdminOrgUnit, {
            orgUnit: orgUnit,
            currentUser: currentUser
        })).data;
    }

    public async getAdminOrgUnitHistory(user: any, entityID: any) {
        return (await axios.post(APIConstants.getAdminCategoryHistory, {
            user: user,
            entityId: entityID,
            page: 0,
            maxRecords: 0,
            orderField: null,
            auditCategory: "GENERAL",
            field: "entityType",
            value: "ORGUNIT"
        })).data;
    }

    public async addGroupsInformation(groups, users) {
        return (await axios.post(APIConstants.updateAdminGroupsInformation, {
            "group": {
                "id": -8764,
                "name": groups.adminGroup,
                "description": groups.description,
                "email": groups.email,
                "active": groups.active
            },
            "user": users
        })).data;
    }

    public async addRolesInformation(roles, users) {
        return (await axios.post(APIConstants.updateRolesInformation, {
            "role": {
                "id": -8764,
                "name": roles.name,
                "description": roles.description,
                "active": roles.active
            },
            "currentUser": users
        })).data;
    }
}
