import { useState } from "react";
import {
  FaBars,
  FaBell,
  FaSearch,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaCompress,
  FaUserClock,
} from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { FcUnlock } from "react-icons/fc";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { GoScreenFull } from "react-icons/go";
import { Link } from "react-router-dom";
import { useFullscreen } from "../../common/useFullscreen";
import { logout } from "../../utils/logout";
import { COLORS } from "../../common/theme";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const { isFullScreen, toggleFullScreen } = useFullscreen();

  return (
    <>
      <header className="flex fixed top-0 items-center justify-between pr-4 pl-1 py-2 bg-white z-20 h-[55px]  left-[76px] right-0 ">
        <div className="flex items-center gap-2">
          {/* <Link to="/">
            <h1 className={`text-${COLORS.primary} font-bold text-lg`}>
              {isSidebarOpen ? "EDU" : "EDU"}
            </h1>
          </Link> */}

          <div className="hidden sm:block relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search here"
              // className="search-input"

              className={`${COLORS.border} !pl-9 !pr-3 !py-2 !rounded  ${COLORS.primary_light} !bg- neutral-100 !text-sm !outline-none !w-48 sm:!w-64`}
            />
          </div>

          <button
            onClick={() => setShowSearchModal(true)}
            className="block sm:hidden ml-2 text-[#3D5EE1] rounded-full bg-neutral-100 cursor-pointer p-1.5"
          >
            <FaSearch />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 sm:gap-4 pe-2">
            <img
              src="https://flagcdn.com/us.svg"
              alt="Language"
              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${COLORS.primary_light}  cursor-pointer`}
            />
            <FaBell
              className={`w-6 h-6 sm:w-8 sm:h-8 text-gray-600 rounded-full ${COLORS.primary_light} cursor-pointer p-1.5 sm:p-2`}
            />

            {isFullScreen ? (
              <FaCompress
                onClick={toggleFullScreen}
                className={`w-6 h-6 sm:w-8 sm:h-8 text-gray-600 rounded-full ${COLORS.primary_light}  cursor-pointer p-1.5 sm:p-2`}
              />
            ) : (
              <GoScreenFull
                onClick={toggleFullScreen}
                className={`w-6 h-6 sm:w-8 sm:h-8 text-gray-600 rounded-full ${COLORS.primary_light}   cursor-pointer p-1.5 sm:p-2`}
              />
            )}
          </div>

          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setShowProfileMenu((prev) => !prev)}
            >
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <div className="text-sm leading-tight text-right hidden sm:block">
                <p className="text-gray-800 font-semibold">Ryan Taylor</p>
                <p className="text-xs text-blue-500">Administrator</p>
              </div>
              <MdKeyboardArrowDown className="text-gray-600" />
            </div>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 text-sm z-50">
                <Link
                  to="#"
                  onClick={() => setShowProfileMenu(false)}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <FaUserCircle className="text-blue-500" />
                  <span>Profile</span>
                </Link>
                <Link
                  to="login"
                  onClick={() => setShowProfileMenu(false)}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <IoLogIn className="text-blue-500" />
                  <span>Login</span>
                </Link>
                <Link
                  to="register"
                  onClick={() => setShowProfileMenu(false)}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <FaUserClock className="text-blue-500" />
                  <span>Register</span>
                </Link>
                <Link
                  to="forgot-password"
                  onClick={() => setShowProfileMenu(false)}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <FcUnlock className="text-blue-500" />
                  <span>Forgot Password</span>
                </Link>
                <Link
                  to="settings"
                  onClick={() => setShowProfileMenu(false)}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <FaCog className="text-gray-500" />
                  <span>Settings</span>
                </Link>
                <hr className="my-2 border-gray-200" />
                <p
                  onClick={() => {
                    setShowProfileMenu(false);
                    logout();
                  }}
                  className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 text-red-500"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </header>

      {showSearchModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-start pt-10">
          <div className="bg-white w-[90%] max-w-sm rounded-lg relative shadow-lg">
            <button
              className="absolute top-3 right-2 text-red-500 text-2xl"
              onClick={() => setShowSearchModal(false)}
            >
              <RxCross2 />
            </button>
            <input
              type="text"
              placeholder="Search here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              autoFocus
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
