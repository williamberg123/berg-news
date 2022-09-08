import { useEffect, useRef, useState } from 'react';
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
	const isFirstRender = useRef(true);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((s) => !s);
		isFirstRender.current = false;
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

			<MobileNav isFirstRender={ isFirstRender.current } mustBeOpen={ isMobile && isMobileMenuOpen } toggleMobileMenu={toggleMobileMenu} />

		</Styled.Container>
	);
}
