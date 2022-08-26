import { Outlet } from 'react-router-dom';
import * as Styled from './styles';

export default function Dashboard() {
	return (
		<Styled.Container>
			<header>header</header>
			<h1>Dashboard</h1>
			<Outlet />
			<footer>rodapé</footer>
		</Styled.Container>
	);
}
