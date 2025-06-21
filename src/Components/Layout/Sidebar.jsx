import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdDashboard,
  MdAssignment,
  MdHolidayVillage,
  MdOutlineLibraryBooks,
  MdOutlineSettings,
  MdOutlinePayments,
  MdEvent,
  MdSchedule,
} from "react-icons/md";
import {
  FaUser,
  FaChalkboardTeacher,
  FaBuilding,
  FaBook,
  FaUsers,
  FaRobot,
} from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  const [openMenus, setOpenMenus] = useState({});
  const toggleMenu = (menu) => {
    const updatedMenus = {};
    Object.keys(openMenus).forEach((key) => {
      updatedMenus[key] = false;
    });
    setOpenMenus({ ...updatedMenus, [menu]: !openMenus[menu] });
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      toggleSidebar();
    }
  };

  const navItem = (label, icon, submenu = null, menuKey = "", link = "#") => {
    if (!submenu) {
      return (
        <Link
          to={link}
          onClick={handleLinkClick}
          className="group relative flex items-center justify-between overflow-hidden px-4 py-2 text-sm font-medium rounded cursor-pointer transition duration-300 hover:bg-white hover:text-[#0F2169]"
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-[#3D5EE1] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></span>
          <div className="flex items-center gap-2 z-10">
            {icon}
            <span>{label}</span>
          </div>
        </Link>
      );
    } else {
      return (
        <div>
          <div
            onClick={() => toggleMenu(menuKey)}
            className="group relative flex items-center justify-between overflow-hidden px-4 py-2 text-sm font-medium cursor-pointer rounded hover:bg-white hover:text-[#0F2169] transition duration-300"
          >
            <span className="absolute left-0 top-0 h-full w-1 bg-[#3D5EE1] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></span>
            <div className="flex items-center gap-2 z-10">
              {icon}
              <span>{label}</span>
            </div>
            <div className="z-10">
              {openMenus[menuKey] ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </div>
          </div>
          {openMenus[menuKey] && (
            <ul className="ml-6 mt-1 space-y-1 text-sm text-gray-200">
              {submenu.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={handleLinkClick}
                    className="block pl-4 py-1 rounded hover:bg-white hover:text-[#0F2169] transition duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }
  };

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.35 }}
          className="w-64 h-screen bg-[#0F2169] text-white flex flex-col fixed z-50 top-0 left-0 lg:relative"
        >
          <button
            className="absolute top-3 right-1 text-red-500 text-3xl lg:hidden cursor-pointer"
            onClick={toggleSidebar}
          >
            <RxCross2 />
          </button>

          <div className="bg-white text-[#3D5EE1] text-center  h-[50px] flex items-center justify-center shado font-bold text-xl">
            EDU DASHBOARD
          </div>

          <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-3 text-sm">
            <p className="text-gray-400 uppercase px-2">Main Menu</p>

            {navItem(
              "Dashboard",
              <MdDashboard />,
              ["Admin Dashboard", "Teacher Dashboard", "Student Dashboard"],
              "dashboard"
            )}
            {navItem(
              "Students",
              <FaUser />,
              ["Student List", "Add Student", "Student Attendance"],
              "students"
            )}
            {navItem(
              "Teachers",
              <FaChalkboardTeacher />,
              ["Teacher List", "Add Expert Teacher"],
              "teachers"
            )}
            {navItem(
              "Departments",
              <FaBuilding />,
              ["All Departments", "Add Department"],
              "departments"
            )}
            {navItem(
              "Subjects",
              <FaBook />,
              ["All Subjects", "Add Subject"],
              "subjects"
            )}

            <p className="text-gray-400 uppercase px-2 pt-3">Management</p>

            {navItem(
              "Accounts",
              <FaUsers />,
              ["Invoices", "Payments"],
              "accounts"
            )}
            {navItem(
              "Attendance Management",
              <MdAssignment />,
              null,
              "",
              "/attendance-management"
            )}
            {navItem(
              "Homework & Assignment",
              <MdAssignment />,
              null,
              "",
              "/home-assignment"
            )}
            {navItem("Holiday", <MdHolidayVillage />, null, "", "/holiday")}
            {navItem("Fees", <MdOutlinePayments />, null, "", "/fees")}
            {navItem("Exam & Result list", <PiExamFill />, null, "", "/exams")}
            {navItem(
              "Exam & Result list",
              <FaChalkboardTeacher />,
              ["Exam Result", "Single Result", "Multiple Result"],
              "exam-results"
            )}
            {navItem(
              "Class & Section",
              <BsFillGrid1X2Fill />,
              null,
              "",
              "/classes"
            )}
            {navItem("Events", <MdEvent />, null, "", "/events")}
            {navItem("Time Table", <MdSchedule />, null, "", "/schedule")}
            {navItem(
              "Library",
              <MdOutlineLibraryBooks />,
              null,
              "",
              "/bock-library"
            )}
            {navItem(
              "Transport Management",
              <MdOutlineLibraryBooks />,
              null,
              "",
              "/transport-management"
            )}
            {navItem(
              "Hostel Management",
              <MdOutlineLibraryBooks />,
              null,
              "",
              "/hostel-management"
            )}
            {navItem(
              "Inventory Managementlist",
              <MdOutlineLibraryBooks />,
              null,
              "",
              "/inventory-management"
            )}
            {navItem(
              "Parent Portal",
              <MdOutlineLibraryBooks />,
              null,
              "",
              "/Parent-portal"
            )}
            {navItem(
              "Online Admission",
              <MdOutlineLibraryBooks />,
              null,
              "",
              "/Online-Admission"
            )}
            {navItem("AI Assistant", <FaRobot />, null, "", "/ai-assistant")}
            {navItem("Settings", <MdOutlineSettings />, null, "", "/settings")}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
