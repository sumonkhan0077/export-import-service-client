import React, { use, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import airplane from "../../assets/pexels-pixabay-358220.jpg";
import shipe from "../../assets/pexels-wolfgang-weiser-467045605-27603788.jpg";
import train from "../../assets/pexels-brett-sayles-1797942.jpg";
import truck from "../../assets/pexels-alban-mehmeti-184979123-13682891.jpg";
import img1 from "../../assets/undraw_business-deal_nx2n.svg";
import img2 from "../../assets/undraw_location-tracking_q3yd.svg";
import img3 from "../../assets/undraw_on-the-way_zwi3.svg";
import LatesProducts from "../../Components/LatestProducts/LatesProducts";
import Spinner from "../../Components/Spinner/Spinner";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router";

const Home = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://export-import-sever.vercel.app/latest-products")
      .then((res) => res.json())
      .then((data) => {
        setLatestProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // console.log(latestProducts);

  return (
    <div className=" mt-20 ">
      <title>Home</title>
      <div data-aos="slide-up" className="w-full max-w-8xl mx-auto mt-6">
        <Swiper
          pagination={{ dynamicBullets: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="rounded-2xl overflow-hidden"
        >
          <SwiperSlide className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
            <img
              src={airplane}
              alt="airplane"
              className="w-full h-130 object-cover brightness-45"
            />
            <div className="absolute inset-0  p-8">
              <h2
                data-aos="fade-right"
                className="text-white text-6xl font-bold"
              >
                Air Freight
              </h2>
              <p
                data-aos="fade-left"
                className="text-gray-300 text-xl mt-3 max-w-md"
              >
                Fast and reliable air shipping around the world.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
            <img
              src={shipe}
              alt="ship"
              className="w-full h-130 object-cover brightness-50"
            />
            <div className="absolute inset-0  p-8">
              <h2
                data-aos="fade-right"
                className="text-white text-6xl font-bold"
              >
                Sea Cargo
              </h2>
              <p
                data-aos="fade-left"
                className="text-gray-300 text-xl mt-3 max-w-md"
              >
                Efficient and affordable ocean freight solutions.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
            <img
              src={train}
              alt="train"
              className="w-full h-130 object-cover brightness-50"
            />
            <div className="absolute  inset-0 f p-8">
              <h2
                data-aos="fade-right"
                className="text-white text-6xl font-bold"
              >
                Rail Logistics
              </h2>
              <p
                data-aos="fade-lest"
                className="text-gray-300 text-xl mt-3 max-w-md"
              >
                Sustainable and quick inland cargo transport.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
            <img
              src={truck}
              alt="truck"
              className="w-full h-130 object-cover brightness-50"
            />
            <div data-aos="fade-right" className="absolute  inset-0 p-8">
              <h2 className="text-white  text-6xl font-bold">Road Freight</h2>
              <p
                data-aos="fade-left"
                className="text-gray-300 text-xl mt-3 max-w-md"
              >
                Reliable truck delivery for domestic shipments.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#6a64dd] to-[#3c9dda] mt-55">
        <svg
        data-aos="fade-up"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320 "
          className="fill-white dark:fill-[#1d232a] transition-colors duration-500"
        >
          <path d="M0,224L120,224C240,224,480,224,720,213.3C960,203,1200,181,1320,170.7L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
        </svg>

        <div
          className="relative text-center  max-w-[1150px] mx-auto mb-10 mt-20  px-4 sm:px-6 md:px-10"
        >
          <h2 data-aos="fade" className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mt-[-60px] sm:mt-[-80px] md:mt-[-100px]">
            WHY CHOOSE US?
          </h2>

          <p data-aos="fade-left" className="text-[#ffffffb9]  text-base sm:text-lg md:text-xl mt-4 sm:mt-5 leading-relaxed">
            We simplify global trade for everyone. From exporters to importers —
            manage your products, track shipments, and stay connected with
            verified global partners. Secure, fast, and designed to help your
            business grow.
          </p>

          <p data-aos="fade-right" className="text-white mt-3 text-base sm:text-lg md:text-xl md:ml-20 lg:ml-160">
            — Your success is our priority.
          </p>

          <div  className="absolute ml-8 mt-[-550px] md:ml-1 lg:ml-20 lg:mt-[-630px]">
            <h1  className="font-bold text-4xl md:text-5xl text-center mt-20  bg-gradient-to-b from-[#6a64dd] to-[#3c9dda] bg-clip-text text-transparent  mb-4">
              We Bridge Distances, We Deliver Dreams
            </h1>
            <p className="text-center pb-40">
              A EIZ is a software system that helps companies manage <br />{" "}
              logistics associated with the movement of physical of goods.
            </p>
          </div>
        </div>

        <div>
          <div>
            <div className=" max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
              <div data-aos="flip-up" className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
                <img
                  src={img1}
                  alt="Trustworthy & Secure"
                  className="w-60 h-55 mb-4 transition-transform duration-300 transform hover:scale-105 hover:border-[#000000] "
                />
                <h3 className="text-xl font-medium text-gray-800">
                  Trustworthy & Secure
                </h3>
              </div>

              <div data-aos="flip-up" className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center hover:shadow-xl transition transform scale-105 md:scale-115">
                <img
                  src={img2}
                  alt=" Live Tracking"
                  className="w-60 mb-4 transition-transform duration-300 transform hover:scale-105"
                />
                <h3 className="text-xl font-medium text-gray-800">
                  Live Tracking
                </h3>
              </div>

              <div data-aos="flip-up" className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
                <img
                  src={img3}
                  alt="Fast & Safe Transportation"
                  className="w-60 h-55 mb-4 transition-transform duration-300 transform hover:scale-105"
                />
                <h3 className="text-xl font-medium text-gray-800 text-center">
                  Fast & Safe Transportation
                </h3>
              </div>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="fill-white dark:fill-[#1d232a] transition-colors duration-500"
        >
          <path d="M0,224L120,224C240,224,480,224,720,213.3C960,203,1200,181,1320,170.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
      </div>

      {/* product by latest */}
      <div>
        <h1 data-aos="slide-up" className="bg-gradient-to-b from-[#6a64dd] to-[#3c9dda] bg-clip-text text-transparent text-center text-4xl font-bold mt-5 mb-10">
          Our Latest Products
        </h1>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-6 mb-8">
          {loading ? (
            <Spinner></Spinner>
          ) : (
            latestProducts.map((latestProduct) => (
              <LatesProducts
                key={latestProduct._id}
                latestProduct={latestProduct}
              ></LatesProducts>
            ))
          )}
          <div className="flex justify-center mx-auto items-center">
            <Link
              to="/all_products"
              className="hover:scale-105 transition ease-in-out btn my-btn py-5 px-6 mt-2 mr-25 lg:ml-125 flex items-center"
            >
              {" "}
              <span className="text-2xl text-[#ffff]">
                <MdNavigateNext />
              </span>{" "}
              <p>See All</p>
            </Link>
          </div>
        </div>
      </div>
      {/* transport system */}
      <section class="py-16 mt-20 mb-20 max-w-[1200px] mx-auto rounded-2xl bg-black/90 backdrop-blur-sm">
        <div class="max-w-6xl mx-auto px-6 text-center ">
          <h2  data-aos="slide-right"  class="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-b from-[#6a64dd] to-[#3c9dda] bg-clip-text text-transparent">
            Our Modes Of Transportation
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div  data-aos="flip-up" class="flex flex-col items-center border border-gray-700 bg-white/5 rounded-xl p-6 hover:border-[#3c9dda] transition-all duration-300">
              <div data-aos="fade-left"  class="text-5xl mb-4 text-[#6a64dd]">🚚</div>
              <h3 data-aos="fade-left"  class="text-lg font-semibold text-white mb-2">
                Road Transport
              </h3>
              <p data-aos="fade-up"  class="text-gray-400 text-sm leading-relaxed">
                We ensure reliable and cost-effective road transport solutions
                for domestic and cross-border deliveries.
              </p>
            </div>

            <div data-aos="flip-up"  class="flex flex-col items-center border border-gray-700 bg-white/5 rounded-xl p-6 hover:border-[#3c9dda] transition-all duration-300">
              <div data-aos="fade-left" class="text-5xl mb-4 text-[#6a64dd]">🚆</div>
              <h3 data-aos="fade-left" class="text-lg font-semibold text-white mb-2">
                Railway Logistics
              </h3>
              <p data-aos="fade-up" class="text-gray-400 text-sm leading-relaxed">
                Our railway network provides is fast, secure, and
                environmentally friendly — perfect for large-scale cargo.
              </p>
            </div>

            <div data-aos="flip-up"  class="flex flex-col items-center border border-gray-700 bg-white/5 rounded-xl p-6 hover:border-[#3c9dda] transition-all duration-300">
              <div data-aos="fade-left" class="text-5xl mb-4 text-[#6a64dd]">🚢</div>
              <h3 data-aos="fade-left" class="text-lg font-semibold text-white mb-2">Sea Freight</h3>
              <p data-aos="fade-up" class="text-gray-400 text-sm leading-relaxed">
                We offer global sea freight services with competitive rates and
                flexible scheduling.
              </p>
            </div>

            <div data-aos="flip-up"  class="flex flex-col items-center border border-gray-700 bg-white/5 rounded-xl p-6 hover:border-[#3c9dda] transition-all duration-300">
              <div data-aos="fade-left" class="text-5xl mb-4 text-[#6a64dd]">✈️</div>
              <h3 data-aos="fade-left" class="text-lg font-semibold text-white mb-2">Air Freight</h3>
              <p data-aos="fade-up" class="text-gray-400 text-sm leading-relaxed">
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
          <h2 data-aos="fade-left" class="text-3xl md:text-4xl font-medium mb-2 bg-gradient-to-b from-[#6a64dd] to-[#3c9dda] bg-clip-text text-transparent">
            OUR SERVICE PROCESS
          </h2>
          <p data-aos="fade-right" class=" mb-12">
            We follow a transparent and efficient process to ensure your goods
            are delivered safely, <br /> quickly, and cost-effectively — from
            booking to delivery.
          </p>

          <div data-aos="flip-up" class="flex flex-col md:flex-row justify-between items-center relative">
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
              <p data-aos="fade-up" class="text-sm font-semibold mt-3 text-gray-700 uppercase">
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
              <p data-aos="fade-up" class="text-sm font-semibold mt-3 text-gray-700 uppercase">
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
              <p data-aos="fade-up" class="text-sm font-semibold mt-3 text-gray-700 uppercase">
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
              <p data-aos="fade-up" class="text-sm font-semibold mt-3 text-gray-700 uppercase">
                Fast Delivery
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
