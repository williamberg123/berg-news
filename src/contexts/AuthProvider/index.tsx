import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useMemo, useReducer } from 'react';
import { AuthContextType, AuthProviderProps } from '../../@types/authType';
import { auth } from '../../data/Firebase';
import { buildActions } from './buildActions';
import { reducer } from './reducer';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [ user, userDispatch ] = useReducer(reducer, null, () => {
		const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
		if (loggedInUser) return loggedInUser;
	});

	const userActions = buildActions(userDispatch);

	useEffect(() => {
		onAuthStateChanged(auth, (userInfo) => {
			if (!userInfo) {
				userActions.logout();
				return;
			}
			userActions.login(userInfo);
		});
	}, [auth]);

	const context = useMemo(() => ({
		user,
	}), [user]);

	return (
		<AuthContext.Provider value={context}>
			{ children }
		</AuthContext.Provider>
	);
};
