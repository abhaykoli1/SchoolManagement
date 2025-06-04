import React from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <header
      className={`h-16 bg-white shadow-md fixed top-0 right-0 z-10 flex items-center justify-between transition-all duration-300 ${
        isSidebarOpen ? "left-64" : "left-16"
      } `}
    >
      <div className="flex items-center gap-4 pl-4">
        <FaBars
          className="text-xl text-gray-700 cursor-pointer"
          onClick={toggleSidebar}
        />
        <input
          type="text"
          placeholder="Search here"
          className="border border-gray-300 rounded px-4 py-1 text-sm w-64"
        />
      </div>
      <div className="flex items-center gap-4 pr-4">
        <div className="text-right text-sm hidden md:block">
          <div className="font-medium">Name</div>
          <div className="text-gray-500 text-xs">Administrator</div>
        </div>
        <FaUserCircle className="text-3xl text-gray-600" />
      </div>
    </header>
  );
};

export default Header;
