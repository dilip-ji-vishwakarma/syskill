import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SidebarStateProvider } from "@/components/core";
import LayoutClient from "@/components/core/sidebar-template/layout-client";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MathMaster",
  description: "Interactive Learning Module",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SidebarStateProvider initialCollapsed={false}>
          <LayoutClient>
            {children}
          </LayoutClient>
        </SidebarStateProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
