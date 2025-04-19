'use client';
import type { Metadata } from "next";
import {Navigation} from "./components/navigation"
import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (saved) {
      setTheme(saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <html lang="en" data-bs-theme={theme}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        {children}
      </body>
    </html>
  );
}
