export interface UnsaveButtonProps {
	author?: string;
	title?: string;
	description?: string;
	content?: string;
	url?: string;
	urlToImage?: string;
	publishedAt?: string;
	docId: string;
	// eslint-disable-next-line
	removeOneNews: (docId: string) => void;
}
