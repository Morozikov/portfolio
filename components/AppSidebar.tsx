import { ThemeSwitcher } from "./ThemeSwitcher";

const AppSidebar = () => {
	return (
		<div className="flex flex-col w-10 items-center justify-between shadow-2xl shadow-indigo-500/50 h-2/4 bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white rounded-xl">
			<p>b1</p>
			<ThemeSwitcher />
		</div>
	);
};

export default AppSidebar;
