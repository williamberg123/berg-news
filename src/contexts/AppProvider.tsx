import { createContext, ReactNode, useMemo, useState } from 'react';
// import { getDocs, collection } from 'firebase/firestore';
import { AppContextType } from '../@types/appTypes';
// import { auth, db } from '../data/Firebase';

export const AppContext = createContext<AppContextType | null>(null);

export default function AppProvider({ children }: { children: ReactNode }) {
	const [ news ] = useState([]);
	const [ page, setPage ] = useState<string | null>(null);

	const setActuallyPage = (pageName: string | null) => setPage(pageName);

	const context = useMemo(() => ({
		news, page, setActuallyPage,
	}), [news, page]);

	// const getInfo = async () => {
	// 	const docs = await getDocs(collection(db, 'example'));
	// 	docs.forEach((doc) => console.log(doc.data()));
	// };

	// useEffect(() => {
	// 	getInfo();
	// }, []);

	return (
		<AppContext.Provider value={context}>
			{ children }
		</AppContext.Provider>
	);
}
