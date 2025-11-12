import React, { useEffect, useState } from "react";
import AllCards from "../../Components/AllCards/AllCards";
import Spinner from "../../Components/Spinner/Spinner";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  // console.log(Products);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const term = search.trim().toLowerCase();
  const searchProducts = term
    ? products.filter((product) =>
        product.product_name.toLowerCase().includes(term)
      )
    : products;

  useEffect(() => {
    if (search === "") {
      setSearchLoading(false);
      return;
    }

    setSearchLoading(true);

    const timeout = setTimeout(() => {
      setSearchLoading(false);
    }, 600);
    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div className="max-w-[1100px] mx-auto mt-20">
      <div className="mt-25 ">
        <h2 className="font-bold bg-gradient-to-b text-center from-[#6a64dd] to-[#3c9dda] bg-clip-text text-transparent text-3xl">
          {" "}
          DISCOVER WHAT YOU’VE BEEN LOOKING FOR
        </h2>
        <p className="text-[#535353db] text-center mt-2">
          Discover our handpicked selection of premium products, <br /> updated
          regularly for your convenience.
        </p>
        <hr className="max-w-[850px] mx-auto my-6 border-0 h-[2px] bg-gradient-to-r from-transparent via-[#006affe1] to-transparent" />
      </div>
      <div className="flex flex-col gap-4 mt-15 md:flex-row justify-between items-center">
        <h1 className="font-bold  bg-gradient-to-b from-[#6a64dd] to-[#3c9dda] bg-clip-text text-transparent text-2xl mt-4">MOST POPULAR PRODUCTS</h1>
        <div className="flex items-center w-96 bg-gray-50 border border-gray-200 rounded-lg p-1">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            type="search"
            required
            class="flex-1 bg-transparent border-none outline-none px-3 py-2 text-gray-700 placeholder-gray-400"
          />
          <button className="bg-primary hover:bg-indigo-600 text-white p-2 rounded-md transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-4.35-4.35m1.85-5.4a7.25 7.25 0 11-14.5 0 7.25 7.25 0 0114.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto mt-20">
        {loading || searchLoading ? (
          <Spinner></Spinner>
        ) : searchProducts.length === 0 ? (
          <div className="text-center text-gray-600 h-[40vh] flex flex-col items-center justify-center">
            <h2 className="text-4xl font-semibold mb-2 bg-gradient-to-b from-[#6a64dd] to-[#3c9dda] bg-clip-text text-transparent">
              No Products Found
            </h2>
            <p className="text-gray-500">
              Sorry, we couldn’t find any products that match your search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {searchProducts.map((product) => (
              <AllCards key={product._id} product={product}></AllCards>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
