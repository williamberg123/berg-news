import { DocumentData } from 'firebase/firestore';
import UnSaveButton from '../UnSaveButton';
import * as Styled from './styles';

export default function SavedNews(props: DocumentData) {
	const { title, description, url, urlToImage, author, publishedAt, removeOneNews, docId } = props;

	const publishedDate = new Date(publishedAt).toLocaleDateString('pt-BR', {
		formatMatcher: 'best fit',
	});
	const publishedTime = new Date(publishedAt).toLocaleTimeString('pt-BR', {
		timeStyle: 'short',
	});

	const today = new Date().toLocaleDateString();

	const setImageUrl = (e: any) => {
		e.target.setAttribute('src', 'https://s1.trrsf.com/fe/zaz-mod-t360-icons/svg/logos/terra-16x9-borda.png');
	};

	return (
		<Styled.Container>
			<Styled.NewsTitle>{title}</Styled.NewsTitle>

			<Styled.NewsInfo>
				<Styled.NewsAuthor>
					por {author}
				</Styled.NewsAuthor>

				<Styled.NewsDate>
					{`${publishedDate === today ? 'Hoje' : publishedDate} às ${publishedTime}`}
				</Styled.NewsDate>
			</Styled.NewsInfo>

			<Styled.NewsDescription>
				{description}
			</Styled.NewsDescription>

			<Styled.NewsLink href={url} target="_blank">
				<Styled.HoverElement>
					<span>Ver notícia</span>
				</Styled.HoverElement>
				<Styled.NewsImage onError={setImageUrl} src={urlToImage} alt={title} />
			</Styled.NewsLink>

			<UnSaveButton removeOneNews={removeOneNews} {...props} docId={docId} />
		</Styled.Container>
	);
}
