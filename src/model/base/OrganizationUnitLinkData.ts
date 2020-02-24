import { OrganizationUnitData } from './OrganizationUnitData';

export class OrganizationUnitLinkData {
	public id: number;
	public orgId: number;
	public linkedOrgId: number;
	public linkType: number;
	public orgUnit: OrganizationUnitData;
	public linkedOrg: OrganizationUnitData;
}
