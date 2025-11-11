import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const MyImport = () => {
  const { user } = useContext(AuthContext);
  const [myImports, setMyImports] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myImport?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyImports(data));
    }
  }, [user?.email]);

  return (
    <div className="max-w-[1100px] mx-auto mt-10 mb-20  p-4">
      <h1 className="text-2xl font-semibold mb-4">
        My Imported Products ({myImports.length})
      </h1>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
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
            {myImports.map((item, index) => (
              <tr
                key={item._id}
                className="hover:bg-blue-50 transition duration-200"
              >
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="product"
                        />
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
                <td>{item.rating}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td className=" items-center">
                  <button className="btn my-btn btn-xs mr-2">
                    Details
                  </button>
                  <button className="btn my-btn btn-xs ">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyImport;
