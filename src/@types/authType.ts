import { ReactNode } from 'react';
import { UserType } from './user';

export interface AuthProviderProps {
	children: ReactNode;
}

export interface AuthContextType {
	user: UserType | null;
}
