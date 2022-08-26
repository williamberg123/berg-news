import Form from '../../components/Form';
import Logo from '../../components/Logo';
import * as Styled from './styles';

export default function Login() {
	return (
		<Styled.Container>
			<Styled.Header>
				<Logo />
			</Styled.Header>
			<div>
				<Styled.Title>Venha fazer parte dessa rede de acesso à informação</Styled.Title>
				<Form submitFunc={() => console.log('Olá')}>
					<span>Login</span>
					<Styled.Label>
						Email
						<Styled.Input type="email" placeholder="digite seu email" />
					</Styled.Label>

					<Styled.Label>
						Password
						<Styled.Input type="password" placeholder="digite sua senha" />
					</Styled.Label>

					<a href="#">não possui uma conta? registre-se aqui</a>

					<Styled.Input type="submit" value="Entrar" />
				</Form>
			</div>
		</Styled.Container>
	);
}
