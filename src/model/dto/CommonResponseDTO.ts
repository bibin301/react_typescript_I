import { AuditAction } from './../base/AuditAction';
import { Jobs } from './../scheduler/Jobs';
import { Permission } from './../adm/permissions/Permission';
import { ListDetails } from './../list/ListDetails';
import { BatchTemplates } from './../cm/BatchTemplates';
import { Scenario } from './../scenario/Scenario';
import { FolderNavigatorData } from './../list/FolderNavigatorData';
import { ListFileNavigatorData } from './../list/ListFileNavigatorData';

export class CommonResponseDTO {
	public auditActionResponseList: Array<AuditAction>;
	public allJobsList: Array<Jobs>;
	public permissions: Array<Permission>;
	public listDetails: Array<ListDetails>;
	public batchTemplates: Array<BatchTemplates>;
	public scenarioJobList: Array<Scenario>;
	public pathJobList: Array<FolderNavigatorData>;
	public fileJobList: Array<ListFileNavigatorData>;
}
