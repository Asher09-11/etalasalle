import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductListView = ({type}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`http://localhost:5000/products/view/${type}`);
      setProducts(response.data);
    };
    fetchProducts();
  }, [type]);


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
        </div>
        <div className="px-6 pt-4 pb-2">
          <Link to={`/detail/${product.id}`}>
              <button
              className="bg-gray-100 font-bold py-2 px-4 rounded"
              >
                  Details
              </button>
          </Link>
        </div>
      </div>
      ))}
    </div>
  );
};

export default ProductListView;
