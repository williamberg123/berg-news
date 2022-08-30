import styled from 'styled-components';

export const Container = styled.div`
	& section:first-child > span {
		text-align: right;
		max-width: 1000px;
		margin-left: auto;
		animation: toemergeright 1s ease;
	}

	& section:nth-child(2) > span {
		animation: toemergeleft 1s ease;
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
export const Section = styled.section`
	display: flex;
	align-items: center;
	height: 100vh;
	padding: 0 20px;
	border-bottom: 1px solid white;

	& span {
		color: ${({ theme }) => theme.colors.pink};
		text-transform: uppercase;
		font-variant: small-caps;
		font-weight: bold;
		font-size: 2rem;
		margin-bottom: 100px;

		& span.white-span {
			color: white;
		}
	}
`;
