import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import * as Styled from './styles';

export default function Profile() {
	const { user } = useContext(AuthContext);

	return (
		<Styled.Container>
			{user.email[0]}
		</Styled.Container>
	);
}
