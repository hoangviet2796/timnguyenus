import type { Metadata } from "next";
import Navbar from "./(header)/NavBar/NavBar";
import Footer from "./footer/footer";
import {Roboto} from "next/font/google";
import "./globals.css";

const roboto = Roboto({subsets: ["vietnamese"],weight: [
  '100','400','500'
]})

export const metadata: Metadata = {
  title: "TimNguyenUS",
  description: "TimNguyenUS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${roboto.className} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
