import { UseFormRegisterReturn } from 'react-hook-form';
import { formatDate } from '../../utils/formatDate';
import * as Styled from './styles';

export default function DateSelection({ formRegister }: { formRegister: UseFormRegisterReturn }) {
	const today = formatDate();
	const lastWeek = formatDate(7);
	const lastMonth = formatDate(30);

	return (
		<Styled.Container {...formRegister}>
			<option value="invalid">Escolha uma data</option>
			<option value={today}>Hoje</option>
			<option value={lastWeek}>Esta semana</option>
			<option value={lastMonth}>Este mês</option>
		</Styled.Container>
	);
}
