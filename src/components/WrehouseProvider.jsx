import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const WrehouseProvider = () => {
  return (
    <div className="min-h-screen bg-slate-900 relative text-white ">
      <Navbar />
      <div className="max-w-xl mx-auto py-4 my-8 relative">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default WrehouseProvider;
