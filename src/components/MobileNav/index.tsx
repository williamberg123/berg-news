import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContextType } from '../../@types/appTypes';
import { MobileNavProps } from '../../@types/mobileNav';
import { AppContext } from '../../contexts/AppProvider';
import * as Styled from './styles';

export default function MobileNav({ toggleMobileMenu, mustBeOpen, isFirstRender }: MobileNavProps) {
	const { page } = useContext(AppContext) as AppContextType;

	return (
		<Styled.Container isFirstRender={isFirstRender} mustBeOpen={ mustBeOpen }>
			<Styled.Ul>
				<Styled.Li>
					<Link onClick={toggleMobileMenu} className={ page == 'home' ? 'page' : '' } to="/">Home</Link>
				</Styled.Li>

				<Styled.Li>
					<Link onClick={toggleMobileMenu} className={ page == 'search' ? 'page' : '' } to="/search">Search</Link>
				</Styled.Li>

				<Styled.Li>
					<Link onClick={toggleMobileMenu} className={ page == 'saved' ? 'page' : '' } to="/saved">Saved</Link>
				</Styled.Li>
			</Styled.Ul>
		</Styled.Container>
	);
}
