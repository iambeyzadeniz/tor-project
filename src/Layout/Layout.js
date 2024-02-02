import React from "react";
import Footer from "../NavBar/Footer";
import Header from "../NavBar/Header";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="w-full h-screen  relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
