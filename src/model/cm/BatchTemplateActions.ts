import { BatchTemplateActionColumns } from './BatchTemplateActionColumns';

export class BatchTemplateActions {
	public static LOOKUP_TABLE: string = "lookupTable";
	public static LOOKUP_FIELD: string = "lookupField";
	public static LOOKUP_TOFIELD: string = "lookupToField";
	public static DATASOURCE_FIELD: string = "dataSourceField";
	public static DATASOURCE_CHECK: string = "datasourceCheck";
	public static LEGAL_ENTITY_NATURAL_PERSON: string = "legalEntityNaturalPerson";
	public static LEGAL_ENTITY_LEGAL_PERSON: string = "legalEntityLegalPerson";
	public static IS_NULL_IF_DIFFERENT: string = "isNullIfDifferent";
	public static SEX_MALE: string = "sexMale";
	public static SEX_FEMALE: string = "sexFemale";
	public static SEX_UNKNOWN: string = "sexUnknown";
	public static SEARCH_TEXT: string = "searchText";
	public static REPLACE_TEXT: string = "replaceText";
	public static GROUP_SEPARATOR: string = "groupSeparator";
	public static DECIMAL_SEPARATOR: string = "decimalSeparator";

	public static RELATION_FROM_TO: string = "relationFromTo";
	public static RELATION_TO_FROM: string = "relationToFrom";
	public static RELATION_TWO_ARROWS: string = "relationTwoArrows";
	public static RELATION_NO_ARROW: string = "relationNoArrow";

	public static PATTERN: string = "pattern";
	public static COLUMN_TITLE: string = "columnTitle";
	public static COLUMN_VALUE: string = "columnValue";

	public static IS_APPEND: string = "isAppend";

	public id: number;
	public templateId: number;
	public actionInt: number;
	public type: number;
	public action: string;
	public value: string;
	public listOfColumns: Array<BatchTemplateActionColumns>;
	//	public Map<String, String> map = new HashMap<>(); //TODO check what is sent back by the webservice and how to map it
}
