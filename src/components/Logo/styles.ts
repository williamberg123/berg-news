import styled from 'styled-components';

export const Span = styled.span`
	color: white;
	font-weight: bold;
	font-variant: small-caps;
	text-transform: uppercase;

	& .pink {
		color: ${({ theme }) => theme.colors.pink};
	}
`;
