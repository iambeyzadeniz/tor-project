import React from "react";
import Logo from "../Images/Logo.png";
import { RiFacebookFill } from "react-icons/ri";
import { PiInstagramLogoBold } from "react-icons/pi";
import { PiTwitterLogoFill } from "react-icons/pi";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { PiCopyrightBold } from "react-icons/pi";
function Footer() {
  return (
    <div className="relative h-[45vh]  px-80  grid grid-rows-6 grid-cols-6">
      <div className="mt-10 h-[30vh] row-span-3 col-span-3 ">
        <img src={Logo} className="h-[50px] " />
        <p className=" font-medium font-serif text-[10px] text-black pl-3  mr-4 mt-4">
          Experience top-quality health services with Healer Turkey. Our company
          specializes in hair transplantation and dental implants, providing
          exceptional care and professional expertise. Our team of skilled
          professionals ensures the highest standards of treatment, using
          state-of-the-art techniques and technology. Trust Healer Turkey for
          outstanding health services and enjoy the beauty of Turkey along the
          way. Contact us today to start your transformative journey.
        </p>
      </div>
      <div className="mt-10 h-[30vh] row-span-3 col-span-1 ">
        <p className=" font-semibold font-serif text-[12px] text-black mt-3">
          Services
        </p>
        <p className=" font-semibold font-serif text-[9px] text-black  mt-5">
          Skin Care
        </p>
        <p className=" font-semibold font-serif text-[9px] text-black mt-2">
          Hair Transplation
        </p>
        <p className=" font-semibold font-serif text-[9px] text-black mt-2">
          Dental Implants
        </p>
        <p className=" font-semibold font-serif text-[9px] text-black mt-2">
          Eye Treatment
        </p>
        <p className=" font-semibold font-serif text-[9px] text-black mt-2">
          Cancer
        </p>
      </div>
      <div className="mt-10 h-[30vh] row-span-3 col-span-1 ">
        <p className=" font-semibold font-serif text-[12px] text-black mt-3">
          About Us
        </p>
        <p className=" font-semibold font-serif text-[9px] text-black  mt-5">
          Company
        </p>
        <p className=" font-semibold font-serif text-[9px] text-black mt-2">
          Partners
        </p>
        <p className=" font-semibold font-serif text-[9px] text-black mt-2">
          Awards
        </p>
        <p className=" font-semibold font-serif text-[9px] text-black mt-2">
          Networks
        </p>
        <p className=" font-semibold font-serif text-[9px] text-black mt-2">
          Forms
        </p>
      </div>
      <div className="mt-10 h-[30vh] row-span-3 col-span-1 ">
        <p className=" font-semibold font-serif text-[12px] text-black mt-3">
          Follow Us
        </p>
        <div className="flex items-center">
          <RiFacebookFill className="h-[12px] mt-5" />
          <p className=" font-semibold font-serif text-[9px] text-black mt-5">
            Facebook
          </p>
        </div>
        <div className="flex items-center">
          <PiInstagramLogoBold className="h-[12px] mt-2" />
          <p className=" font-semibold font-serif text-[9px] text-black mt-2">
            Instagram
          </p>
        </div>
        <div className="flex items-center">
          <PiTwitterLogoFill className="h-[12px] mt-2" />
          <p className=" font-semibold font-serif text-[9px] text-black mt-2">
            Twitter
          </p>
        </div>
        <div className="flex items-center">
          <PiLinkedinLogoFill className="h-[12px] mt-2" />
          <p className=" font-semibold font-serif text-[9px] text-black mt-2">
            Linkedin
          </p>
        </div>
      </div>
      <div className="row-span-1 col-span-6 border-solid border-t-2 border-slate-300 mt-[100px]"></div>
      <div className=" flex justify-between  px-80 pt-[25px] row-span-1 col-span-6 absolute inset-x-0 bottom-0 h-[70px] w-full">
        <div className="flex">
          <PiCopyrightBold className="h-[10px] mt-[2px]" />
          <p className=" font-semibold font-serif text-[9px] text-black ">
            2023 HealerTurkey. All rights reserved.
          </p>
        </div>
        <div className="flex mr-5 ">
          <p className=" font-semibold font-serif text-[9px] text-black mr-7">
            Privacy Policy
          </p>
          <p className=" font-semibold font-serif text-[9px] text-black mr-7">
            Terms of Service
          </p>
          <p className=" font-semibold font-serif text-[9px] text-black  mr-7">
            Cookies Settings
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
