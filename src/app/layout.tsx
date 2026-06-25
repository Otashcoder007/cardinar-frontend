import 'dotenv/config';
import './globals.css';
import QueryProvider from "@/providers/query-provider";
import Navbar from "@/components/layout/Navbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body>
        <QueryProvider>
            <Header/>
            <Navbar/>
            {children}
            <Footer/>
        </QueryProvider>
        </body>
        </html>
    );
}