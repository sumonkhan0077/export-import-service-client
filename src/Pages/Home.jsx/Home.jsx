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
    fetch("http://localhost:3000/latest-products")
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
    <div className="relative ">
      <div className="w-full max-w-8xl mx-auto mt-6">
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
              <h2 className="text-white text-6xl font-bold">Air Freight</h2>
              <p className="text-gray-300 text-xl mt-3 max-w-md">
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
              <h2 className="text-white text-6xl font-bold">Sea Cargo</h2>
              <p className="text-gray-300 text-xl mt-3 max-w-md">
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
              <h2 className="text-white text-6xl font-bold">Rail Logistics</h2>
              <p className="text-gray-300 text-xl mt-3 max-w-md">
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
            <div className="absolute  inset-0 p-8">
              <h2 className="text-white  text-6xl font-bold">Road Freight</h2>
              <p className="text-gray-300 text-xl mt-3 max-w-md">
                Reliable truck delivery for domestic shipments.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute ml-8 md:ml-35 lg:ml-78 lg:mt-8">
        <h1 className="font-bold text-4xl md:text-5xl text-center mt-20  mb-4">
          We Bridge Distances, We <br /> Deliver Dreams
        </h1>
        <p className="text-center pb-40">
          A EIZ is a software system that helps companies manage <br />{" "}
          logistics associated with the movement of physical of goods.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#6a64dd] to-[#3c9dda] mt-55">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320 "
          className="fill-white dark:fill-[#1d232a] transition-colors duration-500"
        >
          <path d="M0,224L120,224C240,224,480,224,720,213.3C960,203,1200,181,1320,170.7L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
        </svg>

        <div className="text-center mb-10 mt-20  px-4 sm:px-6 md:px-10">
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mt-[-60px] sm:mt-[-80px] md:mt-[-100px]">
            WHY CHOOSE US?
          </h2>

          <p className="text-[#ffffffb9] text-base sm:text-lg md:text-xl mt-4 sm:mt-5 leading-relaxed">
            We simplify global trade for everyone. From exporters to importers —
            manage your products, track shipments, and stay connected with
            verified global partners. Secure, fast, and designed to help your
            business grow.
          </p>

          <p className="text-white mt-3 text-base sm:text-lg md:text-xl md:ml-20 lg:ml-160">
            — Your success is our priority.
          </p>
        </div>

        <div>
          <div>
            <div className=" max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
                <img
                  src={img1}
                  alt="Programming"
                  className="w-60 h-55 mb-4 transition-transform duration-300 transform hover:scale-105"
                />
                <h3 className="text-xl font-medium text-gray-800">
                  Trustworthy & Secure
                </h3>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center hover:shadow-xl transition transform scale-105 md:scale-115">
                <img
                  src={img2}
                  alt="Programming"
                  className="w-60 mb-4 transition-transform duration-300 transform hover:scale-105"
                />
                <h3 className="text-xl font-medium text-gray-800">
                  Live Tracking
                </h3>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
                <img
                  src={img3}
                  alt="Programming"
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
         <h1 className="text-center text-4xl font-bold mt-5 mb-10">
          Latest Products
        </h1>

        <div className="max-w-[1100px] mx-auto grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-6 mb-8">
          {loading ? 
          (<Spinner></Spinner>) :
       ( latestProducts.map((latestProduct) => (
            <LatesProducts
              key={latestProduct._id}
              latestProduct={latestProduct}
            ></LatesProducts>)
          ))}
           <div className="flex justify-center mx-auto items-center">
          <Link to='/all_products' className="hover:scale-105 transition ease-in-out btn my-btn py-5 px-6 mt-2 mr-25 lg:ml-125 flex items-center">
            {" "}
            <span className="text-2xl text-[#ffff]">
              <MdNavigateNext />
            </span>{" "}
            <p>See All</p>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
