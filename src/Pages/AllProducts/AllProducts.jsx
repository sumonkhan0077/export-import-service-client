import React, { useEffect, useState } from 'react';
import AllCards from '../../Components/AllCards/AllCards';
import Spinner from '../../Components/Spinner/Spinner';


const AllProducts = () => {

     const [Products, setProducts] = useState([]);
      const [loading, setLoading] = useState(true);
    console.log(Products)
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
    
    return (
        <div className='max-w-[1100px] mx-auto mt-20'>
          <div className='mt-25 '>
          <h2  className='font-bold text-primary text-3xl'> DISCOVER WHAT YOU’VE BEEN LOOKING FOR</h2>
            <p  className='text-[#535353db] mt-2'>Discover our handpicked selection of premium products, <br /> updated regularly for your convenience.</p>
            <hr className="max-w-[850px] mx-auto my-6 border-0 h-[2px] bg-gradient-to-r from-transparent via-[#006affe1] to-transparent" />
          </div>
            <h1  className='font-bold text-2xl mt-4'>MOST POPULAR PRODUCTS</h1>
            <div  className="max-w-[1100px] mx-auto mt-10 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-6 mb-8">
            {loading? (<Spinner></Spinner>) :
              (  Products.map (product => 

                    <AllCards key={product._id} product={product}></AllCards>
                ))
            }

            </div>
        </div>
    );
};

export default AllProducts;