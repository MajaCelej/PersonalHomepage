import myPhoto from "../../../../images/myPhoto.jpg";
import { Wrapper, StyledImage, FirstText, SecondText, ThirdText, StyledHeader } from "./styled";

export const MainInformation = () => {
	return (
		<Wrapper>
			<StyledImage src={myPhoto} alt="myPhoto" />
			<StyledHeader>
				<FirstText>This is</FirstText>
				<SecondText>Maja Celej</SecondText>
				<ThirdText>I'm new to the IT world, but found my passion in coding.</ThirdText>
			</StyledHeader>
		</Wrapper>
	);
};
