import React, { useEffect, useState } from "react";

import Introduction from "../Components/PagesCompanents/Introduction";
import Solutions from "../Components/PagesCompanents/Solutions";
import Details from "../Components/PagesCompanents/Details";
import DentistryInfo from "../Components/PagesCompanents/DentistryInfo";
import Conselors from "../Components/PagesCompanents/Conselors";
import Blog from "../Components/PagesCompanents/Blog";
import Image1 from "../Images/dent1.png";
import Image2 from "../Images/dent5.jpg";
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
function HomePage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        if (!response.ok) {
          throw new Error(
            "Api'larda sıkıntı var, backend ile iletişime geçiniz."
          );
        }
        const json = await response.json();
        const firstTenImages = json.slice(0, 8);

        setImages([...myImages, ...firstTenImages]);
      } catch (error) {
        console.error("Api'dan veri çekerken hata ile kaşılaşıldı : ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Introduction />
      <Solutions />
      <Details />
      <DentistryInfo images={images} />
      <Conselors />
      <Blog />
    </>
  );
}

export default HomePage;
