import React from "react";

function Introduction() {
  return (
    <div className="h-screen bg-cover  w-full bg-hero    ">
      <div className="w-[20rem] h-60 absolute  top-[150px] left-[35px] ">
        <h1 className=" text-[#2dd4ca] font-serif text-2xl text-left break-normal font-bold">
          Hair Transplantation with Healer Turkey
        </h1>
        <p className="font-serif text-white text-xs">
          Do you want to change the look of your hair, feel better, and regain
          your self- confidence? Achieving the hair of your dreams is now
          possible thanks to Healer Turkey.{" "}
        </p>
        <br />
        <p className="font-serif text-white text-xs">
          Healer Turkey performs the most suitable and natural-looking hair
          transplantation with specialist doctor staff and experience.
        </p>
        <div className="mt-3">
          <button className="font-serif text-[10px] w-20 h-8 bg-teal-400 text-xs mr-[10px]">
            WHATSAPP
          </button>
          <button className="font-serif text-[10px] w-20 h-8 text-teal-400 text-xs mr-[10px] border-teal-400 border-solid border-[1px] ">
            FORM
          </button>
        </div>
      </div>
      <div className="pl-[27px] pt-[20px] w-60 h-80 absolute end-6 bottom-0 bg-white right-10 border-indigo-600 ">
        <h1 className="font-serif text-emerald-950 font-bold">Let's Talk!</h1>
        <span className="font-serif text-[12px] font-semibold">Name</span>
        <div>
          {" "}
          <input className="border-solid border-[2px] border-inherit" />
        </div>

        <span className="font-serif text-[12px] font-semibold ">Email </span>
        <div>
          {" "}
          <input className="border-solid border-[2px] border-inherit" />
        </div>
        <span className="font-serif text-[12px] font-semibold">Message</span>
        <div>
          {" "}
          <input
            className=" text-[10px] w-[181px] h-20 border-solid text-inherit border-[2px] border-inherit "
            type="text"
            placeholder="Type your message..."
          ></input>
        </div>
        <button className=" mt-[10px] w-[181px] h-10  font-serif text-white  bg-emerald-950 font-serif text-[10px]">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Introduction;
