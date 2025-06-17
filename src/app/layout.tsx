import Sidebar from "./components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/app/components/ThemeProvider";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";

export const metadata: Metadata = {
  title: "SaaS Dashboard",
  description: "Admin dashboard template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
       <body className={`bg-white dark:bg-black`}>
        <ThemeProvider enableSystem  attribute="class" defaultTheme="system">
          <ThemeSwitcher />
          <div className="min-h-screen md:flex">
            <Sidebar />
            <main className="flex-1 p-4 md:p-6 z-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
