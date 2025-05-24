import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-purple-600 flex flex-col items-center justify-center text-white px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      {error?.statusText && (
        <p className="text-sm text-purple-100 mb-6">{error.statusText}</p>
      )}
      <Link
        to="/"
        className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
