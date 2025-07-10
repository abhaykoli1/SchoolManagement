import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SidebarExtraLinks from "./SidebarExtraLinks";
import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { COLORS } from "../../common/theme";
import { FiLogOut } from "react-icons/fi";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 1024) {
  //       setIsSidebarOpen(false);
  //     } else {
  //       setIsSidebarOpen(true);
  //     }
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const [subMenuItems, setSubMenuItems] = useState([]);

  const handleLinksUpdate = (newLinks) => {
    setExtraLinks(newLinks);
  };

  return (
    <div className="flex  relative overflow-hidden ">
      <div className="bg-purple-300 h-screen w-10"></div>
      <Sidebar
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        setSubMenuItems={setSubMenuItems}
        setIsSidebarOpen={setIsSidebarOpen}
      />{" "}
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      {/* Main content */}
      <div className="flex bg-purple-200 right-0 rounded-tl-2xl fixed top-[55px] bottom-0 left-20">
        <div className=" h-full w-52 px-4 flex flex-col justify-betwee top-[65px] fixed !z-0">
          <SidebarExtraLinks
            subMenuItems={subMenuItems}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          {/* <button className="flex  bottom-0 items-center w-full gap-2 text-sm !text-red-600 hover:text-red-800 bg-white px-4 py-2 !rounded-lg shadow hover:shadow-md transition">
            <FiLogOut className="text-lg" />
            Logout
          </button> */}
        </div>

        <div
          className={`transition-all shadow-2xl duration-500 mt-2 !z-10 [60px] overflow-hidden  bg-gradient-to-r from-[#d3f1ff] to-[#e0d2fa] rounded-tl-2xl  ease-in-out w-full ${
            isSidebarOpen ? "ml-52" : "ml-2  [90px]"
          }`}
        >
          <main className="p-4 overflow-y-auto flex-1  h-full">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;

{
  /* <main className="p-4 overflow-y-auto flex-1 bg-gray-50 h-full"> */
}
{
  /* Sidebar */
}
{
  /* <AnimatePresence>
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
      </AnimatePresence> */
}
