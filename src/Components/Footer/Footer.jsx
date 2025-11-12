import React from "react";
import wave1 from "../../assets/wave_haikei.svg";
import { Link } from "react-router";
import { GiWorld } from "react-icons/gi";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#6a64dd] to-[#3c9dda]"> 
      <footer className=" footer sm:footer-horizontal text-base-content pt-20 p-10 ">
        <aside>
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
            Providing reliable tech since 1992
          </p>
          <div className="flex gap-3 mt-4 ">
            <a className="text-2xl text-white" href=""><FaFacebookF /></a>
            <a className="text-2xl text-white" href=""><BsTwitterX /></a>
            <a className="text-2xl text-white" href=""><FaYoutube /></a>
            <a className="text-2xl text-white" href=""><TfiWorld /></a>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title text-white">Services</h6>
          <a className="link link-hover text-white">Branding</a>
          <a className="link link-hover text-white">Design</a>
          <a className="link link-hover text-white">Marketing</a>
          <a className="link link-hover text-white">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Company</h6>
          <a className="link link-hover text-white">About us</a>
          <a className="link link-hover text-white">Contact</a>
          <a className="link link-hover text-white">Jobs</a>
          <a className="link link-hover text-white">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Legal</h6>
          <a className="link link-hover text-white">Terms of use</a>
          <a className="link link-hover text-white">Privacy policy</a>
          <a className="link link-hover text-white">Cookie policy</a>
        </nav>
      </footer>
      <aside className="text-center text-white pb-2">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by TradeSphere
        </p>
      </aside>
    </div>
  );
};

export default Footer;
