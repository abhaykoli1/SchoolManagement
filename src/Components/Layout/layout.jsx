import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        } pt-20 p-5`}
      >
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
