import React from "react";

const GalleryNav = ({ selected, onSelect }) => {
  return (
    <div>
      <ul className="flex flex-wrap gap-4  ">
        <li>
          <button
            onClick={() => onSelect("photo")}
            className={`text-lg max-md:text-sm font-normal cursor-pointer ${
              selected === "photo" ? "font-bold text-blue-700 underline underline-offset-8 " : "text-black"
            }`}
          >
            Photo Gallery
          </button>
        </li>
        <li>
          <button
            onClick={() => onSelect("video")}
            className={`text-lg max-md:text-sm  font-normal cursor-pointer ${
              selected === "video" ? "font-bold text-blue-700  underline underline-offset-8" : "text-black"
            }`}
          >
            Video Gallery
          </button>
        </li>
        <li>
          <button
            onClick={() => onSelect("media")}
            className={`text-lg max-md:text-sm  font-normal cursor-pointer ${
              selected === "media" ? "font-bold text-blue-700 underline underline-offset-8" : "text-black"
            }`}
          >
            Media
          </button>
        </li>
        <li>
          <button
            onClick={() => onSelect("SuccessStories")}
            className={`text-lg max-md:text-sm   font-normal cursor-pointer ${
              selected === "SuccessStories" ? "font-bold text-blue-700 underline underline-offset-8" : "text-black"
            }`}
          >
            Success Stories
          </button>
        </li>
      </ul>
    </div>
  );
};

export default GalleryNav;
