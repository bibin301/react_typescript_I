import { BatchTemplateMappings } from './BatchTemplateMappings';
import { BatchTemplateActions } from './BatchTemplateActions';
import { BatchTemplateActionColumns } from './BatchTemplateActionColumns';
import { BatchTemplateRelation } from './BatchTemplateRelation';
import { ListDetails } from './../list/ListDetails';
import { ExtraColumn } from './ExtraColumn';
import { MultiColumn } from './MultiColumn';

export class BatchTemplates {
	public id: number;
	public templateName: string;
	public seperationCharacter: string;
	public excludeRows: string;
	public suppressCharacter: string;
	public description: string;
	public excludeTopRows: number;
	public excludeBottomRows: number;
	public headerRow: number;
	public dataSourceId: number;
	public importType: number;
	public time: Date;
	public creationDtg: Date;
	public lastUpdateDtg: Date;
	public listId: string;
	public listOfMappings: Array<BatchTemplateMappings>;
	public listOfActions: Array<BatchTemplateActions>;
	public listOfOriginalIds: Array<BatchTemplateActionColumns>;
	public listOfRelations: Array<BatchTemplateRelation>;
	public listOfNotImportedColumnSelectors: Array<BatchTemplateActionColumns>;
	public extraColumns: Array<ExtraColumn>;
	public selectedDataSourceDetails: ListDetails;
	public multiColumns: Array<MultiColumn>;
	public listOfLists: Array<string>;

	//Parameters
	public errorCount: number;
	public forceCacheRebuild: boolean;
	public forceIndexRebuild: boolean;
	public buffer: number;
	public archiveFile: boolean;
}
