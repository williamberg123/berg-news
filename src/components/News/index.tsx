import { NewsType } from '../../@types/news';
import * as Styled from './styles';

export default function News(props: NewsType) {
	const { title, description, url, urlToImage, author, publishedAt } = props;

	const publisedDate = new Date(publishedAt).toLocaleDateString('pt-BR', {
		formatMatcher: 'best fit',
	});
	const publisedTime = new Date(publishedAt).toLocaleTimeString('pt-BR', {
		timeStyle: 'short',
	});

	return (
		<Styled.Container>
			<Styled.NewsTitle>{title}</Styled.NewsTitle>

			<Styled.NewsInfo>
				<Styled.NewsAuthor>
					por {author}
				</Styled.NewsAuthor>

				<Styled.NewsDate>
					{`${publisedDate} às ${publisedTime}`}
				</Styled.NewsDate>
			</Styled.NewsInfo>

			<Styled.NewsDescription>
				{description}
			</Styled.NewsDescription>

			<Styled.NewsLink href={url} target="_blank">
				<Styled.HoverElement>
					<span>Ver notícia</span>
				</Styled.HoverElement>
				<Styled.NewsImage src={urlToImage} alt={title} />
			</Styled.NewsLink>

		</Styled.Container>
	);
}
