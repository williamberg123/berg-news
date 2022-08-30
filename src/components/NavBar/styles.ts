import styled from 'styled-components';

export const Container = styled.nav``;

export const Ul = styled.ul`
	display: flex;
	list-style: none;

	& a {
		text-decoration: none;
		color: white;
		text-transform: lowercase;
		font-variant: small-caps;
		font-weight: 500;
		padding: 10px;
		margin: 0 20px;
		transition: 0.3s;

		&.page {
			color: ${({ theme }) => theme.colors.pink};
		}

		&:hover {
			color: ${({ theme }) => theme.colors.pink};
		}
	}
`;

export const Li = styled.li``;
