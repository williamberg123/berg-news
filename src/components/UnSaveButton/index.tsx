import { deleteDoc, doc } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import { AuthContextType } from '../../@types/authType';
import { UnsaveButtonProps } from '../../@types/unsaveButton';
import { AuthContext } from '../../contexts/AuthProvider';
import { db } from '../../data/Firebase';

import { Container } from './styles';

export default function UnSaveButton(props: UnsaveButtonProps) {
	const [ isLoading, setIsLoading ] = useState(false);
	const { docId, removeOneNews } = props;

	const { user } = useContext(AuthContext) as AuthContextType;

	const unsaveNews = async () => {
		setIsLoading(true);

		const savedNewsCollection = doc(db, 'users', user.uid, 'savedNews', docId);

		await deleteDoc(savedNewsCollection);

		setIsLoading(false);
		removeOneNews(docId || '');
	};

	return (
		<Container onClick={unsaveNews}>
			{
				!isLoading && 'Remover'
			}

			{
				isLoading && <RotatingLines width="15" strokeColor="black" strokeWidth="2" />
			}
		</Container>
	);
}
