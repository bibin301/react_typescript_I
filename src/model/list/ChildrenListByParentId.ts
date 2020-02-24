import { ListOfOrgUnit } from './ListOfOrgUnit';
import { LogicalView } from './LogicalView';
import { User3 as Owner } from './../scenario/User3';
import { SecurityList2 } from './../com/SecurityList2';

export class ChildrenListByParentId {
  public id: string;
  public parentId: string;
  public label: string;
  public description: string;
  public creationTimestamp: any;
  public updateTimestamp: any;
  public updateUser: string;
  public creationUser: string;
  public owner: Owner;
  public isFolder: boolean;
  public isFile: boolean;
  public isRoot: boolean;
  public deleted: boolean;
  public children: any[];
  public listOfOrgUnits: ListOfOrgUnit[];
  public securityList: SecurityList2[];
  public evaluation: string;
  public listType?: number;
  public logicalViews: LogicalView[];
}
