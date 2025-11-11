import React, { use, useRef } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const UpdateProduct = ({item}) => {
    console.log(item)
      const { user } = use(AuthContext);
      const importModal = useRef(null);
      const formRef = useRef(null)

       const handelModal = () => {
    importModal.current.showModal();
  };

   const handleSubmit = (e) => {
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

    console.log("Updated Product:", updatedProduct);

    // এখানে fetch দিয়ে backend update করতে পারো
    // fetch(`http://localhost:3000/products/${item._id}`, { method: "PATCH", body: JSON.stringify(updatedProduct), headers: { "Content-Type": "application/json" } })

    importModal.current.close(); // modal close
    formRef.current.reset(); // form reset
  };
  
  return (
    <div>
      <button onClick={handelModal} className="btn hover:bg-white hover:text-primary hover btn-xs ">
        Update
      </button>
      {/* modal */}
      <div>
        <dialog
          ref={importModal}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box bg-white text-gray-800 max-w-xl">
            <h3 className="font-bold text-2xl text-blue-600 mb-4">
              Add New Product
            </h3>

            <form ref={formRef} onSubmit={handleSubmit}  className="space-y-3">
            <label className="label">Product Image</label>
              <input
                type="text"
                name="product_image"
                placeholder="Product Image URL"
                className="input input-bordered w-full"
                defaultValue={item.product_image  || ""}
                required
              />
              <label className="label">Product Name</label>
              <input
                type="text"
                name="product_name"
                placeholder="Product Name"
                className="input input-bordered w-full"
                defaultValue={item.product_name  || ""}
                required
              />
              <label className="label">price</label>
              <input
                type="number"
                name="price"
                placeholder="Price (USD)"
                className="input input-bordered w-full"
                defaultValue={item.price  || ""}
                required
              />
              <label className="label">Origin Country </label>
              <input
                type="text"
                name="origin_country"
                placeholder="Origin Country"
                className="input input-bordered w-full"
                defaultValue={item.origin_country  || ""}
                required
              />
              <div className="flex gap-3">
                <label className="label">Rating</label>
                <input
                  type="number"
                  step="0.1"
                  name="rating"
                  placeholder="Rating (e.g. 4.5)"
                  className="input input-bordered w-1/2"
                  defaultValue={item.rating  || ""}
                  required
                />
                <label className="label">Rating Number</label>
                <input
                  type="number"
                  name="rating_number"
                  placeholder="Rating Count"
                  className="input input-bordered w-1/2"
                  defaultValue={item.rating_number  || ""}
                  required
                />
              </div>
              <label className="label">Available Quantity</label>
              <input
                type="number"
                name="available_quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
                defaultValue={item.available_quantity  || ""}
                required
              />
              <label className="label">Description</label>
              <textarea
                name="description"
                placeholder="Description"
                className="textarea textarea-bordered w-full"
                defaultValue={item.description  || ""}
                required
              ></textarea> 
               <label className="label">Email</label>
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
                <button  type="submit" className="btn bg-blue-600 text-white">
                  Submit
                </button>
                <form  method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button onClick={() => {
                    importModal.current.close();
                    formRef.current.reset();
                  }} className="btn text-white bg-secondary ">
                    Close
                  </button>
                </form>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default UpdateProduct;
