
import Footer from "@/components/ui/footer/Footer";
import { Header } from "@/components/ui/header/Header";
import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  viewport: "width=device-width,initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     
      <body className="flex flex-col w-full justify-between  gap-sub-medium relative min-h-screen ">
  
        <Header
          className="relative  flex items-center justify-center px-4"
          size="large"
          textColor="neutral"
        ></Header>
        {children}
        <Footer
          size="large"
          intent="neutral"
          className="flex items-center justify-center"
         ></Footer>
  
      </body>
    </html>
  );
}
