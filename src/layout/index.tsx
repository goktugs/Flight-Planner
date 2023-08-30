import React from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-main-white">
      <div className="flex flex-col h-screen w-full  font-josefin-sans ">
        <Header />
        <div className="container flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
