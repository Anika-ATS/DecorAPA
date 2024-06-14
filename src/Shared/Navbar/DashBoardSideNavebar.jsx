import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaHome, FaChalkboardTeacher } from "react-icons/fa";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { BiSolidShoppingBags } from "react-icons/bi";
import { LuLampDesk } from "react-icons/lu";

const DashBoardSideNavbar = () => {
  return (
    <div className="">
      <div className="grid grid-cols-10">
        <div className="col-span-2 bg-gradient-to-r from-cyan-900 to-teal-300 min-h-screen p-5">
          <ul>
            <div className="flex mt-16 items-center   text-white mb-5 gap-2">
              <LuLampDesk size={32} className="" />
              <li className="  text-white text-xl  w-full font-mono font-bold">
                <Link to={"home"}>
                  {" "}
                  <a>ADMIN Dashboard</a>
                </Link>
              </li>
            </div>

            <div className="flex items-center    text-white mb-3 gap-2">
              <BiSolidShoppingBags size={32} />
              <li className="  text-white text-xl  w-full font-mono font-bold">
                <Link to={"dashboard/all-products"}> All Products</Link>
              </li>
            </div>

            <div className="flex items-center     text-white mb-3 gap-2">
              <PiHandbagSimpleFill size={28} />

              <li className=" p-2 text-white text-xl  w-full font-mono font-bold">
                <Link to={"dashboard/users"}>Deal All Users</Link>
              </li>
            </div>

            <div className="flex flex-col ">
              <div className="flex items-center text-white mb-3 gap-2 mt-10">
                <FaHome size={28} />
                <li className="  text-xl  w-full font-mono font-bold">
                  <Link to={"/"}>
                    <a>Home</a>
                  </Link>
                </li>
              </div>

              <div className="flex items-center text-white mb-3 gap-2">
                <FaChalkboardTeacher size={28}></FaChalkboardTeacher>
                <li className="  text-xl  w-full font-mono font-bold">
                  <Link to={"/approved"}>
                    <a>Products</a>
                  </Link>
                </li>
              </div>

              <div className="flex items-center text-white mb-3 gap-2">
                <FaChalkboardTeacher size={28}></FaChalkboardTeacher>

                <li className="  text-xl  w-full font-mono font-bold">
                  <Link to={"/users"}>
                    <a>Users</a>
                  </Link>
                </li>
              </div>
            </div>
          </ul>
        </div>

        <div className="col-span-8 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoardSideNavbar;
