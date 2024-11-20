import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Dashboard from "../Pages/Home/Dashboard";
import Footer from "../Pages/Home/Footer";
import GalleryNav from "../Navbar/GalleryNav";
import PhotoGallery from "./gallery/PhotoGallery";
import VideoGallery from "./gallery/Videogallery";
import Media from "./gallery/Media";
import SuccessStories from "./gallery/SuccessStories";

const Gallery = () => {
  const [selectedGallery, setSelectedGallery] = useState("photo"); // Default to Photo Gallery

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div
        className="w-full min-h-[50vh] md:min-h-[60vh] bg-black bg-center bg-cover flex items-center justify-center"
      >
        <div className="text-white text-center">
          <p className="text-sm md:text-base">Home / Gallery</p>
          <h1 className="text-3xl md:text-5xl font-semibold">
          <h1 className="text-3xl md:text-5xl font-semibold">
  {selectedGallery === "photo" && "Photo Gallery"}
  {selectedGallery === "video" && "Video Gallery"}
  {selectedGallery === "media" && "Media"}
  {selectedGallery === "SuccessStories" && "Success Stories"}
</h1></h1>
        </div>
      </div>

      <div className="py-14 px-24 max-md:px-5  max-md:w-full ">
        {/* Pass selectedGallery state and setter to GalleryNav */}
        <GalleryNav
          selected={selectedGallery}
          onSelect={setSelectedGallery}
        />
      </div>

      <div className="w-full px-4 md:px-24">
        {/* Conditionally render the content */}
        {selectedGallery === "photo" && <PhotoGallery></PhotoGallery>}
        {selectedGallery === "video" && <VideoGallery></VideoGallery>}
        {selectedGallery === "media" && <Media></Media>}
        {selectedGallery === "SuccessStories" && <SuccessStories></SuccessStories>}
      </div>

      <Dashboard />
      <Footer />
    </div>
  );
};

export default Gallery;
