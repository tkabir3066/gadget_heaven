import React, { useEffect } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  useEffect(() => {
    document.title = "Gadget Heaven | Contact";
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you shortly.");
  };

  return (
    <div className="bg-purple-600 text-white text-center py-8 px-4 rounded-xl">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white text-black p-4 rounded-lg max-w-md mx-auto space-y-4"
      >
        <input
          type="text"
          required
          placeholder="Your name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          required
          placeholder="Enter Your Email"
          className="w-full p-2 border rounded"
        />
        <textarea
          rows="4"
          required
          placeholder="Your message"
          className="w-full p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
