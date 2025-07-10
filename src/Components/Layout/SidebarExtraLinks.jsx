import React from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../../common/theme";
import { MdKeyboardArrowRight } from "react-icons/md";

const SidebarExtraLinks = ({ subMenuItems, setIsSidebarOpen }) => {
  return (
    <section className=" flex flex-col gap-2 pt-3">
      {subMenuItems.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          onClick={() => setIsSidebarOpen(false)}
          className="text-[13px] flex  justify-between font-[450] hover:font-[500] bg-white shadow-sm hover:scale-110 transition-all duration-500 py-2 px-3 rounded-lg text-purple-600 hover:text-purple-800 cursor-pointer mb-1"
        >
          {item.label}
          <MdKeyboardArrowRight size={17} />
        </Link>
      ))}
    </section>
  );
};

export default SidebarExtraLinks;
