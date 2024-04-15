import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const Button = styled.buttton`
	cursor: pointer;
	background: none;
	color: inherit;
	outline-offset: 8px;
	display: flex;
	align-items: center;
`;

export const Text = styled.span`
	font-size: 12px;
	text-transform: uppercase;
	font-weight: 700;
`;

export const Box = styled.span`
	border: 1px solid;
	padding: 3px;
	border-radius: 12px;
	width: 48px;
	display: flex;
`;

export const IconWrapper = styled.span`
	background: currentColor;
	padding: 3px;
	border-radius: 50%;
	display: flex;
`;
