import React, { useContext, useRef } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const PostProductModal = () => {
  const { user } = useContext(AuthContext);
  const importModal = useRef(null);

  const handelModal = () => {
    importModal.current.showModal();
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    console.log(form.available_quantity.value);
    const newProduct = {
      product_image: form.product_image.value,
      product_name: form.product_name.value,
      price: parseFloat(form.price.value),
      origin_country: form.origin_country.value,
      rating: parseFloat(form.rating.value),
      rating_number: parseInt(form.rating_number.value),
      available_quantity: parseInt(form.available_quantity.value),
      description: form.description.value,
      exporter_name: form.exporter_name.value,
      exporter_email: user?.email || form.exporter_email.value,
      time: new Date().toISOString(),
    };

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Product Added!",
            text: "Your product has been successfully added.",
          });
          form.reset();
          importModal.current.close();
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Please try again later.",
        });
      });
  };

  return (
    <div className="text-center">
      {/* Open Modal Button */}
      <button
        className="btn bg-blue-600 text-white hover:bg-blue-700"
        onClick={handelModal}
      >
        + Add Product
      </button>

      {/* Modal */}
      <dialog ref={importModal} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white text-gray-800 max-w-xl">
          <h3 className="font-bold text-2xl text-blue-600 mb-4">
            Add New Product
          </h3>

          <form onSubmit={handleAddProduct} className="space-y-3">
            <input
              type="text"
              name="product_image"
              placeholder="Product Image URL"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="product_name"
              placeholder="Product Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price (USD)"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="origin_country"
              placeholder="Origin Country"
              className="input input-bordered w-full"
              required
            />
            <div className="flex gap-3">
              <input
                type="number"
                step="0.1"
                name="rating"
                placeholder="Rating (e.g. 4.5)"
                className="input input-bordered w-1/2"
                required
              />
              <input
                type="number"
                name="rating_number"
                placeholder="Rating Count"
                className="input input-bordered w-1/2"
                required
              />
            </div>
            <input
              type="number"
              name="available_quantity"
              placeholder="Available Quantity"
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>

            <input
              type="text"
              name="exporter_name"
              placeholder="Exporter Name"
              className="input input-bordered w-full"
              required
            />

            <input
              type="email"
              name="exporter_email"
              placeholder="Exporter Email"
              defaultValue={user?.email || ""}
              className="input input-bordered w-full"
              required
              readOnly={!!user?.email}
            />

            <div className="modal-action">
              <button type="submit" className="btn bg-blue-600 text-white">
                Submit
              </button>
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn text-white bg-secondary ">Close</button>
              </form>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default PostProductModal;
