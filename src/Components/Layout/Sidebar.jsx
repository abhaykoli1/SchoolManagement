import { MdDashboard, MdLogout } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`h-screen bg-[#0F2169] text-white flex flex-col fixed top-0 left-0 z-20 transition-all duration-300 ${
        isSidebarOpen ? "w-64" : "w-16"
      }`}
    >
      <div
        className={`text-2xl font-bold  h-16 flex items-center justify-center bg-white `}
      >
        {isSidebarOpen ? (
          <h1
            className={`${
              isSidebarOpen ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300  text-[#3D5EE1]`}
          >
            EDU DASHBOARD
          </h1>
        ) : (
          <h1 className="text-[#3D5EE1]">EDU</h1>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-4 space-y-3 text-sm">
          <li className="font-semibold uppercase text-gray-400">
            {isSidebarOpen ? "Main Menu" : ""}
          </li>
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer flex items-center gap-2">
            <MdDashboard /> {isSidebarOpen && "Dashboard"}
          </li>
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">
            {isSidebarOpen && "Admin Dashboard"}
          </li>
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">
            {isSidebarOpen && "Teacher Dashboard"}
          </li>
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">
            {isSidebarOpen && "Student Dashboard"}
          </li>

          <li className="font-semibold uppercase text-gray-400 mt-4">
            {isSidebarOpen && "Management"}
          </li>
          {[
            "Students",
            "Teachers",
            "Departments",
            "Subjects",
            "Homework & Assignment",
            "Holiday",
            "Fees",
            "Exam & Result list",
            "Library",
            "Settings",
          ].map((text, i) => (
            <li
              key={i}
              className="hover:bg-blue-700 p-2 rounded cursor-pointer"
            >
              {isSidebarOpen && text}
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-blue-700">
        <button className="flex items-center gap-2 text-sm hover:text-red-400">
          <MdLogout /> {isSidebarOpen && "Logout"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
