import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;

	@media (max-width: 475px) {
		display: flex;
		flex-basis: 100%;
	}
`;

export const Input = styled.input`
	background-color: white;
	border: 1px solid #e4e6f0;
	border-radius: 33px;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
    color: #7E839A;
    padding: 12px 24px;
`;
