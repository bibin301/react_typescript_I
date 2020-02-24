import { BaseOpsData } from './BaseOpsData';

export class OpsEAlertDetailledInformation extends BaseOpsData {
	public uid: string;
	public uidTbl: string;
	public detailledInformation: string;
	public relatedEntityUid: string;
	public relatedEntitySource: string;
}
