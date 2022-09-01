import { User } from 'firebase/auth';
import { Dispatch } from 'react';
import * as types from './types';

export const buildActions = (dispatch: Dispatch<{ type: string, payload?: User }>) => {
	return {
		verifyLoggedInUser:
			(loggedInUser: User) => dispatch({ type: types.VERIFY_LOGGEDIN_USER, payload: loggedInUser }),
		login: (user: User) => dispatch({ type: types.LOGIN, payload: user }),
		logout: () => dispatch({ type: types.LOGOUT }),
	};
};
