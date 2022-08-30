import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContextType } from '../../@types/appTypes';
import { AppContext } from '../../contexts/AppProvider';
import * as Styled from './styles';

export default function NavBar() {
	const { page } = useContext(AppContext) as AppContextType;

	return (
		<Styled.Container>
			<Styled.Ul>
				<Styled.Li>
					<Link className={ page == 'home' ? 'page' : '' } to="/">Home</Link>
				</Styled.Li>

				<Styled.Li>
					<Link className={ page == 'search' ? 'page' : '' } to="/search">Search</Link>
				</Styled.Li>

				<Styled.Li>
					<Link className={ page == 'saved' ? 'page' : '' } to="/saved">Saved</Link>
				</Styled.Li>
			</Styled.Ul>
		</Styled.Container>
	);
}
