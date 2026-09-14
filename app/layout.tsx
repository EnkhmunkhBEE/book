import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/SideBar";
import { SideMenu } from "@/components/SideMenu";

export const metadata: Metadata = {
  title: "BookMart",
  description: "Online book store demo",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SideMenu />
        <div className="site-layout">
          <Sidebar />
          <main className="main-content">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}