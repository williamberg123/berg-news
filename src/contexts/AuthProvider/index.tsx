import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useCallback, useEffect, useMemo, useReducer } from 'react';
import { AuthContextType, AuthProviderProps } from '../../@types/authType';
import { auth } from '../../data/Firebase';
import { buildActions } from './buildActions';
import { reducer } from './reducer';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [ user, userDispatch ] = useReducer(reducer, null, () => {
		const loggedInUser = JSON.parse(sessionStorage.getItem('user') || 'null');
		return loggedInUser;
	});

	const userActions = buildActions(userDispatch);

	const signOutUser = useCallback(() => {
		auth.signOut();
		userActions.logout();
	}, [auth]);

	useEffect(() => {
		onAuthStateChanged(auth, (userInfo) => {
			if (!userInfo) {
				signOutUser();
				return;
			}
			userActions.login(userInfo);
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
