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

	& > div {
		display: flex;
		align-items: center;

		& > svg {
			width: 30px;
			height: 30px;
			margin-left: 10px;
		}
	}
`;
