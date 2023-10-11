import { Providers } from "@/providers";
import "./globals.css";
import type { Metadata } from "next";
import { AppSidebar } from "@/components/AppSidebar";
import { AppHeader } from "@/components/AppHeader";

export const metadata: Metadata = {
	title: "Morozikov Vitalii",
	description: "Portfolio of Morozikov Vitalii",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className="dark">
			<body className="container">
				<Providers>
					<div className="flex flex-row">
						<AppSidebar />
						<div className="flex flex-col w-full p-2">
							<AppHeader />
							<main>{children}</main>
						</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}
