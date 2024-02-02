import React from "react";
import Image3 from "../../Images/people.png";
function Conselors() {
  return (
    <div className="w-full h-[95vh] bg-teal-900 py-[30px] px-80 grid grid-rows-3 grid-cols-5 ">
      <div className="row-span-1 col-span-5  flex justify-center">
        <div className="text-center w-[500px] ">
          <h2 className=" mt-[10px] text-teal-400  font-serif text-emerald-950 font-semibold text-[13px]">
            #FEELDIFFERENT{" "}
          </h2>
          <h1 className="text-emerald-950 font-serif text-white font-bold text-[35px] mt-[10px]">
            BEFORE & AFTER
          </h1>
          <p className="mt-[10px] font-semibold font-serif text-xs text-white ">
            Explore the before and after pictures of our clients to witness
            their transformation journey with Healer Turkey.{" "}
          </p>
        </div>
      </div>
      <div className="row-span-2 col-span-2  ">
        <button className="font-serif text-[11px] font-semibold w-[80px] h-7 bg-teal-400 ">
          DENTISTRY
        </button>
        <h1 className="text-emerald-950 font-serif text-white font-medium text-[20px] mt-[10px]">
          HAIR TRANSPLANT
        </h1>
        <p className="mt-[10px] font-semibold font-serif text-xs text-white ">
          The patient requested their hair to look dense yet natural in line
          with their age and frame.{" "}
        </p>
        <div className="mt-[30px]">
          <h2 className=" mt-[10px] text-teal-400  font-serif text-emerald-950 font-semibold text-xs">
            NAME,SURNAME{" "}
          </h2>
          <p className="mt-[10px] font-semibold font-serif text-xs text-white ">
            Uğur A.
          </p>
          <h2 className=" mt-[10px] text-teal-400  font-serif text-emerald-950 font-semibold text-xs">
            OPERATIONS
          </h2>
          <p className="mt-[10px] font-semibold font-serif text-xs text-white ">
            Hsir Transplantation
          </p>
          <h2 className=" mt-[10px] text-teal-400  font-serif text-emerald-950 font-semibold text-xs">
            DATE
          </h2>
          <p className="mt-[10px] font-semibold font-serif text-xs text-white ">
            10.02.2022
          </p>
          <h2 className=" mt-[10px] text-teal-400  font-serif text-emerald-950 font-semibold text-xs">
            COUNTRY
          </h2>
          <p className="mt-[10px] font-semibold font-serif text-xs text-white ">
            Germany
          </p>
          <h2 className=" mt-[10px] text-teal-400  font-serif text-emerald-950 font-semibold text-xs">
            AGE{" "}
          </h2>
          <p className="mt-[10px] font-semibold font-serif text-xs text-white ">
            39
          </p>
          <button className="font-serif text-[10px] w-20 h-8 text-white mt-[20px] text-xs border-teal-400 border-solid border-[1px] ">
            NEXT
          </button>
        </div>
      </div>
      <div className="row-span-2 col-span-3   ">
        <img className="h-full" src={Image3} />
      </div>
    </div>
  );
}

export default Conselors;
