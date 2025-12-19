import "../globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/core/sidebar";
import { TopBar } from "@/components/core";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MathMaster",
  description: "Interactive Learning Module",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SidebarProvider>
            <div className="flex min-h-screen w-full">
            <AppSidebar />
            <main className="flex-1 rounded-xl bg-secondary-foreground dark:bg-secondary">
              <TopBar />
              <div className="md:ml-12 bg-secondary-foreground dark:bg-secondary mt-[80px]">
              {children}
              </div>
            </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
