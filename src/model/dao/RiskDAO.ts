'use strict';

import { RiskManagementRequestDTO } from './../dto/RiskManagementRequestDTO';
import { OrgUnit } from './../adm/orgunit/OrgUnit';
import { User } from './../user/User';
import { RiskLevel } from './../adm/risk/RiskLevel';
import { Country } from './../lookup/Country';
import { Group } from './../adm/group/Group';
import { Role } from './../adm/role/Role';
import { UserAlgorithmPreferences } from './../user/UserAlgorithmPreferences';
import { UserHistoryPassword } from './../user/UserHistoryPassword';
import { UserLanguagePreferences } from './../user/UserLanguagePreferences';
import { UserPalettePreference } from './../user/UserPalettePreference';
import { UserPreferences } from './../user/UserPreferences';
import { CountryRisk } from './../lookup/CountryRisk';
import { Permission } from './../adm/permissions/Permission';
import { FieldDescription } from './../base/FieldDescription';
import { RelationShipType } from './../st/RelationShipType';

import axios from 'axios';
import { APIConstants } from './../../constants/APIConstants';


export class RiskDAO {

	//TODO switch to the dto when ready
	public postRiskAll(riskManagementRequestDTO: RiskManagementRequestDTO, orgUnit: OrgUnit, user: User, riskLevel: RiskLevel, country: Country, group: Group, role: Role, userAlgorithmPreferences: UserAlgorithmPreferences, userHistoryPassword: UserHistoryPassword, userLanguagePreferences: UserLanguagePreferences, userPalettePreference: UserPalettePreference, userPreferences: UserPreferences, countryRisk: CountryRisk, permission: Permission, fieldDescription: FieldDescription, relationShipType: RelationShipType) {
		this.post(APIConstants.postRiskAll, riskManagementRequestDTO, orgUnit, user, riskLevel, country, group, role, userAlgorithmPreferences, userHistoryPassword, userLanguagePreferences, userPalettePreference, userPreferences, countryRisk, permission, fieldDescription, relationShipType);
	}

	//TODO switch to the dto when ready
	public postRiskMerge(riskManagementRequestDTO: RiskManagementRequestDTO, orgUnit: OrgUnit, user: User, riskLevel: RiskLevel, country: Country, group: Group, role: Role, userAlgorithmPreferences: UserAlgorithmPreferences, userHistoryPassword: UserHistoryPassword, userLanguagePreferences: UserLanguagePreferences, userPalettePreference: UserPalettePreference, userPreferences: UserPreferences, countryRisk: CountryRisk, permission: Permission, fieldDescription: FieldDescription, relationShipType: RelationShipType) {
		this.post(APIConstants.postRiskMerge, riskManagementRequestDTO, orgUnit, user, riskLevel, country, group, role, userAlgorithmPreferences, userHistoryPassword, userLanguagePreferences, userPalettePreference, userPreferences, countryRisk, permission, fieldDescription, relationShipType);
	}



	//TODO switch to the dto when ready
	private post(url: string, riskManagementRequestDTO: RiskManagementRequestDTO, orgUnit: OrgUnit, user: User, riskLevel: RiskLevel, country: Country, group: Group, role: Role, userAlgorithmPreferences: UserAlgorithmPreferences, userHistoryPassword: UserHistoryPassword, userLanguagePreferences: UserLanguagePreferences, userPalettePreference: UserPalettePreference, userPreferences: UserPreferences, countryRisk: CountryRisk, permission: Permission, fieldDescription: FieldDescription, relationShipType: RelationShipType) {
		axios.post(url, {
			RiskManagementRequestDTO: RiskManagementRequestDTO,
			OrgUnit: orgUnit,
			User: user,
			RiskLevel: riskLevel,
			Country: country,
			Group: group,
			Role: role,
			UserAlgorithmPreferences: UserAlgorithmPreferences,
			UserHistoryPassword: userHistoryPassword,
			UserLanguagePreferences: userLanguagePreferences,
			UserPalettePreference: userPalettePreference,
			UserPreferences: userPreferences,
			CountryRisk: countryRisk,
			Permission: permission,
			FieldDescription: fieldDescription,
			RelationShipType: relationShipType
		})
			.then(function(response) {
				//do smth ?
			})
			.catch(function(error) {
				console.log(error);
			});

	}

}
