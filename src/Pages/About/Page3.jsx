import React from 'react';

const Page3 = () => {
  return (
    <div className="flex flex-col gap-10 md:flex-row items-center  px-24 ">
      <div className="relative flex-shrink-0">
        <div className="absolute w-full h-full z-10  rounded-lg top-8 left-8"></div>
        <div className="flex flex-col gap-4  w-[40vw] h-[40vw]">
          <img
            src="Group 21.png"
            alt="Helping Hands"
            className="rounded-lg w-full"
          />

        </div>
      </div>

      <div className="max-w-lg space-y-4">
        <div>
        <h2 className="text-sm font-normal  mr-[440px] text-indigo-600">ABOUT US</h2>
        <div className='w-10 bg-blue-700 h-[2px] ml-1 rounded-sm'></div>
        </div>
        <h1 className="text-3xl text-start font-bold pb-1 text-gray-800">
          We are an NGO that helps the needy ones
        </h1>
        <p className="text-gray-600 text-start pb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          adipiscing elit, sed do eiusmod tempor..
        </p>

        <div className="space-y-4">
          {/* <div className="p-4 text-start	pb-8  bg-indigo-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold pb-1 text-gray-800">Our Mission</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>

          <div className="p-4 text-start pb-8 bg-indigo-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold pb-1 text-gray-800">Our Vision</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Page3;
