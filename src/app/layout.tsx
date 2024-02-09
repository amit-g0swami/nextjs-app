import "./globals.css";
import Providers from "@/providers/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "@/templates/error-boundary";
import { HeaderSection } from "@/features/home/components/header/HeaderSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shippivot",
  description: "Your Gateway to Global Logistics Excellence",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" />
        <ErrorBoundary>
          <Providers>
            <HeaderSection />
            {children}
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
