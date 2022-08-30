import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.darkPurple};
	color: white;

	& h1 {
		padding: 20px;
	}

	& p {
		font-size: 1.5rem;
		margin-left: 20px;
	}

	& span {
		color: ${({ theme }) => theme.colors.pink};
	}
`;
