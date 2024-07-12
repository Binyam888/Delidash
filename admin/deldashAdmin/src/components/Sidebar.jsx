import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar w-[18%]  min-h-[100vh] border-[1.5px] border-slate-300 border-t-0">
      <div className="sidebar-options pt-[50px] pl-[20%] flex flex-col gap-[20px]">
        <NavLink
          to={"/add"}
          className={({ isActive }) =>
            isActive
              ? "sidebar-option flex align-middle items-center gap-[12px] border-[1px] border-red-600 border-r-0 py-[8px] px-[10px] rounded-l-[3px] cursor-pointer bg-red-400 "
              : "sidebar-option flex align-middle items-center gap-[12px] border-[1px] border-slate-300 border-r-0 py-[8px] px-[10px] rounded-l-[3px] cursor-pointer"
          }
        >
          <img src={assets.add_icon} alt="" />
          <p className="hidden lg:flex">Add Item</p>
        </NavLink>

        <NavLink
          to={"/list"}
          className={({ isActive }) =>
            isActive
              ? "sidebar-option flex align-middle items-center gap-[12px] border-[1px] border-red-600 border-r-0 py-[8px] px-[10px] rounded-l-[3px] cursor-pointer bg-red-400"
              : "sidebar-option flex align-middle items-center gap-[12px] border-[1px] border-slate-300 border-r-0 py-[8px] px-[10px] rounded-l-[3px] cursor-pointer"
          }
        >
          <img src={assets.order_icon} alt="" />
          <p className="hidden lg:flex">List Item</p>
        </NavLink>
        <NavLink
          to={"/order"}
          className={({ isActive }) =>
            isActive
              ? "sidebar-option flex align-middle items-center gap-[12px] border-[1px] border-red-600 border-r-0 py-[8px] px-[10px] rounded-l-[3px] cursor-pointer bg-red-400"
              : "sidebar-option flex align-middle items-center gap-[12px] border-[1px] border-slate-300 border-r-0 py-[8px] px-[10px] rounded-l-[3px] cursor-pointer"
          }
        >
          <img src={assets.order_icon} alt="" />
          <p className="hidden lg:flex">Orders</p>
        </NavLink>

        {/* <div className="sidebar-option flex align-middle items-center gap-[12px] border-[1px] border-slate-300 border-r-0 py-[8px] px-[10px] rounded-l-[3px] cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p className="hidden lg:flex">List Items</p>
        </div>
        <div className="sidebar-option flex align-middle items-center gap-[12px] border-[1px] border-slate-300 border-r-0 py-[8px] px-[10px] rounded-l-[3px] cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p className="hidden lg:flex">Orders</p>
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
