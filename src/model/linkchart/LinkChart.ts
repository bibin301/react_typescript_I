import { BasicEntity } from './../entity/BasicEntity';
import { RelationShip } from './../relation/RelationShip';
import { Link } from './Link';
import { Node } from './Node';
import { DoiTBasicTransaction } from './../transaction/DoiTBasicTransaction';
import { LinkChartSecurity } from './LinkChartSecurity';

export class LinkChart {

	public name: string;
	public description: string;
	public comment: string;
	public creationUser: string;
	public lastUpdateUser: string;
	public creationDate: Date;
	public lastSavedDate: Date;
	public latestXScrollPos: number;
	public latestYScrollPos: number;
	public latestZoomLevel: number;
	public orgunitId: number;
	public revision: number;
	public arrayClient: Array<BasicEntity>;
	public arrayRelation: Array<RelationShip>;
	public arrayNode: Array<Node>;
	public arrayLink: Array<Link>;
	public arrayOfTransactions: Array<DoiTBasicTransaction>;
	// public screenshot: BinaryType; //byte[] ??
	public screenshot: Buffer //byte[] ??

	public arrayOfRevisions: Array<LinkChart>;

	public arrayOfLinkChartSecurity: Array<LinkChartSecurity>;
}
