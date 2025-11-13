import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import Spinner from "../../Components/Spinner/Spinner";
import { Link, useNavigate } from "react-router";
import { TiArrowBack } from "react-icons/ti";

const MyImport = () => {
  const { user } = useContext(AuthContext);
  const [myImports, setMyImports] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(`https://export-import-sever.vercel.app/myImport?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyImports(data);
        
          setLoading(false); 
        })
        .catch((error) => {
          console.error("Fetch error:", error);
          setLoading(false); 
        });
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
        fetch(`https://export-import-sever.vercel.app/myImport/${_id}`, {
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

              const remainingItems = myImports.filter(
                (item) => item._id !== _id
              );
              setMyImports(remainingItems);
            }
          });
      }
    });
  };
  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="max-w-[1100px] mx-auto  mt-20 mb-20  p-4">
      <title>My Import</title>
      <h1 data-aos="flip-up" className="text-2xl font-semibold mb-4">
        My Imported Products ({myImports.length})
      </h1>


      <div className="overflow-x-auto   bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 max-w-[1200px] mx-auto shadow-md rounded-lg mt-5 mb-10">
        {myImports.length > 0 ? (
          <table className="table w-full">
            {/* Table Head */}
            <thead data-aos="fade-right"  className="bg-gradient-to-b from-[#6a64dd] to-[#3c9dda] text-white">
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Rating</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody data-aos="fade-left" >
              {loading ? (
                <Spinner></Spinner>
              ) : (
                myImports.map((item, index) => (
                  <tr
                    key={item._id}
                    className="hover:bg-[#cccccc] dark:hover:bg-[#909090d8] transition duration-200"
                  >
                    <td className="text-black dark:text-[#e6e6e6]">{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={item.product_image} alt="product" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold dark:text-[#e6e6e6] text-black">{item.product_name}</div>
                          <div className="text-sm dark:text-[#e6e6e6] text-black opacity-70">
                            {item.origin_country}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-yellow-500">{item.rating}</td>
                    <td className="text-black dark:text-[#e6e6e6]">{item.quantity}</td>
                    <td className="text-primary">${item.price}</td>
                    <td className=" items-center">               
                        <Link 
                        to={`/product_details/${item.product_id}`}
                        className="btn my-btn btn-xs mr-2"
                      >
                        Details
                      </Link>
                      <button
                        onClick={() => handelRemoverProduct(item._id)}
                        className="btn btn-secondary hover:bg-white hover:text-red-500 hover btn-xs "
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        ) : (
          <div className="p-4 h-[30vh]  text-center text-gray-500">
            <h1> No products found.</h1>
            <Link
              to='/all_products'
              className="btn my-btn mt-5 px-8 "
            >
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

export default MyImport;
