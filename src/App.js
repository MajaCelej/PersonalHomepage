import "./App.css";
import { Wrapper } from "./styled";
import { ThemeSwitch } from "./common/ThemeSwitch";
import { MainInformation } from "./features/personalHomepage/PersonalHomepage/MainInformation";

function App() {
	return (
		<Wrapper>
			<ThemeSwitch />
			<MainInformation />
		</Wrapper>
	);
}

export default App;
