import React from "react";

const Footer = () => {
  return (
    <div className="text-gray-500  max-w-11/12 mx-auto text-center mt-28">
      <div className="mb-4">
        <h1 className="font-bold text-3xl text-black">Gadget Heaven</h1>
        <p>Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div>
          <h2 className="font-bold text-xl text-black">Service</h2>
          <p>Product Support</p>
          <p>Order Tracking</p>
          <p>Shipping & Delivary</p>
          <p>Returns</p>
        </div>
        <div>
          <h2 className="font-bold text-xl text-black">Company</h2>
          <p>About Us</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div>
          <h2 className="font-bold text-xl text-black">Legal</h2>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
