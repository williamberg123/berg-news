import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as Styled from './styles';

export default function Dashboard() {
	return (
		<Styled.Container>
			<Header />
			<Outlet />
			<Footer />
		</Styled.Container>
	);
}
