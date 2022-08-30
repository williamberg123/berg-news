import { useContext, useEffect } from 'react';
import { AppContextType } from '../../@types/appTypes';
import { AppContext } from '../../contexts/AppProvider';
import * as Styled from './styles';

export default function Saved() {
	const { setActuallyPage } = useContext(AppContext) as AppContextType;

	useEffect(() => {
		setActuallyPage('saved');
	}, []);

	return (
		<Styled.Container>
			<Styled.FirstSection>
				<span>
					busque por uma <span className="white-span">palavra-chave</span>
				</span>
			</Styled.FirstSection>
		</Styled.Container>
	);
}
