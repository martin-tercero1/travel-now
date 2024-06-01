"use client";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { createContext, useState } from "react";

export const ThemeContext = createContext({ theme: "dark" });

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <html lang="en" className={theme}>
        <head>
          <title>Travel Now</title>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Your solution to discover the world"
          />
        </head>
        <body className={`${montserrat.className} dark:bg-gray-900`}>
          {children}
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
