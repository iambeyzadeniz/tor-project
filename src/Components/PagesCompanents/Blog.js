import React from "react";
import Image4 from "../../Images/smile.png";
function Blog() {
  return (
    <div className="w-full bg-gradient-to-b from-teal-100 to-white h-[90vh] py-[20px] px-80 grid grid-rows-9 grid-cols-6 ">
      <div className="row-span-3 col-span-6 flex justify-center">
        <div className="text-center py-[30px] w-[350px]">
          <h2 className="text-black font-serif text-black font-bold text-[9px]">
            #Trend & #News
          </h2>
          <h1 className="text-emerald-950 font-serif text-black font-bold text-[35px]">
            Blog
          </h1>
          <p className=" font-semibold font-serif text-[10px] text-black  ">
            Check out the latest posts to learn more about the different
            treatments and procedures.
          </p>
        </div>
      </div>
      <div className=" row-span-5 col-span-2 px-1">
        <img src={Image4} />
        <div className="mt-[15px]">
          {" "}
          <h2 className="text-black font-serif text-black font-bold text-[9px]">
            19.01.2023
          </h2>
          <h1 className="text-emerald-950 font-serif text-black font-bold text-[15px]">
            Smile Beauty: Dental Implant
          </h1>
          <p className=" font-xs font-serif text-[10px] text-black  ">
            innovations in the realm of medicine are also happening as a result
            of advancing technology.
          </p>
          <h1 className="text-emerald-950 font-serif text-black font-bold text-[10px] mt-[10px]">
            READ MORE...
          </h1>
          <p className=" font-xs font-serif text-[10px] text-black  ">
            07 Jan 2022. 5 min read
          </p>
        </div>
      </div>
      <div className=" row-span-5 col-span-2 px-1">
        <img src={Image4} />
        <div className="mt-[15px]">
          {" "}
          <h2 className="text-black  font-serif text-black font-bold text-[9px]">
            19.01.2023
          </h2>
          <h1 className="text-emerald-950 font-serif text-black font-bold text-[15px]">
            Smile Beauty: Dental Implant
          </h1>
          <p className=" font-xs font-serif text-[10px] text-black  ">
            innovations in the realm of medicine are also happening as a result
            of advancing technology.
          </p>
          <h1 className="text-emerald-950 font-serif text-black font-bold text-[10px] mt-[10px]">
            READ MORE...
          </h1>
          <p className=" font-xs font-serif text-[10px] text-black  ">
            07 Jan 2022. 5 min read
          </p>
        </div>
      </div>
      <div className=" row-span-5 col-span-2 px-1">
        <img src={Image4} />
        <div className="mt-[15px]">
          {" "}
          <h2 className="text-black  font-serif text-black font-bold text-[9px]">
            19.01.2023
          </h2>
          <h1 className="text-emerald-950 font-serif text-black font-bold text-[15px]">
            Smile Beauty: Dental Implant
          </h1>
          <p className=" font-xs font-serif text-[10px] text-black  ">
            innovations in the realm of medicine are also happening as a result
            of advancing technology.
          </p>
          <h1 className="text-emerald-950 font-serif text-black font-bold text-[10px] mt-[10px]">
            READ MORE...
          </h1>
          <p className=" font-xs font-serif text-[10px] text-black  ">
            07 Jan 2022. 5 min read
          </p>
        </div>
      </div>
      <div className="row-span-1 col-span-6 flex justify-center items-center">
        <div className="text-center  w-[350px]">
          <h2 className="text-gray-500  font-serif text-black font-bold text-[10px]">
            <button className="border-solid border-2 border-gray-400 p-2 w-[110px]">
              SEE ALL POSTS
            </button>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Blog;
