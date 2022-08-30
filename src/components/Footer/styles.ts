import styled from 'styled-components';

export const Footer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 30px;
`;

export const Span = styled.span`
	color: white;

	& a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.pink};
		margin-left: 5px;

		&:hover {
			text-decoration: underline;
		}
	}
`;
