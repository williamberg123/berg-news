import { useContext, useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { GiNewspaper } from 'react-icons/gi';
import { RotatingLines } from 'react-loader-spinner';

import { AppContextType } from '../../@types/appTypes';
import { NewsType } from '../../@types/news';
import Form from '../../components/Form';
import News from '../../components/News';
import RenderIf from '../../components/RenderIf';
import { AppContext } from '../../contexts/AppProvider';
import useMediaQuery from '../../hooks/useMediaQuery';
import { getNews } from '../../services/api';
import * as Styled from './styles';

export default function Search() {
	const [news, setNews] = useState<NewsType[] | null>([]);
	const [isLoading, setIsLoading] = useState(false);
	const { setActuallyPage } = useContext(AppContext) as AppContextType;
	const { handleSubmit, register } = useForm();

	const isLessThan800 = useMediaQuery('(max-width: 800px)');

	const onSubmit = async (data: FieldValues) => {
		setIsLoading(true);
		setNews(null);

		try {
			const theNews = await getNews(data);
			setNews(theNews);
		} catch (error) {
			setNews([]);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		setActuallyPage('search');
	}, []);

	return (
		<Styled.Container>
			<Styled.FirstSection>
				<RenderIf isTrue={!isLessThan800}>
					<Styled.Title>
						busque por uma <span className="white-span">palavra-chave</span>
					</Styled.Title>
				</RenderIf>

				<Form submitFunc={handleSubmit(onSubmit)}>
					<Styled.Label>
						palavra-chave
						<input {...register('keyword', { required: true })} type="text" placeholder="digite a palavra-chave" />
					</Styled.Label>

					<span>
						Entre o dia<Styled.DateInput {...register('initial_date', { required: true })} type="date" />
					</span>

					<span>
						e o dia <Styled.DateInput {...register('final_date', { required: true })} type="date" />
					</span>

					<input type="submit" value="Buscar" />
				</Form>
			</Styled.FirstSection>

			<RenderIf isTrue={ !!news?.length }>
				<Styled.NewsTitle>Notícias</Styled.NewsTitle>
			</RenderIf>

			<Styled.NewsSection hasNews={!!news?.length}>
				<RenderIf isTrue={!!news?.length}>
					{
						news?.map((oneNews: NewsType, index: number) => <News key={`news-${index}`} {...oneNews} />)
					}
				</RenderIf>

				<RenderIf isTrue={!news?.length && !isLoading}>
					<span>
						<GiNewspaper />
						<p>Nenhuma notícia</p>
					</span>
				</RenderIf>

				<RenderIf isTrue={isLoading}>
					<RotatingLines />
				</RenderIf>
			</Styled.NewsSection>
		</Styled.Container>
	);
}
