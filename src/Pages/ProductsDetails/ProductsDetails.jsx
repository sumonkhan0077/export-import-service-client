import React, { use, useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { TiArrowBack } from "react-icons/ti";
import AppNotFound from "../../Components/AppNotFound/AppNotFound";
import Spinner from "../../Components/Spinner/Spinner";

const ProductsDetails = () => {
  const { user } = use(AuthContext);
  const product = useLoaderData();
  const navigate = useNavigate();
  const importModal = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, serError] = useState(false);
  const [productData, setProductData] = useState(product);

  // console.log(product);
  useEffect(() => {
    if (product) {
      setLoading(false); // half second delay for nice UX
    }
  }, [product]);

  if (!product || !product._id) {
    return <AppNotFound />;
  }

  if (loading) {
    return <Spinner></Spinner>;
  }

  const handelModal = () => {
    importModal.current.showModal();
  };

  const handelImport = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const quantity = e.target.quantity.value;
    console.log(name, email, quantity, product._id);
    const newImport = {
      product_id: product._id,
      product_name: product.product_name,
      product_image: product.product_image,
      price: product.price,
      origin_country: product.origin_country,
      rating: product.rating,
      buyer_name: name,
      buyer_email: email,
      quantity: quantity,
    };

    if (quantity > product.available_quantity) {
      return serError(true);
    }
    if (quantity <= 0) {
      return serError(true);
    }

    serError(false);
    fetch("http://localhost:3000/myImport", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newImport),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("after import products", data);
        if (data.insertedId) {
          importModal.current.close();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          setProductData((prev) => ({
            ...prev,
            available_quantity: prev.available_quantity - parseInt(quantity),
          }));
          e.target.reset();
        }
      });
  };
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="max-w-[1100px] mx-auto hero bg-base-200 mt-20 ">
        <div className="hero-content flex-col lg:flex-row">
          <img className="h-100 w-100 object-contain" src={product.product_image} />
          <div>
            <h1 className="text-5xl font-bold">{product.product_name}</h1>
            <p className="py-6">{product.description}</p>

            <div className="mb-3 ">
              <h1 className="text-xl font-medium text-[#6c64ff]">
                Price: ${product.price}
              </h1>
              <h1>Exporter Name: {product.exporter_name}</h1>
            </div>
            <div className="flex  gap-3 mb-2">
              <div className="badge  bg-[#665eff58] text-[#6c64ff]">
                {product.origin_country}
              </div>
              <div className="badge bg-[#665eff58] text-[#6c64ff]">
                Rating Number: {product.rating_number}
              </div>
              <div className="badge bg-[#665eff58] text-[#6c64ff]  ">
                {" "}
                Rating: {product.rating}
              </div>
            </div>
            <h1 className="mb-4"> Available: {productData.available_quantity} </h1>
            <div>
              <button onClick={handelModal} className="btn my-btn">
                Import Now
              </button>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <dialog
                ref={importModal}
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg">
                    How many Products you want!
                  </h3>
                  <p className="py-4">
                    Press ESC key or click the button below to close
                  </p>
                  <form onSubmit={handelImport}>
                    <fieldset className="fieldset">
                      <label className="label">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="input"
                        placeholder="Name"
                        defaultValue={user ? user.displayName : ""}
                        required
                      />
                      <label className="label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="input"
                        placeholder="Email"
                        defaultValue={user?.email}
                        readOnly
                        required
                      />
                      <label className="label">quantity</label>
                      <input
                        type="number"
                        name="quantity"
                        className="input"
                        placeholder="999"
                        required
                      />

                      <button className="btn my-btn mt-4">
                        Import Product
                      </button>
                    </fieldset>
                  </form>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn text-white bg-secondary ">
                        Close
                      </button>
                    </form>
                  </div>
                  {error ? (
                    <h1 className="text-red-500 text-center mt-4">
                      “"Sorry, the maximum quantity is{" "}
                      {product.available_quantity} and the minimum is 1. Please
                      select a quantity between 1 and{" "}
                      {product.available_quantity}."
                    </h1>
                  ) : (
                    " "
                  )}
                </div>
              </dialog>
              <button
                onClick={() => navigate(-1)}
                className="btn my-btn ml-4 px-8 "
              >
                <span>
                  <TiArrowBack className="text-xl" />
                </span>
                <span> Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
