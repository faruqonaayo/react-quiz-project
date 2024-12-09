// src/app/layout.js

import Navigation from "@/app/components/Navigation/Navigation";
import "./globals.css";
import { UserContextProvider } from "./contexts/user-context";

export const metadata = {
  title: "Prog Quiz App",
};

export default function RootLayout({ children }) {
  return (
    <UserContextProvider>
      <html lang="en">
        <body>
          <header>{<Navigation />}</header>
          {children}
          <footer>Footer</footer>
        </body>
      </html>
    </UserContextProvider>
  );
}
