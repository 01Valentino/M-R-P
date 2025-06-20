import React, { useState } from "react";

const Rejected = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Iphone 6s", ratings: 4 },
    { id: 2, name: "Samsung NoteFold", ratings: 5 },
    { id: 3, name: "Xiaomi", ratings: 3 },
  ]);

  const handleRecordUpdate = () => {
    setProducts(
      products.map((product) =>
        product.id === 1 ? { ...product, name: "Iphone 16" } : product
      )
    );
  };

  const handleDeleteUpdate = () => {
    setProducts(products.filter((product) => product.name !== "Xiaomi"));
  };

  const handleEdit = () => {
    setProducts(
      products.map((product) =>
        product.name === "Samsung NoteFold"
          ? {
              ...product,
              name: "Samsung S26 Ultra",
              ratings: 10,
            }
          : product
      )
    );
  };

  return (
    <>
      <div className="">
        <ol>
          {products.map((product) => (
            <>
              <li>Product Name: {product.name}</li>
              <li>Product Ratings: {product.ratings}</li>
              <button>Edit</button>
              <button>Delete</button>
              <hr />
            </>
          ))}
        </ol>
        <button
          className="bg-blue-700 active:bg-blue-400 text-white py-1 px-5 cursor-pointer"
          onClick={handleRecordUpdate}
        >
          UpdateRecord
        </button>
        <button
          className="bg-blue-700 active:bg-blue-400 text-white py-1 px-5 cursor-pointer"
          onClick={handleEdit}
        >
          Edit{" "}
        </button>
        <button
          className="bg-blue-700 active:bg-blue-400 text-white py-1 px-5 cursor-pointer"
          onClick={handleDeleteUpdate}
        >
          Delete{" "}
        </button>
      </div>
    </>
  );
};

export default Rejected;
