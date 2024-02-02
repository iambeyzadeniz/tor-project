import React from "react";
import { PiWhatsappLogo } from "react-icons/pi";
import { PiTelegramLogoDuotone } from "react-icons/pi";

function Details() {
  return (
    <div className="h-[55vh]   w-full">
      <div className="grid grid-rows-4 grid-cols-6 grid-flow-col h-full gap-4">
        <div className="row-span-4 col-span-3 bg-women bg-cover "></div>
        <div className="row-span-3 col-span-1 "></div>
        <div className="flex mr-16 row-span-1 col-span-3  h-[90%]">
          <div className=" w-[33%]  items-center flex justify-center">
            <p className="font-semibold font-serif">Prefer Apps?</p>
          </div>
          <div className=" w-[33%]  items-center flex justify-center">
            <PiWhatsappLogo />
            <p className="font-semibold font-serif ml-1">Whatsapp</p>
          </div>
          <div className=" w-[33%]  items-center flex justify-center">
            <div className="h-[35px] w-[35px] bg-teal-100 rounded-full absolute end-[225px] mb-[18px]"></div>
            <PiTelegramLogoDuotone />
            <p className="font-semibold font-serif ml-1">Telegram</p>
          </div>
        </div>
        <div className="mr-16 row-span-3 col-span-2 ">
          <div className="h-[45px] w-[90px] bg-teal-100 rounded-b-full absolute end-[100px]"></div>

          <h2 className="pt-20 mt-[10px] text-teal-400  font-serif text-emerald-950 font-semibold text-[13px]">
            SCHEDULE A MEETING{" "}
          </h2>
          <h1 className="text-teal-950 font-serif text-emerald-950 font-bold text-[25px] mt-[10px]">
            Let's discuss the details
          </h1>
          <p className="mt-[10px] font-medium font-serif text-xs w-[380px] mt-[50px]">
            Meet online with our experts to learn the details of your desired
            healthcare process.{" "}
          </p>
          <button className="w-[130px] h-[30px] bg-teal-400 text-[8px] p-1 font-semibold mt-10">
            SCHEDULE A MEETING{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
