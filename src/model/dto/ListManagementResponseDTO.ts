import { UserDataPreferences } from './../user/UserDataPreferences';
import { Country } from './../lookup/Country';
import { FieldType } from './../list/FieldType';
import { ListFileNavigatorData } from './../list/ListFileNavigatorData';
import { NavigatorData } from './../list/NavigatorData';
import { FolderNavigatorData } from './../list/FolderNavigatorData';
import { ListResult } from './../list/ListResult';
import { FieldDescription } from './../base/FieldDescription';
import { BasicLookup } from './../lookup/BasicLookup';

export class ListManagementResponseDTO {

	public fieldTypeList: Array<FieldType>;
	public userDataPreferenceList: Array<UserDataPreferences>;
	public languageDataSourceList: Array<Country>;
	public allActiveList: Array<ListFileNavigatorData>;
	public allTreeFolderList: Array<Object>;
	public allActiveRWList: Array<ListFileNavigatorData>;
	public allActiveRWFolderList: Array<FolderNavigatorData>;
	public filterListByName: Array<NavigatorData>;
	public saveUserDataPreferences: boolean;
	public checkFolderName: string;
	public childrenListLength: number;
	public checkDataSourceName: string;
	public listResult: ListResult;
	public mergeFolder: string;
	public mergeDataSource: string;
	public folderLength: number;
	public deleteFolderStatus: string;
	public deleteSourceStatus: string;
	public lookUpFieldsList: Array<FieldDescription>;
	public updatelookup: boolean;
	public getAllElementsOfLookup: Object[];
	public createLookUpList: Array<BasicLookup>;
	public deleteLookUpStatus: boolean;
	public crawlerCategorization: Array<Object>;
	public mergeCrawler: boolean;
	public allWebCrawls: Array<Object>;
	public multiMergeSourceList: Array<NavigatorData>;
	public multiDeleteDataSourceResult: boolean;
	public childrenListByParentId: Array<NavigatorData>;

}
