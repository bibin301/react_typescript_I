'use strict';

import { UserPreferences } from './userPreferences';
import { OrgUnit } from './orgUnit';
import { Group } from './group';
import { Role } from './role';
import { Country } from './country';
import { UserAlgorithmPreferences } from './userAlgorithmPreferences';

export class User {
    userAlgorithmPreferences: UserAlgorithmPreferences;
    pep: string;
    mit: string;
    passwordSetOn: any;
    password: string;
    auditEntityType: string;
    auditId: string;
    groupsIds: number[];
    id: number;
    userId: string;
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    fullName: string;
    loginAttempts: number;
    active: boolean;
    locked: boolean;
    licenseAccepted: boolean;
    passwordChangeRequired: boolean;
    lastLoginTime: string;
    userPreferences: UserPreferences;
    orgUnit: OrgUnit;
    orgUnitId: number;
    updatedOn: string;
    updatedBy: string;
    deleted: string;
    groups: Group[];
    roles: Role[];
    orgUnits: OrgUnit;
    createdOn: string;
    createdBy: string;
    country: Country;
}

