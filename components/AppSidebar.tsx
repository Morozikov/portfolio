import { HomeIcon, IdentificationIcon } from "@heroicons/react/20/solid";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";

const AppSidebar = () => {
	return (
		<div className="h-screen fixed top-1/4 left-2">
			<aside className="flex flex-col w-10 items-center justify-between shadow-2xl shadow-indigo-500/50 h-2/4 bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white rounded-xl">
				<div className="flex flex-col gap-2">
					<Link href={"#hero"}>
						<HomeIcon className="w-6 h-6" />
					</Link>
					<Link href={"#about"}>
						<IdentificationIcon className="w-6 h-6" />
					</Link>
				</div>
				<ThemeSwitcher />
			</aside>
		</div>
	);
};

export default AppSidebar;
