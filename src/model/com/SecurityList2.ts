import { Group2 } from './../list/Group2';

export class SecurityList2 {
	public id: string;
	public ownership: boolean;
	public readwrite: boolean;
	public readonly: boolean;
	public checkedin: boolean;
	public group: Group2;
}