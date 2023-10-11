import { Providers } from "@/providers";
import "./globals.css";
import type { Metadata } from "next";
import AppSidebar from "@/components/AppSidebar";
import AppHeader from "@/components/AppHeader";

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
			className="dark scroll-smooth">
			<body>
				<Providers>
					<AppHeader />
					<AppSidebar />
					<main className="h-screen">{children}</main>
				</Providers>
			</body>
		</html>
	);
}
