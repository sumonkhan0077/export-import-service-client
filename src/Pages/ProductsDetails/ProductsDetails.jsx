import React, { use, useRef } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const ProductsDetails = () => {
  const { user } = use(AuthContext);
  const product = useLoaderData();
  console.log(product);

  const importModal = useRef(null);

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
      product_name: product.product_name,
      product_image:product.product_image,
      price:product.price,
      origin_country:product.origin_country,
      rating: product.rating,
      
      buyer_name: name,
      buyer_email: email,
      quantity: quantity,
    };

    fetch("http://localhost:3000/myImport", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newImport),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after import products", data);
        if (data.insertedId) {
          importModal.current.close();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="max-w-[1100px] mx-auto hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div>
              <button onClick={handelModal} className="btn btn-primary">
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

                      <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                  </form>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
