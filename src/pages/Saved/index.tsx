import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { GiNewspaper } from 'react-icons/gi';
import { RotatingLines } from 'react-loader-spinner';

import { AppContextType } from '../../@types/appTypes';
import { AuthContextType } from '../../@types/authType';
import RenderIf from '../../components/RenderIf';
import SavedNews from '../../components/SavedNews';
import { AppContext } from '../../contexts/AppProvider';
import { AuthContext } from '../../contexts/AuthProvider';
import { db } from '../../data/Firebase';
import * as Styled from './styles';

export default function Saved() {
	const [savedNews, setSavedNews] = useState<DocumentData[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const { setActuallyPage } = useContext(AppContext) as AppContextType;
	const { user } = useContext(AuthContext) as AuthContextType;

	const getSavedNews = async () => {
		setIsLoading(true);
		const newsCollection = collection(db, 'users', user.uid, 'savedNews');
		const newsData: DocumentData[] = [];

		const news = await getDocs(newsCollection);
		news.forEach((newsInfo) => {
			newsData.push({
				docId: newsInfo.id,
				...newsInfo.data(),
			});
		});

		setSavedNews(newsData);
		setIsLoading(false);
	};

	const removeOneNews = (docId: string) => {
		const updatedNews = savedNews.filter((news) => news.docId !== docId);
		setSavedNews(updatedNews);
	};

	useEffect(() => {
		setActuallyPage('saved');
	}, []);

	useEffect(() => {
		getSavedNews();
	}, []);

	return (
		<Styled.Container>
			<Styled.FirstSection>
				<Styled.Title>
					confira suas <span className="white-span">notícias salvas</span>
				</Styled.Title>
			</Styled.FirstSection>

			<RenderIf isTrue={isLoading}>
				<Styled.LoadingContainer>
					<RotatingLines strokeColor="white" width="50" strokeWidth="2" />
				</Styled.LoadingContainer>
			</RenderIf>

			<RenderIf isTrue={!isLoading && !savedNews.length}>
				<span>
					<GiNewspaper />
					<p>Não há notícias salvas</p>
				</span>
			</RenderIf>

			<Styled.SavedNewsSection>
				{
					savedNews.map((news, index) => <SavedNews removeOneNews={removeOneNews} key={`news-${index}`} {...news} />)
				}
			</Styled.SavedNewsSection>
		</Styled.Container>
	);
}
