import { useContext } from 'react';
import { AuthContextType } from '../../@types/authType';
import { AuthContext } from '../../contexts/AuthProvider';
import * as Styled from './styles';

export default function Profile() {
	const { user } = useContext(AuthContext) as AuthContextType;
	const firstLetter = user.email?.slice(0, 1);

	return (
		<Styled.Container>
			{firstLetter}
		</Styled.Container>
	);
}
