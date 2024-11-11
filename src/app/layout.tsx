import { Metadata } from "next";
import {Roboto} from "next/font/google";
import "@/app/globals.css";

const roboto = Roboto({subsets: ["vietnamese"],weight: [
  '100','400','500'
]})

export const metadata: Metadata = {
  title: "TimNguyenUS",
  description: "TimNguyenUS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  )
}
