import { addDoc, collection } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { AuthContextType } from '../../@types/authType';
import { SaveButtonProps } from '../../@types/saveButton';
import { AuthContext } from '../../contexts/AuthProvider';
import { db } from '../../data/Firebase';
import { Container } from './styles';

export default function SaveButton(props: SaveButtonProps) {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ wasSave, setWasSave ] = useState(false);

	const { user } = useContext(AuthContext) as AuthContextType;

	const saveNews = async () => {
		setIsLoading(true);

		const savedNewsCollection = collection(db, 'users', user?.uid, 'savedNews');

		await addDoc(savedNewsCollection, props);

		setIsLoading(false);
		setWasSave(true);
	};

	return (
		<Container onClick={saveNews}>
			{
				(!isLoading && !wasSave) && 'Salvar'
			}

			{
				isLoading && <RotatingLines width="15" strokeColor="black" strokeWidth="2" />
			}

			{
				wasSave && 'Salvo'
			}
		</Container>
	);
}
