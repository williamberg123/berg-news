import * as types from './types';

export const reducer = (state, action) => {
	switch (action.type) {
		case types.LOGIN: {
			sessionStorage.setItem('user', JSON.stringify(action.payload));
			return { ...action.payload };
		}

		case types.LOGOUT: {
			sessionStorage.removeItem('user');
		}
	}
};
