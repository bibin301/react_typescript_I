'use strict';

import { ArrayOfRisk } from './arrayOfRisk';
import { Risk } from './risk';

export class Country {
    risks: Risk[];
    originId: string;
    uid: string;
    deleteStatus?: any;
    createdOn: string;
    updatedOn: string;
    sourceOfData: string;
    originalUid: string;
    version: number;
    listId: string;
    name: string;
    nationality: string;
    iso2: string;
    iso3: string;
    latitude?: number;
    longitude: number;
    arrayOfRisks: ArrayOfRisk[];
    updatedBy?: string;
    orgUnitId?: number;
}
