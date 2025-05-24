import React, { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const ProductDetails = () => {
  useEffect(() => {
    document.title = "Gadget Heaven | ProductDetails";
  }, []);
  const [cartDisabled, setCartDisabled] = useState(false);
  const [wishlistDisabled, setWishlistDisabled] = useState(false);
  const { addToCart, addToWishlist } = useCart(); // Moved up before any early returns

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { product } = useParams();
  const data = useLoaderData();
  const selectedProduct = data.find((item) => item.product_id === product);

  if (!selectedProduct) {
    return <p className="text-center mt-20 text-red-500">Product not found.</p>;
  }

  const handleAddToCart = () => {
    addToCart(selectedProduct);
    setCartDisabled(true);
    toast.success("Item added to cart!");
  };
  const handleAddToWishlist = () => {
    addToWishlist(selectedProduct);
    setWishlistDisabled(true);
    toast.info("Added to wishlist!");
  };

  return (
    <>
      {/* Header Section */}
      <div className="bg-purple-600 text-white text-center py-28">
        <h1 className="text-3xl font-bold mb-2">Product Details</h1>
        <p className="text-sm max-w-2xl mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Product Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg mt-[-70px] p-10 flex flex-col md:flex-row gap-10 z-10 relative">
        {/* Product Image Placeholder */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src={selectedProduct.product_image} className="object-contain" />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">
            {selectedProduct.product_title}
          </h2>
          <p className="text-xl font-bold mb-2">
            Price: ${selectedProduct.price}
          </p>

          {/* Availability Tag */}
          <span
            className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 ${
              selectedProduct.availability
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {selectedProduct.availability ? "In Stock" : "Out of Stock"}
          </span>

          {/* Description */}
          <p className="text-gray-700 mb-4">{selectedProduct.description}</p>

          {/* Specifications */}
          <h3 className="font-semibold mb-2">Specification:</h3>
          <ul className="list-decimal list-inside mb-4 text-sm text-gray-800">
            {selectedProduct.Specification.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <span className="font-semibold">Rating:</span>
            <div className="flex text-yellow-400">
              {[...Array(Math.floor(selectedProduct.rating))].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">
              {selectedProduct.rating}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              disabled={cartDisabled}
              className={`px-6 py-2 rounded-full flex items-center gap-2 transition 
                ${
                  cartDisabled
                    ? "bg-purple-300 cursor-not-allowed text-white"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
            >
              <ShoppingCart size={18} />
              {cartDisabled ? "Added" : "Add To Cart"}
            </button>

            <button
              disabled={wishlistDisabled}
              onClick={handleAddToWishlist}
              className={`px-4 py-2 rounded-full transition 
                ${
                  wishlistDisabled
                    ? "bg-purple-300 cursor-not-allowed"
                    : "bg-purple-100 hover:bg-purple-200"
                }`}
            >
              <Heart size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
