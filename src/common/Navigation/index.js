import Search from "./Search";
import { List, Item, NavLink, PageTitle } from "./styled";

export default () => {
	return (
		<nav>
			<List>
				<PageTitle>Movies Browser</PageTitle>
				<Item>
					<NavLink>MOVIES</NavLink>
				</Item>
				<Item>
					<NavLink>PEOPLE</NavLink>
				</Item>
                <Search />
			</List>
		</nav>
	);
};
