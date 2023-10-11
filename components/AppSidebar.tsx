import { ThemeSwitcher } from "./ThemeSwitcher";

const AppSidebar = () => {
	return (
		<div className="flex flex-col w-12 items-center justify-between h-2/4 bg-slate-800 p-2 text-white rounded-2xl">
			<p>b1</p>
			<ThemeSwitcher />
		</div>
	);
};

export default AppSidebar;
