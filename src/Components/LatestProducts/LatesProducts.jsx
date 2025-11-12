import React, { use } from "react";
import { Link } from "react-router";

const LatesProducts = ({ latestProduct }) => {
  const { _id, product_name ,product_image , rating ,price,origin_country, available_quantity } = latestProduct;
  // console.log(product_name , latestProduct);
  return (
    <div>
      <div className="mt-7 card bg-base-100 w-85 h-100 mx-auto shadow-sm transition-transform duration-300 transform hover:scale-105">
        <figure className="">
          <img
          className="w-full h-full object-contain "
            src={product_image}
            alt={product_name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{product_name}</h2>
          <div className=" ">
            <h1 className="text-xl font-medium text-[#6c64ff]">$ {price}</h1>
          </div>
            <div className="badge  bg-[#665eff58] text-[#6c64ff]">{origin_country}</div>
          <div className="flex  gap-3 ">
            <div className="badge bg-[#665eff58] text-[#6c64ff]">Available: {available_quantity}</div>
            <div className="badge bg-[#665eff58] text-[#6c64ff]  "> Rating: {rating}</div>
          </div>

          <div className="card-actions justify-between"></div>
          <Link to={`/product_details/${_id}`} className="btn my-btn">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default LatesProducts;
