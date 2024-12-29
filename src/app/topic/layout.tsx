import Navbar from "../(header)/NavBar/NavBar";
import Footer from "../footer/footer";
import { Open_Sans } from "next/font/google";
const roboto = Open_Sans({
  subsets: ["vietnamese"],
  weight: ["300", "400", "500", "700"],
});
export default function Topic ({
    children, 
}: Readonly <{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${roboto.className} antialiased`}>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
    
