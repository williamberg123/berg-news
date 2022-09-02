import { User } from 'firebase/auth';
import * as types from './types';

export const reducer = (state: User | null, action: { type: string, payload?: User }) => {
	switch (action.type) {
		case types.LOGIN: {
			sessionStorage.setItem('user', JSON.stringify(action.payload));
			return { ...action.payload };
		}

		case types.LOGOUT: {
			sessionStorage.removeItem('user');
			return null;
		}
	}
};
