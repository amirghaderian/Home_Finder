import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { RiUserAddLine } from "react-icons/ri";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Here you can implement the logic to toggle dark/light mode in your app
  };

  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 ">
          {/* Login Icon */}
          <a href="#" className="text-white hover:text-gray-300 underlinTitr">
            <IoIosLogIn fontSize={"25px"} />
          </a>

          {/* Register Icon */}
          <a
            href="#"
            className="w-[170px] md:w-[570px]  text-[18px] font-[VasirBold] text-white lg:w-fit underlinTitr"
          >
            <RiUserAddLine fontSize={"25px"} />
          </a>
        </div>
        {/* Brand Logo */}
        <div className="flex  items-center justify-center">
          <a href="#" className="text-white text-lg font-bold">
            آگهی های فروش مسکن
          </a>
        </div>
        <div className=" flex gap-4">
          <div className="underlinTitr">
            <IoHomeOutline fontSize={"25px"} className="text-white " />
          </div>
          {/* Dark Mode / Light Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-white hover:text-gray-300 focus:outline-none "
          >
            {darkMode ? (
              <MdDarkMode fontSize={"25px"} />
            ) : (
              <CiLight fontSize={"25px"} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Layout;
