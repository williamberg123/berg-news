import styled from 'styled-components';

export const Container = styled.div`
`;

export const FirstSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 100px 20px;

	& form {
		width: 400px;
		display: flex;
		flex-direction: column;
		animation: toemergeright 1s ease;

		& > span {
			display: flex;
			margin: 5px 0;
			align-items: center;

			& input {
				margin-left: 10px;
			}
		}
	}

	& input:not([type="date"]) {
		padding: 15px 20px;
		border-radius: 5px;
		border: none;
		margin: 5px 0;
		font-size: 0.8rem;
	}

	& input[type="submit"] {
		width: 100%;
		background-color: ${({ theme }) => theme.colors.pink};
		color: white;
		font-weight: bold;
		text-transform: uppercase;
	}

	@keyframes toemergeright {
		0% {
			opacity: 0%;
			transform: translateX(50px);
		}

		100% {
			opacity: 100%;
			transform: translateX(0px);
		}
	}

	@media (max-width: 800px) {
		justify-content: center;
		padding-bottom: 50px;
	}

	@media (max-width: 450px) {
		& form {
			width: 100%;
		}
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

	@keyframes toemergeleft {
		0% {
			opacity: 0%;
			transform: translateX(-50px);
		}

		100% {
			opacity: 100%;
			transform: translateX(0px);
		}
	}
`;

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.colors.pink};
	font-variant: small-caps;
	font-weight: bold;
	font-size: 1.3rem;
`;

export const NewsTitle = styled.span`
	display: flex;
	margin: 10px 20px;
	text-transform: uppercase;
	font-weight: bold;
`;

export const NewsSection = styled.section<{ hasNews: boolean }>`
	display: flex;
	padding: 20px 20px 100px;

	${({ hasNews }) => hasNews && 'overflow-x: scroll;'}

	& > span {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		font-size: 1.7rem;
		text-transform: lowercase;
		font-variant: small-caps;

		& svg {
			width: 200px;
			height: 200px;
		}
	}

	& > svg {
		margin: 0 auto;
		color: white;
		width: 100px;
		height: 100px;
	}

	@media (max-width: 800px) {
		padding-top: 0;

		& > span {
			& svg {
				width: 100px;
				height: 100px;
			}
		}
	}
`;
