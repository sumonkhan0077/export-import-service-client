import React from "react";
import wave1 from "../../assets/wave_haikei.svg";
import { Link } from "react-router";
import { GiWorld } from "react-icons/gi";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="  fill-white dark:fill-[#1d232a] transition-colors duration-500"
      >
        <path d="M0,160L120,144C240,128,480,96,720,90.7C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
      </svg>
      <div className="-mt-50 pt-15 bg-gradient-to-b from-[#6a64dd] to-[#3c9dda]">
        <footer  className=" footer sm:footer-horizontal text-base-content pl-40 p-10 ">
          <aside data-aos="fade-left">
            <Link className="flex gap-2 items-center" to="/">
              <span className="text-white text-3xl">
                <GiWorld />
              </span>{" "}
              <span className=" text-white text-xl font-bold">
                Trade<span className="">Sphere</span>{" "}
              </span>{" "}
            </Link>
            <p className="text-white mt-2">
              Trade Sphere
              <br />
              Providing reliable tech since 2012
            </p>
            <div className="flex gap-3 mt-4 ">
              <a className="text-2xl text-white" href="">
                <FaFacebookF />
              </a>
              <a className="text-2xl text-white" href="">
                <BsTwitterX />
              </a>
              <a className="text-2xl text-white" href="">
                <FaYoutube />
              </a>
              <a className="text-2xl text-white" href="">
                <TfiWorld />
              </a>
            </div>
          </aside>
          <nav data-aos="fade-left">
            <h6 className="footer-title text-white">Services</h6>
            <a className="link link-hover text-white">Branding</a>
            <a className="link link-hover text-white">Design</a>
            <a className="link link-hover text-white">Marketing</a>
            <a className="link link-hover text-white">Advertisement</a>
          </nav>
          <nav data-aos="fade-left">
            <h6 className="footer-title text-white">Company</h6>
            <a className="link link-hover text-white">About us</a>
            <a className="link link-hover text-white">Contact</a>
            <a className="link link-hover text-white">Jobs</a>
            <a className="link link-hover text-white">Press kit</a>
          </nav>
          <nav data-aos="fade-left">
            <h6 className="footer-title text-white">Legal</h6>
            <a className="link link-hover text-white">Terms of use</a>
            <a className="link link-hover text-white">Privacy policy</a>
            <a className="link link-hover text-white">Cookie policy</a>
          </nav>
        </footer>
        <aside  className="text-center text-white pb-2">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            TradeSphere
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
