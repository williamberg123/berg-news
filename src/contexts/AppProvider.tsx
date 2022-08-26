import { createContext, ReactNode, useMemo, useState } from 'react';
import { AppContextType } from '../@types/appTypes';

export const AppContext = createContext<AppContextType | null>(null);

export default function AppProvider({ children }: { children: ReactNode }) {
	const [ auth, setAuth ] = useState(null);
	const [ news, setNews ] = useState([]);

	const context = useMemo(() => ({
		news,
	}), [news]);

	return (
		<AppContext.Provider value={context}>
			{ children }
		</AppContext.Provider>
	);
}
