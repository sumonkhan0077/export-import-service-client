import React from "react";
import { Link } from "react-router";
import photo from "../../assets/pexels-tima-miroshnichenko-6169668.jpg";

const AboutUs = () => {
  return (
    <div>
      <section
        className="mt-25 rounded-2xl py-10 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 max-w-[1200px] mx-auto"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
          <div className="h-70 w-110">
            <img className="rounded-2xl" src={photo} />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3
              data-aos="fade-right"
              className="text-[#221eff] text-lg font-semibold tracking-wide uppercase mb-2"
            >
              About Us
            </h3>
            <h2
              data-aos="fade-right"
              className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4  bg-gradient-to-b from-[#6a64dd] to-[#3c9dda] bg-clip-text text-transparent"
            >
              TradeSphere — Simplifying Global Trade
            </h2>

            <p
              data-aos="fade-right"
              className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
            >
              Welcome to{" "}
              <Link to="/">
                {" "}
                <span className="font-semibold text-[#221eff]">
                  Trade Sphere
                </span>{" "}
              </Link>{" "}
              — your one-stop platform for global trade. Whether you are an
              exporter, importer, or buyer, we give you the tools to explore,
              connect, and expand your business with ease.
            </p>
            <p
              data-aos="fade-left"
              className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
            >
              Trade Sphere is a modern platform designed to make international
              business simple. Our goal is to connect exporters, importers, and
              buyers in a safe and efficient system. From product management to
              shipment tracking, we provide all the tools you need to grow your
              business worldwide.
            </p>
          </div>
        </div>
      </section>

      <section class="py-16 mt-10 mb-20 max-w-[1200px] mx-auto rounded-2xl bg-black/90 backdrop-blur-sm">
        <div class="max-w-6xl mx-auto px-6 text-center ">
          <h2 class="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-b from-[#6a64dd] to-[#3c9dda] bg-clip-text text-transparent">
            Our Modes Of Transportation
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="flex flex-col items-center border border-gray-700 bg-white/5 rounded-xl p-6 hover:border-[#3c9dda] transition-all duration-300">
              <div class="text-5xl mb-4 text-[#6a64dd]">🚚</div>
              <h3 class="text-lg font-semibold text-white mb-2">
                Road Transport
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                We ensure reliable and cost-effective road transport solutions
                for domestic and cross-border deliveries.
              </p>
            </div>

            <div class="flex flex-col items-center border border-gray-700 bg-white/5 rounded-xl p-6 hover:border-[#3c9dda] transition-all duration-300">
              <div class="text-5xl mb-4 text-[#6a64dd]">🚆</div>
              <h3 class="text-lg font-semibold text-white mb-2">
                Railway Logistics
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Our railway network provides is fast, secure, and
                environmentally friendly — perfect for large-scale cargo.
              </p>
            </div>

            <div class="flex flex-col items-center border border-gray-700 bg-white/5 rounded-xl p-6 hover:border-[#3c9dda] transition-all duration-300">
              <div class="text-5xl mb-4 text-[#6a64dd]">🚢</div>
              <h3 class="text-lg font-semibold text-white mb-2">Sea Freight</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                We offer global sea freight services with competitive rates and
                flexible scheduling.
              </p>
            </div>

            <div class="flex flex-col items-center border border-gray-700 bg-white/5 rounded-xl p-6 hover:border-[#3c9dda] transition-all duration-300">
              <div class="text-5xl mb-4 text-[#6a64dd]">✈️</div>
              <h3 class="text-lg font-semibold text-white mb-2">Air Freight</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                For urgent and high-value shipments, our air freight service
                provides the fastest international delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* service  */}
      <section class="py-16 max-w-[1200px] mx-auto mb-8">
        <div class="max-w-6xl mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-medium mb-2 bg-gradient-to-b from-[#6a64dd] to-[#3c9dda] bg-clip-text text-transparent">OUR SERVICE PROCESS</h2>
          <p class=" mb-12">
           We follow a transparent and efficient process to ensure your goods are
      delivered safely, <br /> quickly, and cost-effectively — from booking to delivery.
          </p>

          <div class="flex flex-col md:flex-row justify-between items-center relative">
            <div class="hidden md:hidden lg:block absolute top-14 left-35 w-40 h-[2px] bg-blue-500 -z-10"></div>

            <div class="relative flex flex-col items-center mb-10 md:mb-0">
              <div class="w-28 h-28 rounded-full border-2 border-primary flex items-center justify-center bg-white">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/992/992700.png"
                  class="w-12 opacity-80"
                  alt=""
                />
              </div>

              <div class="absolute left-23 top-10 bg-primary text-white w-9 h-9 flex items-center justify-center rounded-full font-bold">
                1
              </div>
              <p class="text-sm font-semibold mt-3 text-gray-700 uppercase">
                Request A Quote
              </p>
            </div>

            <div class=" hidden md:hidden lg:block  absolute top-14 left-120 w-40 h-[2px] bg-blue-500 -z-10"></div>

            <div class="relative flex flex-col items-center mb-10 md:mb-0">
              <div class="w-28 h-28 rounded-full border-2 border-primary flex items-center justify-center bg-white">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/992/992700.png"
                  class="w-12 opacity-80"
                  alt=""
                />
              </div>

              <div class="absolute left-28 top-10 bg-primary text-white w-9 h-9 flex items-center justify-center rounded-full font-bold">
                2
              </div>
              <p class="text-sm font-semibold mt-3 text-gray-700 uppercase">
                Book Your Shipment
              </p>
            </div>

            <div class="relative flex flex-col items-center mb-10 md:mb-0">
              <div class="w-28 h-28 rounded-full border-2 border-primary flex items-center justify-center bg-white">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/992/992700.png"
                  class="w-12 opacity-80"
                  alt=""
                />
              </div>

              <div class="hidden md:hidden lg:block  absolute top-14 left-36 w-40 h-[2px] bg-blue-500 -z-10"></div>

              <div class="absolute left-23 top-10 bg-primary text-white w-9 h-9 flex items-center justify-center rounded-full font-bold">
                3
              </div>
              <p class="text-sm font-semibold mt-3 text-gray-700 uppercase">
                 Track & Manage
              </p>
            </div>

            <div class="relative flex flex-col items-center mb-10 md:mb-0">
              <div class="w-28 h-28 rounded-full border-2 border-primary flex items-center justify-center bg-white">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/992/992700.png"
                  class="w-12 opacity-80"
                  alt=""
                />
              </div>

              <div class="absolute left-23 top-10 bg-primary text-white w-9 h-9 flex items-center justify-center rounded-full font-bold">
                4
              </div>
              <p class="text-sm font-semibold mt-3 text-gray-700 uppercase">
                Fast Delivery
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
