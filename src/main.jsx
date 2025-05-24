import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Error from "./Components/Error/Error.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
import { CartProvider } from "./Components/context/CartContext.jsx";
import { ToastContainer } from "react-toastify";
import Contact from "./Components/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "stats",
        element: <Statistics />,
        loader: () => fetch("/product.json"),
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "products/:product",
        element: <ProductDetails />,
        loader: () => fetch("/product.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </CartProvider>
  </StrictMode>
);
