import React from 'react';

const Reports = () => {
  
  return (
    <div className="flex flex-row gap-10 md:flex-row  items-center  px-8 md:px-24 ">
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

     <div className='px-5'>
     <div className="max-w-lg   space-y-4">
        <h1 className='font-bold md:text-4xl text-2xl'>Reports:</h1>
        <ul  className=' list-disc list-inside hover:to-blue-400 text-black space-y-2 mb-8'>
          <li className="text-lg cursor-pointer font-medium">2019</li>
          <li className="text-lg cursor-pointer font-medium">2020</li>
          <li className="text-lg cursor-pointer font-medium">2021</li>
          <li className="text-lg cursor-pointer font-medium">2022</li>
          <li className="text-lg cursor-pointer font-medium">2023</li>
          <li className="text-lg cursor-pointer font-medium">2024</li>
        </ul>
      </div>
     </div>
      
    </div>
  );
};

export default Reports;