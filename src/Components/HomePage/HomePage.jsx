import React, { useEffect } from "react";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";

// Main HomePage Component
const HomePage = () => {
  useEffect(() => {
    document.title = "Gadget Heaven | Home";
  }, []);
  return (
    <div className="mx-auto">
      {/* Hero section */}
      <Hero />
      {/* Products section */}
      <Products />
    </div>
  );
};

export default HomePage;
