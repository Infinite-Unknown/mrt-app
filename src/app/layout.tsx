import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import StatusBar from "@/components/StatusBar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyMRT - Travel with MRT",
  description: "MyMRT mobile web app redesign",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="mobile-container flex flex-col min-h-dvh">
          <StatusBar />
          <main className="flex-1 overflow-y-auto pb-16 hide-scrollbar">
            {children}
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
