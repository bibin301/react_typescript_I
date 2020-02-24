'use strict';

import { RiskLevel } from './riskLevel';
import {Child} from './child';
import {Link} from './link';

export class OrgUnit {
    id: number;
    description: string;
    name: string;
    code: string;
    deleted: boolean;
    riskLevel: RiskLevel;
    children: Child[];
    parents: any[];
    links: Link[];
    updatedOn: any;
    updatedBy: string;
    auditEntityType: string;
    auditId: string;
}