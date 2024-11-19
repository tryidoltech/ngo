import React, { useState, useEffect } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";


const Banner = () => {
  const images = ["Banner.png", "Banner1.jpg", "Banner2.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-cover max-md:w-full h-screen max-md:h-[50vh] flex items-center justify-between"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="w-14 h-14 ml-5 cursor-pointer" onClick={prevImage}>
      <span><IoIosArrowDropleft size={40} color="#ffff" /></span>
      </div>
      <div className="text-center">
        <h1 className="text-white text-6xl max-md:text-xl">
          Reimagine the Future <br /> of Education
        </h1>
        <p className="text-white max-md:hidden max-md:text-xs">
          Lorem  Temporibus usantium eum.
        </p>
      </div>
      <div className="w-14 h-14 mr-5 cursor-pointer" onClick={nextImage}>
     <span>
     <IoIosArrowDropright size={40} color="#ffff" />
     </span>
      </div>
    </div>
  );
};

export default Banner;

