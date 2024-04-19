import styled from "styled-components";

export const List = styled.ul`
	background: black;
	margin-top: 0px;
	padding-bottom: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	list-style: none;

	@media (max-width: 475px) {
		flex-wrap: wrap;
	}
`;

export const NavLink = styled.nav`
	color: white;
	text-decoration: none;
	padding: 8px 24px;
	font-size: 14px;
	font-weight: 600;
	line-height: 21px;

	&:hover {
		border: 1px solid #ffffff;
		border-radius: 24px;
	}

	@media (max-width: 475px) {
		font-size: 12px;
		font-weight: 600;
	}
`;

export const Item = styled.li`
	margin: 23px 16px;
`;

export const PageTitle = styled.span`
	font-size: 24px;
	font-weight: 500;
	line-height: 40px;
	color: white;

	@media (max-width: 475px) {
		font-size: 13px;
		font-weight: 500;
	}
`;
