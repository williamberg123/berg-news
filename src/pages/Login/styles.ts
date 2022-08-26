import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1500px;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.colors.black};
	display: flex;
	flex-direction: column;

	& > div {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 50px;
		align-items: center;
	}

	& form {
		width: 400px;
		display: flex;
		flex-direction: column;
		padding: 30px 20px;
		background-color: ${({ theme }) => theme.colors.pink};
		border-radius: 10px;
		color: white;
		font-weight: normal;

		& > span {
			text-align: center;
			font-size: 1.8rem;
			margin-bottom: 20px;
		}

		& > a {
			font-size: 0.7rem;
			color: white;
			text-decoration: none;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	@media (max-width: 1100px) {
		& > div {
			flex-direction: column;
			padding: 20px;
		}

	}

	@media (max-width: 500px) {
		& form {
			width: 100%;
			padding: 20px;
		}

	}
`;

export const Header = styled.header`
	width: 100%;
	padding: 30px;

	@media (max-width: 700px) {
		padding: 20px;
	}
`;

export const Title = styled.span`
	font-size: 2.5rem;
	color: ${({ theme }) => theme.colors.white};
	width: 600px;
	font-weight: lighter;
	text-transform: uppercase;
	text-align: left;

	@media (max-width: 1100px) {
		font-size: 2rem;
		margin-bottom: 20px;
		width: auto;
		text-align: center;
	}

	@media (max-width: 700px) {
		font-size: 1.3rem;
	}
`;

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;

export const Input = styled.input`
	padding: 15px 20px;
	margin-top: 10px;
	border: none;
	border-radius: 5px;

	&[type="submit"] {
		color: ${({ theme }) => theme.colors.pink};
		font-weight: bold;
		cursor: pointer;
	}
`;
