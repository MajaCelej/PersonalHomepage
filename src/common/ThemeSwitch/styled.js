import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const Button = styled.button`
	cursor: pointer;
	background: none;
	border: none;
	color: inherit;
	display: flex;
	align-items: center;
	outline-offset: 8px;
`;

export const Text = styled.span`
	font-size: 12px;
	text-transform: uppercase;
	font-weight: 700;
	padding-right: 12px;
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
