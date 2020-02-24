import { AdmWebCrawler } from './AdmWebCrawler';

export class AdmWebCrawlerPostParam {
	private uid: string;
	private fields: string;
	private value: string;
	private originId: string;

	private uidTbl: string;
	private listId: string;

	private version: number;

	private crawlerId: string;
	private crawler: AdmWebCrawler;
}
