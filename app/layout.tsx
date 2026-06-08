import Navbar from "../components/navbar";
import { ThemeProvider } from "../components/theme-provider";
import { TooltipProvider } from "../components/ui/tooltip";
import { cn } from "../lib/utils";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "../components/magicui/flickering-grid";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Wad-Creative",
  description: "Wad-Creative's Portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <TooltipProvider delayDuration={0}>
            {/* Top Grid */}
            <div className="absolute inset-x-0 top-0 h-25 overflow-hidden z-0 pointer-events-none">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={8}
                gridGap={1}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              {children}
            </div>

            {/* Bottom Grid */}
            <div className="absolute inset-x-0 bottom-0 h-25 overflow-hidden z-0 pointer-events-none">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={8}
                gridGap={1}
                style={{
                  maskImage: "linear-gradient(to top, black, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to top, black, transparent)",
                }}
              />
            </div>

            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
