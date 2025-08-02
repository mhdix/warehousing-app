import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const WrehouseProvider = () => {
  return (
    <div className="min-h-screen text-white relative">
      <div className="w-full z-30">
        <Navbar />
      </div>
      <div className="max-w-6xl mx-auto py-4 my-8 relative">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default WrehouseProvider;
