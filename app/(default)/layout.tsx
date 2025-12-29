import "../globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/core/sidebar";
import { Box, TopBar } from "@/components/core";

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
            <Box className="flex min-h-screen w-full">
            <AppSidebar />
            <main className="flex-1 rounded-xl bg-secondary-foreground dark:bg-secondary">
              <TopBar />
              <Box className="md:ml-5 bg-secondary-foreground dark:bg-secondary md:mt-[80px] md:mr-5 my-5">
              {children}
              </Box>
            </main>
            </Box>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
