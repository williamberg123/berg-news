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
`;
