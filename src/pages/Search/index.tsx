import { useContext, useEffect } from 'react';
import { AppContextType } from '../../@types/appTypes';
import Form from '../../components/Form';
import { AppContext } from '../../contexts/AppProvider';
import * as Styled from './styles';

export default function Search() {
	const { setActuallyPage } = useContext(AppContext) as AppContextType;

	useEffect(() => {
		setActuallyPage('search');
	}, []);

	return (
		<Styled.Container>
			<Styled.FirstSection>
				<Styled.Title>
					busque por uma <span className="white-span">palavra-chave</span>
				</Styled.Title>

				<Form submitFunc={() => console.log('aaa')}>
					<Styled.Label>
						palavra-chave
						<input type="text" placeholder="digite a palavra-chave" />
					</Styled.Label>

					<input type="submit" value="Buscar" />
				</Form>
			</Styled.FirstSection>

			<Styled.NewsSection>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</Styled.NewsSection>
		</Styled.Container>
	);
}
