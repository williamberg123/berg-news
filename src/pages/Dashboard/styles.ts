import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1500px;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.colors.darkPurple};
	color: white;
	position: relative;
`;
