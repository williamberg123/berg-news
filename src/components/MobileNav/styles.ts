import styled, { css } from 'styled-components';

export const Container = styled.nav<{ mustBeOpen: boolean, isFirstRender: boolean }>`
	width: 100%;
	position: absolute;
	bottom: -1px;
	left: 100%;

	${({ mustBeOpen, isFirstRender }) => {
		return mustBeOpen
		? css`
			animation: toemerge 0.3s ease;
			left: 0;
		`
		: (
			!isFirstRender && css`
			animation: toexit 0.3s ease;
			left: 100%;
		`);
	}}

	@keyframes toemerge {
		0% {
			left: 100%;
		}

		100% {
			left: 0;
		}
	}

	@keyframes toexit {
		0% {
			left: 0;
		}

		100% {
			left: 100%;
		}
	}
`;

export const Ul = styled.ul`
	width: 100%;
	height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	list-style: none;
	position: absolute;
	background-color: ${({ theme }) => theme.colors.darkPurple};
	z-index: 1;

	& a {
		text-decoration: none;
		color: white;
		text-transform: lowercase;
		font-variant: small-caps;
		font-weight: 500;
		padding: 20px;
		margin-bottom: 50px;
		transition: 0.3s;

		&.page {
			color: ${({ theme }) => theme.colors.pink};
		}

		&:hover {
			color: ${({ theme }) => theme.colors.pink};
		}
	}
`;

export const Li = styled.li`
	margin: 20px 0;
`;
