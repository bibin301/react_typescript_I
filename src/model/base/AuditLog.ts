export class AuditLog {
	public id: number;
	public userId: string;
	public entityId: string;
	public entityType: string;
	public actionId: string;
	public actionValue: string;
	public orgUnit: number;
	public auditComment: string;
	public succeeded: boolean;
	public auditTimestamp: Date;
	public auditTimestampRange: string;
	public userName: string;
	public userIdentifier: string;
	public action: string;
	public referenceId: string;
	public referenceClass: string;
	public tabIndex: number;

	public trxnId: string;
	public trxnReference: string;
	public direction: string;
	public trxnBic: string;

	public triSucceeded: number;
}
