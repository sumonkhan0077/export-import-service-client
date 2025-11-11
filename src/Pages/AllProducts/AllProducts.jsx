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
        <div>
            <div  className="max-w-[1100px] mx-auto grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-6 mb-8">
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