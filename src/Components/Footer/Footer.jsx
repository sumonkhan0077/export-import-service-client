import React from "react";
import wave1 from '../../assets/wave_haikei.svg'


const Footer = () => {
  return (
    <div>
      <footer className=" footer sm:footer-horizontal text-base-content pt-20 p-10 bg-gradient-to-b from-[#6a64dd] to-[#3c9dda]"  >
        <aside>
          <h1 className="text-3xl">EXprot import <br /> zone</h1>
          <p className="text-white">
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
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
       
    </div>
  );
};

export default Footer;
