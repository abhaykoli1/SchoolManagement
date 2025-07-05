import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex -ml-1 min-h-screen overflow-hidden relative">
      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: -260, opacity: 1 }}
            animate={{ x: 1, opacity: 1 }}
            exit={{ x: -260, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" w-64 h-full fixed  z-50 bg-white shadow-lg"
          >
            <Sidebar
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div
        className={`transition-all duration-500 ease-in-out w-full ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <main className="p-4 overflow-y-auto flex-1 bg-gray-50 h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
