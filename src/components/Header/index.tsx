import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import useMediaQuery from '../../hooks/useMediaQuery';
import Logo from '../Logo';
import MobileNav from '../MobileNav';
import NavBar from '../NavBar';
import Profile from '../Profile';
import * as Styled from './styles';

export default function Header() {
	const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
	const isMobile = useMediaQuery('(max-width: 600px)');

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((s) => !s);
	};

	useEffect(() => {
		if (!isMobile) setIsMobileMenuOpen(false);
	}, [isMobile]);

	return (
		<Styled.Container>
			<Logo />

			{
				!isMobile && <NavBar />
			}
			<div>
				<Profile />

				{
					isMobile && <FiMenu onClick={toggleMobileMenu} />
				}
			</div>

			{
				(isMobile && isMobileMenuOpen) && (
					<MobileNav toggleMobileMenu={toggleMobileMenu} />
				)
			}
		</Styled.Container>
	);
}
