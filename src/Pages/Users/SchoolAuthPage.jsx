import React, { useState } from "react";
import { COLORS } from "../../common/theme";
import SchoolRegistration from "./SchoolRegistration";
import { Outlet } from "react-router-dom";

const SchoolAuthPage = () => {
  return (
    <div
      className={`${COLORS.primary_light_bg} max-h-screen min-h-screen flex items-center justify-center  text-white`}
    >
      <div className="w-full max-h-screen min-h-screen  bg-gray-900  flex flex-col md:flex-row ">
        {/* Left */}
        <div className="w-full pl-20 md:w-1/2 flex flex-col justify-center mb-10 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Design with us
          </h1>
          <p className="text-gray-300 mb-6">
            Access to thousands of design resources and templates
          </p>
          <div className="text-white text-4xl">╋ ✦ ✧</div>
          <svg
            className="mt-10"
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="160"
            fill="none"
            viewBox="0 0 160 160"
          >
            <path
              stroke="white"
              strokeWidth="2"
              d="M30 120L50 60L100 75L80 140Z"
            />
            <circle cx="30" cy="30" r="5" fill="white" />
            <circle cx="130" cy="50" r="5" fill="white" />
            <circle cx="40" cy="140" r="4" stroke="white" strokeWidth="2" />
            <circle cx="110" cy="130" r="3" fill="white" />
          </svg>
        </div>

        <div className="w-full overflow-y-scroll max-h-screen md:w-1/2 bg-white text-black p-6 md:p-10 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SchoolAuthPage;
