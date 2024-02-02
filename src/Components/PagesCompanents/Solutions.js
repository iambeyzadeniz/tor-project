import React from "react";
import { PiSyringeBold } from "react-icons/pi";
import { PiToothFill } from "react-icons/pi";
function Solutions() {
  return (
    <div className="h-screen bg-cover mt-[40px] w-full pl-[20%] pr-[20%]  ">
      <div className="h-2/5  bg-white flex ">
        <div className="w-[50%]">
          <h2 className="text-teal-400  font-serif text-emerald-950 font-semibold text-[13px]">
            HANDS OF PERFECTİON
          </h2>
          <h1 className="text-emerald-950 font-serif text-emerald-950 font-bold text-[25px] mt-[10px]">
            <span className="block">Dedicated Healthcare</span>
            <span className="block">You Deserve</span>
          </h1>
          <p className="mt-[50px] font-medium font-serif text-xs">
            Healer Turkey offers various hair transplant methods that will
            deliver the best results for your specific hair loss problems.
          </p>
        </div>
        <div className="w-[50%] pl-[40px]">
          <p className="font-medium font-serif text-xs">
            Your medical experience is in safe hands. Our professional patient
            support team can plan your schedule, adapt to your preferences, and
            even include customizable solutions.{" "}
          </p>
          <div className="flex mt-[30px]">
            <div className="w-[50%]">
              <PiSyringeBold className="w-[20px] h-[20px] text-teal-400" />

              <h2 className="mt-[10px] text-teal-400  font-serif text-emerald-950 font-semibold text-[13px]">
                HAİR TRANSPLANT
              </h2>
              <p className="mt-[10px] font-medium font-serif text-xs">
                {" "}
                Healer Turkey offers various hair transplant methods that will
                deliver the best results for your specific hair loss problems.{" "}
              </p>
            </div>
            <div className="w-[50%] ml-[30px]">
              <PiToothFill className="w-[20px] h-[20px] text-teal-400" />

              <h2 className="mt-[10px] text-teal-400  font-serif text-emerald-950 font-semibold text-[13px]">
                DENTISTRY
              </h2>
              <p className="mt-[10px] font-medium font-serif text-xs">
                Healer Turkey's expert team works meticulously to create the
                healthiest and the most natural smile for you.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded h-3/6 bg-[#7ca1a7]" />
    </div>
  );
}

export default Solutions;
