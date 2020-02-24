import { User3 } from './User3'

export class Group3 {
  public id: number;
  public name: string;
  public description: string;
  public email: string;
  public deleted: boolean;
  public active: boolean;
  public updatedOn: any;
  public updatedBy: string;
  public user: User3[];
  public role: any[];
  public auditEntityType: string;
  public auditId: string;
}