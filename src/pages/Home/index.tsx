import { useContext, useEffect } from 'react';
import { AppContextType } from '../../@types/appTypes';
import { AppContext } from '../../contexts/AppProvider';
import * as Styled from './styles';

export default function Home() {
	const { setActuallyPage } = useContext(AppContext) as AppContextType;

	useEffect(() => {
		setActuallyPage('home');
	}, []);

	return (
		<Styled.Container>
			<Styled.Section>
				<span>
					pesquise por
					<span className="white-span"> palavras-chave </span>
					para encontrar as mais recentes notícias sobre o assunto
				</span>
			</Styled.Section>

			<Styled.Section>
				<span>
					salve as notícias mais
					<span className="white-span"> interessantes </span>
					para ver depois
				</span>
			</Styled.Section>
		</Styled.Container>
	);
}
