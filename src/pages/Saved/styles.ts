import styled from 'styled-components';

export const Container = styled.div`
	& > svg {
		margin: auto;
	}

	& > span {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-transform: lowercase;
		font-variant: small-caps;
		font-size: 1.3rem;

		& > svg {
			width: 100px;
			height: 100px;
		}
	}
`;

export const LoadingContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const FirstSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 100px 20px;

	@media (max-width: 700px) {
		padding-bottom: 20px;
	}
`;

export const Title = styled.span`
	color: ${({ theme }) => theme.colors.pink};
	text-transform: lowercase;
	font-variant: small-caps;
	font-weight: bold;
	font-size: 2.5rem;
	animation: toemergeleft 1s ease;

	& .white-span {
		color: white;
	}

	@media (max-width: 700px) {
		font-size: 1.5rem;
	}
`;

export const SavedNewsSection = styled.section`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	grid-gap: 20px;
	padding: 20px 20px 100px;

	@media (max-width: 620px) {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 10px;
	}
`;
