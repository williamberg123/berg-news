import { FormType } from '../../@types/form';
import * as Styled from './styles';

export default function Form({ children, submitFunc }: FormType) {
	return (
		<Styled.Container onSubmit={submitFunc}>
			{ children }
		</Styled.Container>
	);
}
