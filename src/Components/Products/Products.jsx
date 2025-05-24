import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

// Products component
const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Load products once component mounts
  useEffect(() => {
    fetch("product.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="mt-32 px-4 md:px-0 max-w-7xl mx-auto mb-16">
      <h1 className="text-3xl font-bold text-center mb-8 bg-purple-600 rounded-md text-white py-5">
        Explore Cutting-Edge Gadgets
      </h1>

      {/* Layout: sidebar + product grid */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar buttons */}
        <div className="flex flex-wrap md:flex-col gap-2 justify-center md:justify-start">
          {["All", "Laptops", "Smartphones", "Smartwatches"].map((cat) => (
            <button
              key={cat}
              className={`btn font-semibold rounded-md ${
                selectedCategory === cat
                  ? "bg-purple-700 text-white"
                  : "bg-purple-200 text-black"
              }`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive grid for products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {filteredProducts.map((product) => (
            <Product key={product.product_id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
