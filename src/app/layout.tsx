import { Metadata } from "next";
import { Oswald } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner";

const roboto = Oswald({
  subsets: ["vietnamese"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "TimNguyenUS",
  description: "TimNguyenUS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"en"}>
      <body className={`${roboto.className} antialiased`}>
        {children}
        <Toaster className="toast" />
      </body>
    </html>
  );
}
