import React from "react";
import { peopleData } from "../../../data/Data";

const Testimonial = () => {
  return (
    <div className="flex flex-wrap justify-center max-md:gap-[4rem] gap-5 pb-10 max-md:px-20 min-h-[40vh]">
      {peopleData.map((person, index) => (
        <div
          key={index}
          className="relative bg-[#f5f5f5] w-[18vw] h-[28vh] max-md:w-full  rounded-2xl shadow-md flex flex-col items-center p-6"
        >
          {/* Placeholder for Image */}
          <div className="absolute -top-12 w-[7rem] h-[7rem] rounded-full overflow-hidden shadow-lg">
            <img
              src={person.image} // Replace with actual image URL
              alt={person.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content */}
          <div className="mt-16 text-center">
            <h2 className="text-lg font-semibold text-gray-800">{person.name}</h2>
            <p className="text-sm text-gray-600">{person.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
