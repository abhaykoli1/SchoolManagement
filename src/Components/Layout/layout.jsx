// Layout.jsx
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Auto-hide sidebar on tablet/mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false); // hide on tablet/mobile
      } else {
        setIsSidebarOpen(true); // show on desktop
      }
    };

    handleResize(); // run once on load
    window.addEventListener("resize", handleResize); // watch for resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed z-40 lg:static h-full">
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>
      )}

      {/* Main content */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "lg:ml-0" : "ml-0"
        }`}
      >
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <main className="p-4 overflow-y-auto flex-1 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
