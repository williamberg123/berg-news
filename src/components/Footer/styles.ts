import styled from 'styled-components';

export const Footer = styled.footer`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 30px;
	position: absolute;
	bottom: 0;
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
