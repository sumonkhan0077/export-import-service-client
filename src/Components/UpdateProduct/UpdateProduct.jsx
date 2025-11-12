import React, { use, useRef, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";

const UpdateProduct = ({ item }) => {
  const { user } = use(AuthContext);
  const importModal = useRef(null);
  const formRef = useRef(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const updatedProduct = {
      product_image: formData.get("product_image"),
      product_name: formData.get("product_name"),
      price: parseFloat(formData.get("price")),
      origin_country: formData.get("origin_country"),
      rating: parseFloat(formData.get("rating")),
      rating_number: parseInt(formData.get("rating_number")),
      available_quantity: parseInt(formData.get("available_quantity")),
      description: formData.get("description"),
      exporter_email: user?.email || "",
    };

    try {
      const res = await fetch(`https://export-import-sever.vercel.app/products/${item._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });
      await res.json();
      toast.success("Updated your data");

      importModal.current.close();
      formRef.current.reset();
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handelModal}
        className="btn hover:bg-white hover:text-primary hover btn-xs"
      >
        Update
      </button>

      {/* modal */}
      <dialog ref={importModal} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 max-w-xl">
          <h3 className="font-bold text-2xl text-blue-600 mb-4">
            Update Product
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
            <label className="label">Product Image</label>
            <input
              type="text"
              name="product_image"
              placeholder="Product Image URL"
              className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              defaultValue={item.product_image || ""}
              required
            />

            <label className="label">Product Name</label>
            <input
              type="text"
              name="product_name"
              placeholder="Product Name"
              className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              defaultValue={item.product_name || ""}
              required
            />

            <label className="label">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Price (USD)"
              className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              defaultValue={item.price || ""}
              required
            />

            <label className="label">Origin Country</label>
            <input
              type="text"
              name="origin_country"
              placeholder="Origin Country"
              className="input input-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              defaultValue={item.origin_country || ""}
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
                  defaultValue={item.rating || ""}
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
                  defaultValue={item.rating_number || ""}
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
              defaultValue={item.available_quantity || ""}
              required
            />

            <label className="label">Description</label>
            <textarea
              name="description"
              placeholder="Description"
              className="textarea textarea-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              defaultValue={item.description || ""}
              required
            ></textarea>

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
                <button
                  onClick={() => {
                    importModal.current.close();
                    formRef.current.reset();
                  }}
                  className="btn bg-secondary text-white hover:bg-secondary-focus"
                >
                  Close
                </button>
              </form>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateProduct;
