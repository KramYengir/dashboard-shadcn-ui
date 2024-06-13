import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="relative max-w-screen-xl mx-auto flex">
        <Sidebar />

        <main className="flex-1 p-5">{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
