import { UserInfo } from 'firebase/auth';
import { ReactNode } from 'react';

export interface AuthProviderProps {
	children: ReactNode;
}

export interface AuthContextType {
	user: UserInfo;
}
