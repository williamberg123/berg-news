import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	position: fixed;
	top: 0;
	background-color: ${({ theme }) => theme.colors.darkPurple};
	border-bottom: 1px solid white;
	z-index: 5;

	& > div {
		display: flex;
		align-items: center;
		z-index: 2;

		& > svg {
			width: 30px;
			height: 30px;
			margin-left: 10px;
		}
	}
`;
