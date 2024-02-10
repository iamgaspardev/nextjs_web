
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/navbar";

export const metadata = {
  title: "Hyperhire",
  description: "Practical Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      
      <body >
      <NavBar/>
      {children}
      </body>
    
    </html>
  );
}
