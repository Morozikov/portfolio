import { LangSwither } from "./LangSwither";

const AppHeader = () => {
	return (
		<header className="flex flex-row justify-between">
			<h1>Header</h1>
			<LangSwither />
		</header>
	);
};

export default AppHeader;
