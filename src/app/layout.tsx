import { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/app/globals.css";

const roboto = Open_Sans({
  subsets: ["vietnamese"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "TimNguyenUS",
  description: "TimNguyenUS",
};

export default function RootLayout({
  children,
  lng,
}: {
  children: React.ReactNode;
  lng: never;
}) {
  return (
    <html lang={lng}>
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
