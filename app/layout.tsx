import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from '@auth0/nextjs-auth0/client';

import Navigation from '@/ui/Navigation';
import Footer from '@/ui/Footer';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className} suppressHydrationWarning={true}>
          <Navigation />
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
