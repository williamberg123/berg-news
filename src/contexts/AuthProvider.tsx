import { createContext, useEffect, useMemo, useState } from 'react';
import { AuthContextType, AuthTProviderProps } from '../@types/authType';
import { UserType } from '../@types/user';

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthTProviderProps) => {
	const [ user, setUser ] = useState<UserType | null>(null);

	useEffect(() => {
		setUser(null);
	}, []);

	const context = useMemo(() => ({
		user,
	}), [user]);

	return (
		<AuthContext.Provider value={context}>
			{ children }
		</AuthContext.Provider>
	);
};
