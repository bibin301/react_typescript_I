import { JobParameters } from './JobParameters';

export class Jobs {
	public id: number;
	public name: string;
	public description: string;
	public className: string;
	public type: number;
	public jobParameters: Array<JobParameters>;
}
