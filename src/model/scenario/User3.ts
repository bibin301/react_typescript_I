import { UserAlgorithmPreferences3 } from './UserAlgorithmPreferences3'
import { UserPreferences3 } from './UserPreferences3'
export class User3 {
  public userAlgorithmPreferences: UserAlgorithmPreferences3;
  public pep: string;
  public mit: string;
  public passwordSetOn: any;
  public password: string;
  public auditEntityType: string;
  public auditId: string;
  public groupsIds: number[];
  public id: number;
  public userId: string;
  public name: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;
  public fullName: string;
  public loginAttempts: number;
  public active: boolean;
  public locked: boolean;
  public licenseAccepted: boolean;
  public passwordChangeRequired: boolean;
  public lastLoginTime: string;
  public userPreferences: UserPreferences3;
  public orgUnitId: number;
  public createdOn: string;
  public updatedOn: string;
  public createdBy: string;
  public updatedBy: string;
  public deleted: string;
}