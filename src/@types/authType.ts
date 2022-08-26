import { ReactNode } from 'react';
import { UserType } from './user';

export interface AuthTProviderProps {
	children: ReactNode;
}

export interface AuthContextType {
	user: UserType | null;
}
