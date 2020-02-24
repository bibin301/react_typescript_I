'use strict';

import { RiskLevel } from './../risk/RiskLevel';

export class OrgUnit {
	public associatedBIC: string;
	public associatedCurrency: string;
	public auditEntityType: string;
	public auditId: string;
	public children: Array<OrgUnit>;
	public code: string;
	public createdBy: string;
	public createdOn: string;
	public deleted: boolean;
	public description: string;
	public id: number;
	public name: string;
	public parentId: number;
	public parents: Array<OrgUnit>;
	public riskLevel: RiskLevel;
	public updatedBy: string;
	public updatedOn: Date;


	constructor(description: string, name: string, code: string) {
		this.description = description;
		this.name = name;
		this.code = code;
	}

}
