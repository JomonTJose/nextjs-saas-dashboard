import Sidebar from "./components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "SaaS Dashboard",
  description: "Admin dashboard template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
       <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <ThemeProvider>
        <div className="min-h-screen md:flex">
            <Sidebar />
            <main className="flex-1 p-4 md:p-6 z-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
