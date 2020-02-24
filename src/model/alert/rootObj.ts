import { AlertManagementStats } from './alertMgmtStats';

export class RootObject {
    status: string;
    message: string;
    alertManagementStats: AlertManagementStats;
    saveUserDashBoardPreferences: boolean;
    updateEntitiesData: boolean;
    updateEntityCommentForEntity: boolean;
    updateEntitiesDataWithKPI: boolean;
    documentCount: number;
    entityCount: number;
    linkChartCount: number;
    eventCount: number;
    transactionCount: number;
    alertEntityCount: number;
}