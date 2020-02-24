import { DoiFileEntity } from './../../entity/DoiFileEntity';
import { OrgUnit } from './../orgunit/OrgUnit';
import { AdmWebCrawlerPostParam } from './AdmWebCrawlerPostParam';

export class AdmWebCrawler {

	public uid: string;
	public type: number;
	public startUrl: string;
	public domain: string;
	public triggerFileUid: string;
	public triggerFile: DoiFileEntity;
	public destFolder: string;
	public addInformation: string;
	public crawlDepth: number;
	public cronExpression: string;
	public crawlDuration: string;
	public description: string;
	public organizationUnit: OrgUnit;
	public listOfCategories: Array<string>;

	public baseUrlFilter: string;
	public urlPreFilter: string;
	public contentFilters: string;
	public siteLogin: string;
	public sitePassword: string;
	public listOfPostParams: Array<AdmWebCrawlerPostParam>;

	public connectionMode: number;
	public loginName: string;
	public passwordName: string;

	public hashEnabled: Boolean;
	public maxUrlByBatch: number;
	public crawlerCategorization: string;
	public timestampEnabled: Boolean;
	public md5Check: Boolean;

	public active: Boolean;
	public createJob: Boolean;
	public createJobName: string;
	public listIdData: string;

	public orgUnitId: string;

	public createdBy: string;
	public createdOn: Date;
	public updatedBy: string;
	public updatedOn: Date;
	public originId: string;
	public sourceOfData: string;
	public version: number;

	public triActive: number;

	public setCategories(array: Array<string>): void {
		if (array == null)
			return;

		if (array.length == 0)
			return;

		this.listOfCategories = new Array<string>();
		this.listOfCategories = array;
	}

	// Common Application Field
	public creationDtg: Date;
	public creationDtgRange: string;
	public lastUpdateDtg: Date;
	public lastUpdateDtgRange: string;
	public creationUser: string;
	public lastUpdateUser: string;

	public listId: string;
	public ownedBy: string;

	public toBeDeleted: number;
	public deleteStatus: string;

	public startDtg: Date;
	public endDtg: Date;
	public deletionDtg: Date;
}
