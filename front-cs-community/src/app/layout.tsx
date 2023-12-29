import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import NavBar from "./suggestion/components/navbar";
import Footer from "./suggestion/components/footer";
import GoWhatsappBtn from "./suggestion/components/goWhatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suggest module",
  description: "Powered by chillo.tech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
        <GoWhatsappBtn />
      </body>
    </html>
  );
}
