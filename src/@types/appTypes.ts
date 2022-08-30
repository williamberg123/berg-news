import { NewsType } from './newsType';

export interface AppContextType {
	news: NewsType[];
	page: string | null;
	setActuallyPage: (page: string | null) => void;
}
