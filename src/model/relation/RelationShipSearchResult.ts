import { RelationShip } from './RelationShip';
import { BasicEntity } from './../entity/BasicEntity';
import { DoiTBasicTransaction } from './../transaction/DoiTBasicTransaction';

export class RelationShipSearchResult {
	public relations: Array<RelationShip>;
	public externalRelations: Array<RelationShip>;
	public transactions: Array<DoiTBasicTransaction>;
	public entities: Array<BasicEntity>;
}
