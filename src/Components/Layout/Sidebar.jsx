import {
  FaChartBar,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaClipboardList,
  FaUmbrellaBeach,
  FaMoneyBill,
  FaSortNumericDown,
  FaKey,
  FaBoxes,
  FaClock,
  FaBookOpen,
  FaBell,
} from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { RiMenuUnfold2Line } from "react-icons/ri";

const menuItems = [
  {
    icon: <FaChartBar />,
    label: "Dashboard",
    children: [
      { label: "Admin Dashboard", link: "admin-dashboard" },
      { label: "Teacher Dashboard", link: "teacher-dashboard" },
      { label: "Student Dashboard", link: "student-dashboard" },
    ],
  },
  {
    icon: <FaUserGraduate />,
    label: "Student",
    children: [
      { label: "Student List", link: "/students/list" },
      { label: "Add Student", link: "/students/add" },
      { label: "Student Attendance", link: "/students/attendance" },
    ],
  },
  {
    icon: <FaChalkboardTeacher />,
    label: "Teachers",
    children: [
      { label: "Teacher List", link: "/teachers/list" },
      { label: "Add Expert Teacher", link: "/teachers/add" },
    ],
  },
  {
    icon: <FaBook />,
    label: "Subjects",
    children: [
      { label: "All Subjects", link: "/subjects" },
      { label: "Add Subject", link: "/subjects/add" },
    ],
  },
  {
    icon: <GiNotebook />,
    label: "Grades",
  },
  {
    icon: <FaClipboardList />,
    label: "Home Work",
  },
  {
    icon: <FaUmbrellaBeach />,
    label: "Holiday",
  },
  {
    icon: <FaMoneyBill />,
    label: "Fees",
    children: [
      { label: "Invoices", link: "/fees/invoices" },
      { label: "Payments", link: "/fees/payments" },
    ],
  },
  {
    icon: <FaSortNumericDown />,
    label: "Exam & Result",
    children: [
      { label: "Exam Result", link: "/exams/result" },
      { label: "Single Result", link: "/exams/single" },
      { label: "Multiple Result", link: "/exams/multiple" },
    ],
  },
  {
    icon: <FaKey />,
    label: "Class & Section",
  },
  {
    icon: <FaBoxes />,
    label: "Combination",
    children: [
      { label: "All Departments", link: "/departments" },
      { label: "Add Department", link: "/departments/add" },
    ],
  },
  {
    icon: <FaClock />,
    label: "Time Table",
  },
  {
    icon: <FaBookOpen />,
    label: "Library",
  },
];

export default function Sidebar({
  toggleSidebar,
  isSidebarOpen,
  setSubMenuItems,
  setIsSidebarOpen,
}) {
  const handleClick = (item) => {
    setIsSidebarOpen(true);

    if (item.children) {
      setSubMenuItems(item.children); // send child array
    } else {
      setSubMenuItems([]); // clear submenu if no children
    }
  };
  console.log("toggleSidebar", isSidebarOpen);
  return (
    <div className="h-screen  fixed left-[1px] top-0 bottom-0 bg-white !rounded-tl-3xl    borde  border-gray-400  w-20 bg-whit -md text-purple-700 flex flex-col items-center justify-between ">
      {/* Menu */}
      <div className="bg-white  flex items-center rounded-tl-3xl justify-center w-full h-16 ml-1 mb-1 pt-2">
        {isSidebarOpen ? (
          <RiMenuUnfold2Line
            onClick={toggleSidebar}
            className="text-3xl cursor-pointer"
          />
        ) : (
          <RiMenuUnfoldLine
            onClick={toggleSidebar}
            className="text-3xl cursor-pointer"
          />
        )}
      </div>

      <div className="absolute top-14 left-0 w-full h-10 pointer-events-none bg-gradient-to-b from-[#ffffff] via-[#ffffffed] to-transparent  z-10" />
      <div className="absolute bottom-0 left-0 w-full h-10 pointer-events-none bg-gradient-to-t from-[#ffffff] via-[#ffffffed] to-transparent  z-10" />

      <div className="relative flex flex-col pt-4 pb-14 items-center space-y-6 overflow-y-auto px-4 h-full">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(item)}
            className="flex flex-col hover:scale-105 transition-all duration-500 cursor-pointer items-center text-center text-purple-600 hover:text-purple-800"
          >
            <div className="text-2xl">{item.icon}</div>
            <span className="text-[10px] mt-1 font-[400] leading-tight">
              {item.label}
            </span>
          </div>
        ))}
      </div>
      {/* </div> */}

      {/* Bottom Items */}
      {/* <div className="flex flex-col items-center gap-6">
        <FaBell className="text-lg" />
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold text-sm">
            CE
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-pink-600 text-white text-[10px] flex items-center justify-center">
            A
          </div>
        </div>
      </div> */}
    </div>
  );
}
