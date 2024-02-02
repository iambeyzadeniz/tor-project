import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import Image1 from "../../Images/dent1.png";
import Image2 from "../../Images/dent5.jpg";
const myImages = [
  {
    albumId: 1,
    id: 11,
    title: "My Images 1",
    thumbnailUrl: Image1,
    url: Image1,
  },
  {
    albumId: 1,
    id: 12,
    title: "My Images 2",
    thumbnailUrl: Image2,
    url: Image2,
  },
];
function DentistryInfo({ images }) {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="h-full pl-14 w-full  items-center flex ">
        <div>
          <h2 className=" mt-[10px] text-teal-400  font-serif text-emerald-950 font-semibold text-[13px]">
            #FEELDIFFERENT{" "}
          </h2>
          <h1 className="text-emerald-950 font-serif text-emerald-950 font-bold text-[35px] mt-[10px]">
            <span className="block">COSMETIC </span>
            <span className="block">DENTISTRY </span>
          </h1>
          <p className="mt-[10px] font-medium font-serif text-xs w-[560px] ">
            Aesthetic dentistry can make dramatic differences in your appearance
            and self-confidence.To fulfill your wish, we offer whitening,
            tooth-colored fillings, porcelain veneers, porcelain crowns and
            complete dental implant tooth replacement.
          </p>
        </div>
      </div>
      <div className="h-full w-full flex items-center justify-center ">
        <Carousel className="w-[600px]  h-[600px] absolute top-[-10px] ">
          {images.map((image) => (
            <div key={image.id} className=" justify-center">
              <img
                className="h-[500px] rounded-md w-[1000px] bg-cover "
                key={image.id}
                src={image.url}
                alt={image.title}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default DentistryInfo;
