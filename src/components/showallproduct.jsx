import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductListAdmin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/product/${productId}`);
      // Reload the page after successful deletion
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center h-screen mx-52 my-4 gap-32">
      {products.map((product) => (
        <div key={product.id} className="bg-[#1A3A23] w-[260px] rounded-lg overflow-hidden shadow-md">
          <img
            src={product.url}
            alt={product.name}
            className="h-64 object-cover w-[220px] m-5"
          />
          <div className="p-4">
            <h2 className="text-gray-200 font-bold text-2xl mb-2">{product.name}</h2>
            <div className="text-base bg-gray-300 px-4 py-2 overflow-y-scroll h-36 break-words overflow-hidden">{product.description}</div>
            <p className="text-gray-200 font-bold text-xl mt-2">
              Price : Rp{product.price}
            </p>
            <p className="text-gray-200 font-bold text-xl mt-2">
              Contact : {product.contactname}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button
              onClick={() => window.open("https://wa.me/"+product.contactnumber)}
              className="bg-gray-100 font-bold py-2 px-4 rounded"
              rel="noopener noreferrer"
            >
              WhatsApp
            </button>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button
              onClick={() => handleDelete(product.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListAdmin;
