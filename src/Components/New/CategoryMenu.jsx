import {
  FaShapes,
  FaInstagram,
  FaTable,
  FaFileAlt,
  FaChalkboardTeacher,
  FaChartPie,
  FaHeart,
  FaCamera,
  FaVideo,
  FaPrint,
  FaGlobe,
  FaExpandArrowsAlt,
  FaUpload,
  FaEllipsisH,
} from "react-icons/fa";

const items = [
  {
    label: "Logo",
    icon: <FaShapes />,
    bg: "bg-gray-100",
    iconColor: "text-purple-700",
  },
  {
    label: "Instagram Feed Ad",
    icon: <FaInstagram />,
    bg: "bg-red-100",
    iconColor: "text-red-500",
  },
  {
    label: "Sheet",
    icon: <FaTable />,
    bg: "bg-blue-500",
    iconColor: "text-white",
  },
  {
    label: "Doc",
    icon: <FaFileAlt />,
    bg: "bg-cyan-500",
    iconColor: "text-white",
  },
  {
    label: "Whiteboard",
    icon: <FaChalkboardTeacher />,
    bg: "bg-green-500",
    iconColor: "text-white",
  },
  {
    label: "Presentation",
    icon: <FaChartPie />,
    bg: "bg-orange-500",
    iconColor: "text-white",
  },
  {
    label: "Social media",
    icon: <FaHeart />,
    bg: "bg-rose-500",
    iconColor: "text-white",
  },
  {
    label: "Photo editor",
    icon: <FaCamera />,
    bg: "bg-pink-500",
    iconColor: "text-white",
  },
  {
    label: "Video",
    icon: <FaVideo />,
    bg: "bg-fuchsia-500",
    iconColor: "text-white",
  },
  {
    label: "Printables",
    icon: <FaPrint />,
    bg: "bg-purple-500",
    iconColor: "text-white",
  },
  {
    label: "Website",
    icon: <FaGlobe />,
    bg: "bg-blue-600",
    iconColor: "text-white",
  },
  {
    label: "Custom size",
    icon: <FaExpandArrowsAlt />,
    bg: "bg-gray-100",
    iconColor: "text-black",
  },
  {
    label: "Upload",
    icon: <FaUpload />,
    bg: "bg-gray-100",
    iconColor: "text-black",
  },
  {
    label: "More",
    icon: <FaEllipsisH />,
    bg: "bg-gray-100",
    iconColor: "text-purple-700",
  },
];

export default function CategoryMenu() {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-6">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center w-24">
          <div
            className={`w-14 h-14 flex items-center justify-center rounded-full ${item.bg}`}
          >
            <span className={`text-xl ${item.iconColor}`}>{item.icon}</span>
          </div>
          <p className="text-sm text-center text-gray-700 mt-2 leading-tight">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
