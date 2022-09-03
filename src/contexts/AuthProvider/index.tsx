import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { AuthContextType, AuthProviderProps } from '../../@types/authType';
import { auth } from '../../data/Firebase';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [ user, setUser ] = useState(() => {
		const loggedInUser = JSON.parse(sessionStorage.getItem('user') || 'null');
		return loggedInUser;
	});

	const signOutUser = useCallback(() => {
		auth.signOut();
		setUser(null);
	}, []);

	useEffect(() => {
		onAuthStateChanged(auth, (userInfo) => {
			if (!userInfo) {
				sessionStorage.removeItem('user');
				return;
			}
			sessionStorage.setItem('user', JSON.stringify(userInfo));
			setUser(userInfo);
		});
	}, [auth]);

	useEffect(() => {
		window.addEventListener('unload', signOutUser);

		return () => {
			window.removeEventListener('unload', signOutUser);
		};
	}, []);

	const context = useMemo(() => ({
		user, signOutUser,
	}), [user]);

	return (
		<AuthContext.Provider value={context}>
			{ children }
		</AuthContext.Provider>
	);
};
