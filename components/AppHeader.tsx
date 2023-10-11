import { LangSwither } from "./LangSwither";

const AppHeader = () => {
	return (
		<header className="fixed top-0 left-0 w-full p-2">
			<div className="flex justify-between flex-row gap-2">
				<h1>Header</h1>
				<LangSwither />
			</div>
		</header>
	);
};

export default AppHeader;
