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
      fetch(`http://localhost:3000/myImport?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyImports(data));
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
        fetch(`http://localhost:3000/myImport/${_id}`, {
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
      <h1 className="text-2xl font-semibold mb-4">
        My Imported Products ({myImports.length})
      </h1>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        {myImports.length > 0 ? (
          <table className="table w-full">
            {/* Table Head */}
            <thead className="bg-gradient-to-b from-[#6a64dd] to-[#3c9dda] text-white">
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
            <tbody>
              {loading ? (
                <Spinner></Spinner>
              ) : (
                myImports.map((item, index) => (
                  <tr
                    key={item._id}
                    className="hover:bg-blue-50 transition duration-200"
                  >
                    <td>{index + 1}</td>
                    <td>
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
                    <td className="text-yellow-500">{item.rating}</td>
                    <td>{item.quantity}</td>
                    <td className="text-primary">${item.price}</td>
                    <td className=" items-center">
                      <Link
                        to={`/product_details/${item._id}`}
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
