import styled from 'styled-components';

export const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 25px;
	width: 80px;
	border: 1px solid ${({ theme }) => theme.colors.darkPurple};
	border-radius: 5px;
	margin: 10px 0 0 auto;
	font-size: 0.9rem;
	font-variant: small-caps;
	text-transform: lowercase;
	font-weight: 500;
`;
