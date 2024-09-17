import type { Metadata } from "next";
import "./globals.css";

import NavBar from "./components/navbar/NavBar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

import { Rubik } from 'next/font/google';
import LoginModal from "./components/modals/LoginModal";

const rubik = Rubik({
  weight: ['300', '400'], // You can specify the weights you want (e.g., 400 for normal, 700 for bold)
  subsets: ['latin'], // Choose subsets depending on the characters you need
});

export const metadata: Metadata = {
  title: "bahaykubo",
  description: "An Airbnb Clone inspired by the Philippines",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <NavBar/>
        </ClientOnly>
        {children}
        </body>
    </html>
  );
}
