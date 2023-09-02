import React from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

export default function Layout() {
  return (
    <div className="bg-main-white">
      <div className="flex flex-col h-full w-full  font-josefin-sans bg-main-white ">
        <Header />
        <div className="container flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
      <Toaster />
    </div>
  );
}
