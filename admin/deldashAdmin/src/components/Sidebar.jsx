import React from "react";
import { assets } from "../assets/assets";

function Sidebar() {
  return (
    <div className="sidebar w-[18%]  min-h-[100vh] border-[1.5px] border-slate-300 border-t-0">
      <div className="sidebar-options pt-[50px] pl-[20%] flex flex-col gap-[20px]">
        <div className="sidebar-option flex align-middle items-center gap-[12px] border-[1px] border-slate-300 border-r-0 py-[8px] px-[10px] rounded-l-[3px] cursor-pointer">
          <img src={assets.add_icon} alt="" />
          <p className="hidden lg:flex">Add Item</p>
        </div>
        <div className="sidebar-option flex align-middle items-center gap-[12px] border-[1px] border-slate-300 border-r-0 py-[8px] px-[10px] rounded-l-[3px] cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p className="hidden lg:flex">List Items</p>
        </div>
        <div className="sidebar-option flex align-middle items-center gap-[12px] border-[1px] border-slate-300 border-r-0 py-[8px] px-[10px] rounded-l-[3px] cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p className="hidden lg:flex">Orders</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
