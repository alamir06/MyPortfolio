import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from '../pages/Navbar'
// import Footer from "../components/footer/Footer";

export const Routing = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1]; // Extract current path

  return (
    <>
      <Navbar />
      <div className={path ? "page-content" : ""}>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Routing;
