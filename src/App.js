import "./App.css";
import { Wrapper } from "./styled";
import { ThemeSwitch } from "./common/ThemeSwitch";
import { MainInformation } from "./features/personalHomepage/PersonalHomepage/MainInformation";
import Navigation from "./common/Navigation";

function App() {
	return (
		<Wrapper>
			<Navigation />
			<ThemeSwitch />
			<MainInformation />
		</Wrapper>
	);
}

export default App;
