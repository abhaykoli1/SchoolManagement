// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 py-8 bg-gray-100 text-center overflow-hidden">
      <h1 className="text-6xl font-bold text-[#0b1d6e]">404</h1>
      <p className="text-xl md:text-2xl font-semibold mt-4 text-gray-700">
        Oops! Page not found.
      </p>
      <p className="text-gray-500 mt-2">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-2 text-white bg-[#0b1d6e] rounded-full hover:bg-[#091758] transition"
      >
        Go to Home
      </Link>
    </div>
  );
}
