import { ListDetails } from './../list/ListDetails';
import { User } from './../user/User';
import { UserDataPreferences } from './../user/UserDataPreferences';
import { NavigatorData } from './../list/NavigatorData';
import { BasicLookup } from './../lookup/BasicLookup';
import { AdmWebCrawler } from './../adm/crawl/AdmWebCrawler';
import { SecurityModel } from './../com/SecurityModel';

export class ListManagementRequestDTO {

	public user: User;
	public dataPref: Array<UserDataPreferences>;
	public internalListId: number;
	public navigatorData: NavigatorData;
	public listId: string;
	public logicalView: Array<ListDetails>;
	public comment: string;
	public arrayOfLUElements: Array<BasicLookup>;
	public hibernateName: string;
	public lookupRowId: string;
	public deleteOrUndelete: boolean;
	public createDestinationFolder: boolean;
	public arraywcr: Array<AdmWebCrawler>;
	public page: number;
	public maxRecords: number;
	public filterType: string;
	public filtCrit: AdmWebCrawler;
	public arrayObjects: Array<NavigatorData>;
	public listOfOrgUnits: Array<SecurityModel>;
	public securityList: Array<SecurityModel>;
	public saveTreeArray: any; //TODO ???
}
