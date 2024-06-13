import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard UI",
  description: "Admin dashboard UI kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        <div className=" max-w-screen-xl mx-auto flex">
          <div className="hidden md:block min-h-[100vh]">
            <Sidebar />
          </div>
          <main className="flex-1 p-5">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
