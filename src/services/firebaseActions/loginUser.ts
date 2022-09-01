import { signInWithEmailAndPassword } from 'firebase/auth';
import { FieldValues } from 'react-hook-form';
import { auth } from '../../data/Firebase';

export const loginUser = async (userData: FieldValues) => {
	try {
		const { user_email, user_password } = userData;
		await signInWithEmailAndPassword(auth, user_email, user_password);
		window.location.assign('/');
	} catch (error) {
		alert('Algo deu errado! :(');
	}
};
