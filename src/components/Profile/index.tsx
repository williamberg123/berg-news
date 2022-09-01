import { useContext } from 'react';
import { AuthContextType } from '../../@types/authType';
import { AuthContext } from '../../contexts/AuthProvider';
import * as Styled from './styles';

export default function Profile() {
	const { user } = useContext(AuthContext) as AuthContextType;

	return (
		<Styled.Container>
			{user?.email[0]}
		</Styled.Container>
	);
}
