import React, { use, useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { AuthContext } from "../../Context/AuthProvider";
import Spinner from "../../Components/Spinner/Spinner";
import PostProduct from "../../Components/PostProduct/PostProduct";
import { Link } from "react-router";
import Swal from "sweetalert2";
import UpdateProduct from "../../Components/UpdateProduct/UpdateProduct";
import { TiArrowBack } from "react-icons/ti";

const MyProducts = () => {
  const { user } = use(AuthContext);
  const [myProductsAll, setMyProductsAll] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleProductAdded = (newProduct) => {
  setMyProductsAll((prev) => [...prev, newProduct]);
};

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(`http://localhost:3000/products?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyProductsAll(data));
      setLoading(false);
    }
  }, [user?.email]);

  const handelRemoverProduct = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after delete", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingItems = myProductsAll.filter(
                (item) => item._id !== _id
              );
              setMyProductsAll(remainingItems);
            }
          });
      }
    });
  };
  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="max-w-[1100px] mx-auto mt-30">
      <div className="flex justify-between mt-4">
        <h1 className="text-2xl font-semibold mb-4">My Products ({myProductsAll.length})</h1>
        <div>
          <PostProduct handleProductAdded={handleProductAdded}></PostProduct>
        </div>
      </div>

      <div className="overflow-x-auto  bg-white shadow-md rounded-lg mt-5 mb-10">
        {myProductsAll.length > 0 ? (
          <table className="table w-full">
            {/* Table Head */}
            <thead className="bg-gradient-to-b from-[#6a64dd] to-[#3c9dda] text-white">
              <tr>
                <th className="text-center">#</th>
                <th className="">Product Name</th>
                <th className="text-center">Rating</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Price</th>
                <th className="">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {loading ? (
                <Spinner></Spinner>
              ) : (
                myProductsAll.map((item, index) => (
                  <tr
                    key={item._id}
                    className="hover:bg-blue-50 transition duration-200"
                  >
                    <td className="text-center">{index + 1}</td>
                    <td className=" ">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={item.product_image} alt="product" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.product_name}</div>
                          <div className="text-sm opacity-70">
                            {item.origin_country}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-yellow-500 text-center">
                      {item.rating}
                    </td>
                    <td className="text-center">{item.available_quantity}</td>
                    <td className="text-primary text-center">${item.price}</td>
                    <td className="flex items-center ">
                      <Link
                        to={`/product_details/${item._id}`}
                        className="btn my-btn btn-xs mr-2"
                      >
                        Details
                      </Link>
                      <button
                        onClick={() => handelRemoverProduct(item._id)}
                        className="btn btn-secondary mr-2 hover:bg-white hover:text-red-500 hover btn-xs "
                      >
                        Remove
                      </button>
                      <div>
                        <UpdateProduct item={item}></UpdateProduct>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        ) : (
          <div className="p-4 h-[30vh] text-center text-gray-500">
           <h2> No products found </h2>
            <Link to="/all_products" className="btn my-btn mt-5 px-8 ">
              <span>
                <TiArrowBack className="text-xl" />
              </span>
              <span> Back to Import Products</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProducts;
