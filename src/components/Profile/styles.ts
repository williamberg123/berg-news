import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.pink};
	color: white;
	font-weight: bold;
	font-variant: small-caps;

	@media (max-width: 600px) {
		width: 35px;
		height: 35px;
	}
`;
