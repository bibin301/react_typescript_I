import { LinkChartRelationSearchParam } from './LinkChartRelationSearchParam';

export class Link {

	public id: number;
	public relationId: string;
	public x: number;
	public y: number;
	public intermediateX: number;
	public intermediateY: number;
	public fromNodeId: number;
	public toNodeId: number;
	public linkChartId: string;
	public linkStatus: number;
	public description: string;
	public dashedLength: number;
	public lineWidth: number;
	public lineColor: number;
	public imageLineCoef: number;

	public labelFontSize: number;
	public labelFontColor: string;
	public labelFontStyle: string;

	public searchParam: Array<LinkChartRelationSearchParam>;

}
