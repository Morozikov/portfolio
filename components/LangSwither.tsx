"use client";
import { Button } from "@nextui-org/react";

export const LangSwither = () => {
	return (
		<div className="flex flex-row gap-1">
			<Button
				isIconOnly
				variant="bordered"
				color="warning"
				className="active"
				size="sm">
				<b>EN</b>
			</Button>
			<Button
				isIconOnly
				variant="bordered"
				color="warning"
				size="sm">
				<b>RU</b>
			</Button>
		</div>
	);
};
