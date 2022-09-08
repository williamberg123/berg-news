export interface NewsType {
	author: string;
	title: string;
	description: string;
	content: string;
	url: string;
	urlToImage: string;
	publishedAt: string | number | Date;
	docId?: string;
}
