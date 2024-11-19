import React from "react";
import Navbar from "../Navbar/Navbar";
// import Dashboard from "../Dashboard";
// import Footer from "../Footer";

const PhotoGallery = () => {
  const cards = [
    {
      image: "photo1.png",
    },
    {
      image: "photo2.png",
    },
    {
      image: "photo3.png",
    },
    {
      image: "photo4.png",
    },
    {
      image: "photo5.png",
    },
    {
      image: "photo6.png",
    },
    {
      image: "photo7.png",
    },
    {
      image: "photo8.png",
    },
    {
      image: "photo9.png",
    },

  ];

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div
        className="w-full h-[322px] bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(governing.png)` }}
      >
        <div className="text-white leading-10 text-center pt-12 h-[200px]">
          <p>Home / Gallery</p>
          <h1 className="text-5xl text-center font-semibold">Photo Gallery</h1>
        </div>
      </div>
      <div className="w-full bg-slate-500 px-24">
        <div className="flex">
          <ul className="flex bg-black">
            <li className="text-white text-xl font-normal">Photo Gallery</li>
            <li className="text-white text-xl font-normal mx-4">
              Video Gallery
            </li>
            <li className="text-white text-xl font-normal mx-4">Media</li>
            <li className="text-white text-xl font-normal mx-4">
              Success Stories
            </li>
          </ul>
        </div>
        <div>
          <div className="flex gap-10">
            {cards.map((card, index) => (
              <div
                key={index}
                className=" gap-4 w-[240px] h-[400px]"
              >
                <div className="text-black">
                  <img
                    src={card.image}
                    alt={`Card image ${index + 1}`}
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Dashboard /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default PhotoGallery;
