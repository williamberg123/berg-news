import { NewsType } from './news';

export interface AppContextType {
	news: NewsType[];
	page: string | null;
	// eslint-disable-next-line
	setActuallyPage: (page: string | null) => void;
}
