import { createContext, ReactNode, useMemo, useState } from 'react';
import { AppContextType } from '../@types/appTypes';

export const AppContext = createContext<AppContextType | null>(null);

export default function AppProvider({ children }: { children: ReactNode }) {
	const [ auth ] = useState(null);
	const [ news ] = useState([]);

	const context = useMemo(() => ({
		news, auth,
	}), [news]);

	return (
		<AppContext.Provider value={context}>
			{ children }
		</AppContext.Provider>
	);
}
