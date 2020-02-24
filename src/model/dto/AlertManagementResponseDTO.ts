import { UserDashBoardPreferences } from './../user/UserDashBoardPreferences';
import { WorkflowStatus } from './../workflow/WorkflowStatus';
import { AuditLog } from './../base/AuditLog';
import { RelationShipSearchResult } from './../relation/RelationShipSearchResult';
import { GridQueryResults } from './../grid/GridQueryResults';
import { DoiAlertEntity } from './../entity/DoiAlertEntity';
import { DoiCaseEntity } from './../entity/DoiCaseEntity';
import { LinkChart } from './../linkchart/LinkChart';
import { AlertManagementStats } from './../alertManagement/AlertManagementStats';
import { OpsEAlertData } from './../ops/OpsEAlertData';
import { KPICategory } from './../lookup/KPICategory';
import { DoiEntityComment } from './../doi/DoiEntityComment';

export class AlertManagementResponseDTO {

	public allRelationShipTypeList: Array<RelationShipSearchResult>;
	public auditLogList: Array<AuditLog>;
	public alertFilterList: GridQueryResults<DoiAlertEntity>;
	public casesFilterList: GridQueryResults<DoiCaseEntity>;
	public linkChartFilterList: GridQueryResults<LinkChart>;
	public workFlowStatusList: Array<WorkflowStatus>;
	public alertManagementStats: AlertManagementStats;
	public allAlertList: Array<OpsEAlertData>;
	public changeAlertStatus: string;
	public changeCaseStatus: string;
	public saveUserDashBoardPreferences: boolean;
	public getUserDashBoardPreferences: Array<UserDashBoardPreferences>;
	public getKPIList: Array<KPICategory>;
	public updateEntitiesData: boolean;
	public entityCommentForEntityWithHistory: Array<DoiEntityComment>;
	public updateEntityCommentForEntity: boolean;
	public updateEntitiesDataWithKPI: boolean;

}
