import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Images/Logo.png";

function Header() {
  return (
    <div className="w-full flex absolute top-0 justify-center">
      <nav className="flex bg-white justify-between mt-10 w-2/4 h-14 items-center ">
        <img className="h-10 pl-2" src={Logo} />

        <div className="flex justify-center items-center gap-6 pr-6">
          <div className="   text-center">
            <NavLink className=" text-[10px] font-bold font-serif" to="/">
              HOME
            </NavLink>
          </div>
          <div className=" text-center">
            <NavLink
              className=" text-[10px] font-bold font-serif"
              to="/services"
            >
              OUR SERVİCES
            </NavLink>
          </div>
          <div className=" text-center">
            <NavLink className=" text-[10px]  font-bold font-serif" to="/about">
              ABOUT US
            </NavLink>
          </div>
          <div className=" text-center">
            <NavLink
              className=" text-[10px] font-bold font-serif"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
          <div className=" text-center">
            <button className=" bg-teal-400 text-xs p-1 font-bold ">
              + 545 606 89 24
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
