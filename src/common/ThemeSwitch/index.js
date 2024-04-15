import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";
import { Wrapper, Button, Text, Box, IconWrapper } from "./styled.js";

export const ThemeSwitch = () => {
	const isDarkTheme = useSelector(selectIsDarkTheme);
	const dispatch = useDispatch();

	return (
		<Wrapper>
			<Button onClick={() => dispatch(toggleTheme())}>
				<Text>Dark Mode {isDarkTheme ? "on" : "off"} </Text>
				<Box>
					<IconWrapper moveToRight={isDarkTheme}>
						<Icon />
					</IconWrapper>
				</Box>
			</Button>
		</Wrapper>
	);
};
