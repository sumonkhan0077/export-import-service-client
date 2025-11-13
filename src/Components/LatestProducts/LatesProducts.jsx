import React, { use } from "react";
import { Link } from "react-router";

const LatesProducts = ({ latestProduct }) => {
  const {
    _id,
    product_name,
    product_image,
    rating,
    price,
    origin_country,
    available_quantity,
  } = latestProduct;
  // console.log(product_name , latestProduct);
  return (
    <div>
      <div data-aos="slide-up" className="mt-7 card  bg-gradient-to-r from-base-100 to-base-100 dark:from-gray-900 dark:to-blue-900 max-w-[1200px] mx-auto shadow-md rounded-lg  mb-10 w-85 h-100  transition-transform duration-300 transform hover:scale-105">
        <figure className="bg-white w-full flex justify-center items-center h-60 md:h-72 lg:h-80">
          <img
          data-aos="slide-left"
            className="max-h-full w-auto object-contain"
            src={product_image}
            alt={product_name}
          />
        </figure>
        <div className="card-body">
          <h2 data-aos="fade-down-right" className="card-title text-2xl">{product_name}</h2>
          <div className=" ">
            <h1 data-aos="fade-down-right" className="text-xl font-medium text-[#6c64ff]">$ {price}</h1>
          </div>
          <div data-aos="fade-down-right" className="badge  bg-[#665eff58] text-[#6c64ff]">
            {origin_country}
          </div>
          <div className="flex  gap-3 ">
            <div data-aos="fade-down-right" className="badge bg-[#665eff58] text-[#6c64ff]">
              Available: {available_quantity}
            </div>
            <div data-aos="fade-down-right" className="badge bg-[#665eff58] text-[#6c64ff]  ">
              {" "}
              Rating: {rating}
            </div>
          </div>

          <div className="card-actions justify-between"></div>
          <Link data-aos="fade-down" to={`/product_details/${_id}`} className="btn my-btn">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatesProducts;
