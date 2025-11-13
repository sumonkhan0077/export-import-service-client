import React, { useEffect } from "react";
import Home from "../Pages/Home/Home";
import { Outlet, useLocation } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const MainLayout = () => {
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
