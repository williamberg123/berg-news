import Logo from '../Logo';
import NavBar from '../NavBar';
import Profile from '../Profile';
import * as Styled from './styles';

export default function Header() {
	return (
		<Styled.Container>
			<Logo />
			<NavBar />
			<Profile />
		</Styled.Container>
	);
}
