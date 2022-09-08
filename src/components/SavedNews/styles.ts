import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: fit-content;
	padding: 10px;
	background-color: white;
	border-radius: 10px;

	@media (max-width: 620px) {
		padding: 7px;
	}
`;

export const NewsTitle = styled.span`
	display: flex;
	color: ${({ theme }) => theme.colors.pink};
	font-weight: bold;
	margin-bottom: 5px;

	@media (max-width: 800px) {
		font-size: 0.8rem;
	}

	@media (max-width: 500px) {
		font-size: 0.6rem;
	}
`;

export const NewsDescription = styled.p`
	color: ${({ theme }) => theme.colors.darkPurple};
	font-size: 0.7rem;
	margin: 5px 0;

	@media (max-width: 800px) {
		font-size: 0.6rem;
	}

	@media (max-width: 550px) {
		display: none;
	}
`;

export const NewsInfo = styled.span`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: gray;
	font-size: 0.75rem;
	padding: 5px 0;

	@media (max-width: 800px) {
		font-size: 0.7rem;
		padding: 0;
	}

	@media (max-width: 500px) {
		font-size: 0.6rem;
	}
`;

export const NewsAuthor = styled.span`
	padding: 5px 0;
`;
export const NewsDate = styled.span``;

export const NewsLink = styled.a`
	display: flex;
	height: fit-content;
	position: relative;
	overflow-y: hidden;

	&:hover {
		& > div {
			display: flex;
		}
	}
`;

export const HoverElement = styled.div`
	display: none;
	align-items: center;
	justify-content: center;
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	color: white;
	transition: 0.3s;

	& > span {
		padding: 10px;
		border: 1px solid white;
		border-radius: 5px;
	}
`;

export const NewsImage = styled.img`
	width: 100%;
`;
