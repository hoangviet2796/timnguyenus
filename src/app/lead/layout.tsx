import Navbar from "@/app/(header)/NavBar/NavBar";
import Footer from "@/app/footer/footer";

export default function LeadLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
