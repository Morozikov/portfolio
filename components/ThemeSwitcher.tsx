"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div>
			{theme === "dark" ? (
				<SunIcon
					className="w-6 h-6 text-yellow-500"
					role="button"
					onClick={() => setTheme("light")}
				/>
			) : (
				<MoonIcon
					className="w-6 h-6"
					role="button"
					onClick={() => setTheme("dark")}
				/>
			)}
		</div>
	);
}
