'use strict';

import axios from 'axios';
import { APIConstants } from './../../constants/APIConstants';
import { DetectionResponseDTO } from './../dto/DetectionResponseDTO';
import { OrgUnitObj } from './../alert/OrgUnitObj';

export class DetectionDAO {

  constructor() {

  }

  public async getRuleStatus() {
    return (await axios.get(APIConstants.getRuleStatus)).data;
  }

  public async getScenarioStatus() {
    return (await axios.get(APIConstants.getScenarioStatus)).data;
  }

  public async getAllSbDetectionRulesStatus(userId: string, availableLists: Array<string>) {
    return (await axios.post(APIConstants.getAllSbDetectionRulesStatus, {
      user: {
        availableLists: availableLists,
        availableOrgUnits: [39, 37, 38, 36, 1, 35],
        orgUnits: [
          {id: 39}, {id: 37}, {id: 38}, {id: 36}, {id: 1}, {id: 35}
        ],
        availablePerms: [6000, 1, 100, 101, 200, 201, 202, 203, 204, 102, 250, 251, 252, 253, 103, 300, 301, 302, 303, 105, 400, 401, 402, 403, 106, 450, 451, 452, 453, 107, 108, 550, 551, 552, 554, 555, 556, 557, 109, 600, 601, 112, 800, 801, 802, 803, 113, 850, 851, 852, 853, 114, 900, 901, 902, 903, 115, 1100, 1101, 1102, 1103, 116, 1200, 1201, 1202, 1203, 117, 1300, 1301, 1302, 1303, 118, 1400, 1401, 1402, 1403, 119, 1500, 1501, 1502, 1503, 120, 1600, 1601, 1602, 1603, 121, 1700, 1701, 1702, 1703, 97, 2, 1000, 1001, 1002, 1003, 1004, 1010, 1011, 1012, 98, 3, 2000, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 99, 4, 3000, 3100, 3200, 3201, 3202, 3203, 3101, 3300, 3301, 3302, 3303, 3102, 3400, 3401, 3402, 3403, 3103, 5, 4000, 4100, 4101, 6, 5000, 5100, 5200, 5201, 5202, 5203, 5101, 5300, 5301, 5302, 5303, 8, 7000, 9, 9000],
        id: 1,
        userId: userId,
        name: 'adminesch' // fix : need to fix this
      }
    })).data;
  }

  public async getAllSbDetectionScenariosStatus(userId: string, availableLists: Array<string>) {
    return(await axios.post(APIConstants.getAllSbDetectionScenariosStatus, {
      user: {
        availableLists: availableLists,
        availableOrgUnits: [39, 37, 38, 36, 1, 35],
        orgUnits: [
          {id: 39}, {id: 37}, {id: 38}, {id: 36}, {id: 1}, {id: 35}
        ],
        availablePerms: [6000, 1, 100, 101, 200, 201, 202, 203, 204, 102, 250, 251, 252, 253, 103, 300, 301, 302, 303, 105, 400, 401, 402, 403, 106, 450, 451, 452, 453, 107, 108, 550, 551, 552, 554, 555, 556, 557, 109, 600, 601, 112, 800, 801, 802, 803, 113, 850, 851, 852, 853, 114, 900, 901, 902, 903, 115, 1100, 1101, 1102, 1103, 116, 1200, 1201, 1202, 1203, 117, 1300, 1301, 1302, 1303, 118, 1400, 1401, 1402, 1403, 119, 1500, 1501, 1502, 1503, 120, 1600, 1601, 1602, 1603, 121, 1700, 1701, 1702, 1703, 97, 2, 1000, 1001, 1002, 1003, 1004, 1010, 1011, 1012, 98, 3, 2000, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 99, 4, 3000, 3100, 3200, 3201, 3202, 3203, 3101, 3300, 3301, 3302, 3303, 3102, 3400, 3401, 3402, 3403, 3103, 5, 4000, 4100, 4101, 6, 5000, 5100, 5200, 5201, 5202, 5203, 5101, 5300, 5301, 5302, 5303, 8, 7000, 9, 9000],
        id: 1,
        userId: userId,
        name: 'adminesch'
      }
    })).data;
  }

  public async getAllSbDetectionProfilesStatus(userId: string, availableLists: Array<string>) {
    return (await axios.post(APIConstants.getAllSbDetectionProfilesStatus , {
      user: {
        availableLists: availableLists,
        availableOrgUnits: [39, 37, 38, 36, 1, 35],
        orgUnits: [
          {id: 39}, {id: 37}, {id: 38}, {id: 36}, {id: 1}, {id: 35}
        ],
        availablePerms: [6000, 1, 100, 101, 200, 201, 202, 203, 204, 102, 250, 251, 252, 253, 103, 300, 301, 302, 303, 105, 400, 401, 402, 403, 106, 450, 451, 452, 453, 107, 108, 550, 551, 552, 554, 555, 556, 557, 109, 600, 601, 112, 800, 801, 802, 803, 113, 850, 851, 852, 853, 114, 900, 901, 902, 903, 115, 1100, 1101, 1102, 1103, 116, 1200, 1201, 1202, 1203, 117, 1300, 1301, 1302, 1303, 118, 1400, 1401, 1402, 1403, 119, 1500, 1501, 1502, 1503, 120, 1600, 1601, 1602, 1603, 121, 1700, 1701, 1702, 1703, 97, 2, 1000, 1001, 1002, 1003, 1004, 1010, 1011, 1012, 98, 3, 2000, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 99, 4, 3000, 3100, 3200, 3201, 3202, 3203, 3101, 3300, 3301, 3302, 3303, 3102, 3400, 3401, 3402, 3403, 3103, 5, 4000, 4100, 4101, 6, 5000, 5100, 5200, 5201, 5202, 5203, 5101, 5300, 5301, 5302, 5303, 8, 7000, 9, 9000],
        id: 1,
        userId: userId,
        name: 'adminesch'
      }
    })).data;
  }

  public async getAllDetectionRulesList(detectionIdSelectedSb: number, id: number, userId: string, availableLists: Array<string>, availableOrgUnits: Array<string>, orgUnits: Array<OrgUnitObj>, availablePerms: Array<number>) {
    return( await axios.post(APIConstants.getAllDetectionRulesList , {
      maxSize: '0',
      page: '0',
      orderField: null,
      orderDirection: 'asc',
      periodicityId: [detectionIdSelectedSb],
      user: {
        availableLists: availableLists,
        availableOrgUnits: availableOrgUnits,
        orgUnits: [
          {id: 39}, {id: 37}, {id: 38}, {id: 36}, {id: 1}, {id: 35}
        ],
        availablePerms: availablePerms,
        id: id,
        userId: userId,
        name: 'adminesch'
      },
      profile: false,
      arrayFilter: []
    })).data;
  }

  public async getAllDetectionScenariosList(detectionNameSelectedSb: string, id: number, userId: string, availableLists: Array<string>, availableOrgUnits: Array<string>, orgUnits: Array<OrgUnitObj>, availablePerms: Array<number>) {
    return(await axios.post(APIConstants.getAllDetectionScenariosList , {
      maxSize: '0',
      page: '0',
      orderField: null,
      orderDirection: 'asc',
      inputType: detectionNameSelectedSb,
      user: {
        availableLists: availableLists,
        availableOrgUnits: availableOrgUnits,
        orgUnits: [
          {id: 39}, {id: 37}, {id: 38}, {id: 36}, {id: 1}, {id: 35}
        ],
        availablePerms: availablePerms,
        id: id,
        userId: userId,
        name: 'adminesch'
      },
      profile: false,
      arrayFilter: []
    })).data;
  }

  public async getAllDetectionProfilesList(detectionIdSelectedSb: number, id: number, userId: string, availableLists: Array<string>, availableOrgUnits: Array<string>, orgUnits: Array<OrgUnitObj>, availablePerms: Array<number>) {
    return( await axios.post(APIConstants.getAllDetectionProfilesList , {
      maxSize: '0',
      page: '0',
      orderField: null,
      orderDirection: 'asc',
      periodicityId: [detectionIdSelectedSb],
      user: {
        availableLists: availableLists,
        availableOrgUnits: availableOrgUnits,
        orgUnits: [
          {id: 39}, {id: 37}, {id: 38}, {id: 36}, {id: 1}, {id: 35}
        ],
        availablePerms: availablePerms,
        id: id,
        userId: userId,
        name: 'adminesch'
      },
      profile: false,
      arrayFilter: []
    })).data;
  }

}
