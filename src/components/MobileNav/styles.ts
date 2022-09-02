import styled from 'styled-components';

export const Container = styled.nav`
	width: 100%;
	position: absolute;
	bottom: -1px;
	left: 0;
`;

export const Ul = styled.ul`
	width: 100%;
	height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	list-style: none;
	position: absolute;
	background-color: black;

	& a {
		text-decoration: none;
		color: white;
		text-transform: lowercase;
		font-variant: small-caps;
		font-weight: 500;
		padding: 20px;
		margin-bottom: 50px;
		transition: 0.3s;

		&.page {
			color: ${({ theme }) => theme.colors.pink};
		}

		&:hover {
			color: ${({ theme }) => theme.colors.pink};
		}
	}
`;

export const Li = styled.li`
	margin: 20px 0;
`;
