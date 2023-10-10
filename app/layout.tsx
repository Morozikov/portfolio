import { Providers } from "@/providers";
import "./globals.css";
import type { Metadata } from "next";
import { AppSidebar } from "@/components/AppSidebar";

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
    <html lang="en" className="dark">
      <body>
        <Providers>
          <div className="flex flex-row">
            <AppSidebar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
