import React, { useContext, useRef, useState, useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const PostProductModal = ({ handleProductAdded }) => {
  const { user } = useContext(AuthContext);
  const [ratingError, setRatingError] = useState(false);
  const [quantityError, setQuantityError] = useState(false);
  const importModal = useRef(null);

  // Dark mode state
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handelModal = () => {
    importModal.current.showModal();
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;

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

    if (form.rating.value < 0 || form.rating.value > 5) {
      return setRatingError(true);
    }
    if (form.available_quantity.value <= 0) {
      return setQuantityError(true);
    }

    setRatingError(false);
    setQuantityError(false);

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          const addedProduct = { _id: data.insertedId, ...newProduct };
          handleProductAdded(addedProduct);
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
    <div className="">
      {/* Open Modal Button */}
      <button
        className="btn bg-primary text-white hover:bg-blue-700"
        onClick={handelModal}
      >
        + Add Product
      </button>

      {/* Modal */}
      <dialog
        ref={importModal}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 max-w-xl">
          <h3 className="font-bold text-2xl text-blue-600 mb-4">
            Add New Product
          </h3>

          <form onSubmit={handleAddProduct} className="space-y-3">
            <label className="label">Product Image</label>
            <input
              type="text"
              name="product_image"
              placeholder="Product Image URL"
              className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              required
            />
            <label className="label">Product Name</label>
            <input
              type="text"
              name="product_name"
              placeholder="Product Name"
              className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              required
            />
            <label className="label">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Price (USD)"
              className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              required
            />
            <label className="label">Origin Country</label>
            <input
              type="text"
              name="origin_country"
              placeholder="Origin Country"
              className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              required
            />
            <div className="flex gap-3">
              <div className="w-1/2">
                <label className="label">Rating</label>
                <input
                  type="number"
                  step="0.1"
                  name="rating"
                  placeholder="Rating (e.g. 4.5)"
                  className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="label">Rating Number</label>
                <input
                  type="number"
                  name="rating_number"
                  placeholder="Rating Count"
                  className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
            </div>
            <label className="label">Available Quantity</label>
            <input
              type="number"
              name="available_quantity"
              placeholder="Available Quantity"
              className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              required
            />
            <label className="label">Description</label>
            <textarea
              name="description"
              placeholder="Description"
              className="textarea textarea-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              required
            ></textarea>
            <label className="label">Exporter Name</label>
            <input
              type="text"
              name="exporter_name"
              placeholder="Exporter Name"
              className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              required
            />
            <label className="label">Exporter Email</label>
            <input
              type="email"
              name="exporter_email"
              placeholder="Exporter Email"
              defaultValue={user?.email || ""}
              className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              required
              readOnly={!!user?.email}
            />

            <div className="modal-action flex justify-between">
              <button
                type="submit"
                className="btn bg-blue-600 text-white hover:bg-blue-700"
              >
                Submit
              </button>
              <form method="dialog">
                <button className="btn bg-secondary text-white hover:bg-secondary-focus">
                  Close
                </button>
              </form>
            </div>
          </form>

          {ratingError && (
            <h1 className="text-red-500 text-center mt-4">
              Sorry, the rating number is 1 to 5.
            </h1>
          )}
          {quantityError && (
            <h1 className="text-red-500 text-center mt-4">
              Sorry, the quantity minimum number is 1.
            </h1>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default PostProductModal;
