import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import { AppContextType } from '../../@types/appTypes';
import Form from '../../components/Form';
import Logo from '../../components/Logo';

import { AppContext } from '../../contexts/AppProvider';
import { loginUser } from '../../services/firebaseActions/loginUser';
import { registerNewUser } from '../../services/firebaseActions/newUser';

import * as Styled from './styles';

export default function Login() {
	const [ isLogin, setIsLogin ] = useState(true);
	const { setActuallyPage } = useContext(AppContext) as AppContextType;
	const { handleSubmit, register } = useForm();

	setActuallyPage(null);

	return (
		<Styled.Container>
			<Styled.Header>
				<Logo />
			</Styled.Header>
			<div>
				<Styled.Title>Venha fazer parte dessa rede de acesso à informação</Styled.Title>

				<Form submitFunc={handleSubmit(isLogin ? loginUser : registerNewUser)}>
					<span>
						{
							isLogin ? 'Login' : 'Criar conta'
						}
					</span>

					<Styled.Label>
						Email
						<Styled.Input { ...register('user_email', { required: true }) } type="email" placeholder="digite seu email" />
					</Styled.Label>

					<Styled.Label>
						Password
						<Styled.Input { ...register('user_password', { required: true }) } type="password" placeholder="digite sua senha" />
					</Styled.Label>

					<a
						onClick={(e) => {
							e.preventDefault();
							setIsLogin((s) => !s);
						}}
						href="#"
					>
						{
							isLogin ? 'não possui uma conta? registre-se aqui' : 'já possui uma conta? entre aqui'
						}
					</a>

					<Styled.Input type="submit" value={ isLogin ? 'Entrar' : 'Criar conta' } />
				</Form>
			</div>
		</Styled.Container>
	);
}
