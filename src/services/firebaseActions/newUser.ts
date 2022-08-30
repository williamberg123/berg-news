import { createUserWithEmailAndPassword } from 'firebase/auth';
import { UserLoginType } from '../../@types/user';
import { auth } from '../../data/Firebase';

export const registerNewUser = async (userData: UserLoginType) => {
	try {
		const { user_email, user_password } = userData;
		await createUserWithEmailAndPassword(auth, user_email, user_password);
		window.location.assign('/');
	} catch (error) {
		alert('Algo deu errado! :(');
	}
};
