export class WorkflowStatusData {
	public id: number;
	public name: string;
	public description: string;
	public orgunitId: string;

	public actionDescription: string;

	public creationDtg: Date;
	public lastUpdateDtg: Date;

	public creationUser: string;
	public lastUpdateUser: string;

	public deleteStatus: number;

	public target: string;

	public scenario: string;
	public screenName: string;
	public screenCode: string;

	public closed: number;

	public version: number;

	public workflowId: number;

	public massExecution: number;
}
