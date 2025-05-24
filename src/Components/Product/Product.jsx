import React from "react";
import { Link, NavLink } from "react-router-dom";

// Individual product card
const Product = ({ product }) => {
  const { product_title, price, product_image, product_id } = product;

  return (
    // Remove the outer fixed-width border wrapper
    <div className="card bg-base-100 shadow-sm border-2 border-purple-300 rounded-lg">
      {/* Image container */}
      <figure className="px-6 pt-6">
        <img
          src={product_image} // Use dynamic product image
          alt={product_title}
          className="rounded-md w-full h-48 object-contain"
        />
      </figure>

      {/* Card body */}
      <div className="card-body px-6 py-4">
        <h2 className="card-title text-lg font-semibold">{product_title}</h2>
        <p className="text-gray-700">Price: ${price}</p>

        {/* Button */}
        <div className="card-actions mt-4">
          <Link to={`/products/${product_id}`}>
            <button className="btn bg-transparent border-2 border-purple-500 text-purple-600 rounded-md hover:bg-purple-600 hover:text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
