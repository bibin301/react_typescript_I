import { OrganizationUnitLinkData } from './OrganizationUnitLinkData';
import { RiskLevel } from './../adm/risk/RiskLevel';

export class OrganizationUnitData {
	public id: number;
	public description: string;
	public name: string;
	public code: string;
	public parentId: number;
	public deleted: boolean;

	public associatedBIC: string;
	public associatedCurrency: string;

	public riskLevelData: RiskLevel;
	public links: Set<OrganizationUnitLinkData>;

	public creationDtg: Date;
	public lastUpdateDtg: Date;
	public creationUser: string;
	public lastUpdateUser: string;
}
