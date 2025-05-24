import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Gadget Heaven | Dashboard";
  }, []);

  const {
    cartItems,
    removeFromCart,
    clearCart,
    wishlistItems,
    removeFromWishlist,
    addToCart,
  } = useCart();

  const [sortedCart, setSortedCart] = useState([]);
  const [purchaseTotal, setPurchaseTotal] = useState(0);
  const [activeTab, setActiveTab] = useState("cart"); // 'cart' or 'wishlist'

  useEffect(() => {
    setSortedCart(cartItems);
  }, [cartItems]);

  const handleSort = () => {
    const sorted = [...sortedCart].sort((a, b) => b.price - a.price);
    setSortedCart(sorted);
  };

  const totalCost = sortedCart.reduce((sum, item) => sum + item.price, 0);

  const handlePurchase = () => {
    setPurchaseTotal(totalCost);
    document.getElementById("my_modal_5").showModal();
    clearCart();
  };

  return (
    <div className="bg-purple-600 text-white text-center py-10 rounded-xl">
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <p className="text-sm max-w-2xl mx-auto">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>

      {/* Tabs for Cart/Wishlist */}
      <div className="flex items-center flex-col md:flex-row justify-center md:gap-6 gap-2 mt-6">
        <button
          className={`btn w-1/5 ${
            activeTab === "cart" ? "btn-primary" : "bg-white text-purple-700"
          }`}
          onClick={() => setActiveTab("cart")}
        >
          Cart ({cartItems.length})
        </button>
        <button
          className={`btn w-1/5 ${
            activeTab === "wishlist"
              ? "btn-primary"
              : "bg-white text-purple-700"
          }`}
          onClick={() => setActiveTab("wishlist")}
        >
          Wishlist ({wishlistItems.length})
        </button>
      </div>

      {/* Cart Section */}
      {activeTab === "cart" && (
        <div className="max-w-6xl mx-auto mt-10 bg-white rounded-lg p-6 text-gray-800">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={handleSort}
                  className="btn bg-purple-100 hover:bg-purple-200 text-purple-700"
                >
                  Sort by Price (High to Low)
                </button>
                <p className="text-lg font-semibold">
                  Total: ${totalCost.toFixed(2)}
                </p>
              </div>

              <div className="flex flex-col gap-4 text-left">
                {sortedCart.map(
                  ({
                    product_id,
                    product_title,
                    price,
                    description,
                    product_image,
                  }) => (
                    <div
                      key={product_id}
                      className="border-2 border-purple-600 p-4 rounded-lg flex flex-col md:flex-row items-center justify-between"
                    >
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <img
                          src={product_image}
                          className="w-48 rounded-md object-contain"
                        />
                        <div>
                          <h3 className="font-semibold">{product_title}</h3>
                          <p>{description}</p>
                          <p>Price: ${price}</p>
                        </div>
                      </div>
                      <button
                        className="text-red-400 font-semibold cursor-pointer"
                        onClick={() => removeFromCart(product_id)}
                      >
                        ❌
                      </button>
                    </div>
                  )
                )}
              </div>

              <div className="mt-6 text-right">
                <button
                  onClick={handlePurchase}
                  className="btn bg-purple-600 text-white hover:bg-purple-700"
                >
                  Purchase
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Wishlist Section */}
      {activeTab === "wishlist" && (
        <div className="max-w-6xl mx-auto mt-10 bg-white rounded-lg p-6 text-gray-800">
          <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>

          {wishlistItems.length === 0 ? (
            <p>Your wishlist is empty</p>
          ) : (
            <div className="flex flex-col gap-4 text-left">
              {wishlistItems.map(
                ({
                  product_id,
                  product_title,
                  price,
                  description,
                  product_image,
                }) => (
                  <div
                    key={product_id}
                    className="border-2 border-purple-600 p-4 rounded-lg flex flex-col md:flex-row items-center justify-between"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      <img
                        src={product_image}
                        className="w-48 rounded-md object-contain"
                      />
                      <div>
                        <h3 className="font-semibold">{product_title}</h3>
                        <p>{description}</p>
                        <p>Price: ${price}</p>
                        <button
                          onClick={() => {
                            addToCart({
                              product_id,
                              product_title,
                              price,
                              description,
                            });
                            removeFromWishlist(product_id);
                          }}
                          className="btn mt-2 bg-purple-600 text-white hover:bg-purple-700"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromWishlist(product_id)}
                      className="text-red-400 text-xl"
                    >
                      ❌
                    </button>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      )}

      {/* Purchase Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-purple-600">
          <h3 className="font-bold text-lg">Thank you for your purchase! 🎉</h3>
          <p className="py-4">Your order has been placed successfully.</p>
          <p className="font-semibold">Total: ${purchaseTotal.toFixed(2)}</p>
          <div className="modal-action">
            <form method="dialog">
              <NavLink to="/">
                <button className="btn">Close</button>
              </NavLink>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
