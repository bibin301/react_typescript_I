
'use strict';

import { UserAlgorithmPreferences } from './userAlgorithmPreferences';
import { UserPreferences } from './userPreferences';

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
        orgUnitId: number;
        createdOn: string;
        updatedOn: string;
        createdBy: string;
        updatedBy: string;
        deleted: string;
    }