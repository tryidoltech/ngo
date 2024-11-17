import React from 'react';

const Showcase = () => {
  return (
    <div className="bg-indigo-100 flex-wrap gap-10  py-20 px-4 mt-16 flex justify-around items-center text-center">
      <div className="flex flex-col items-center space-y-2">
        <div className="text-4xl font-bold text-gray-900">
          15 <span className="text-indigo-600">yr</span>
        </div>
        <p className="text-gray-500">15 years of working experience</p>
      </div>

      <div className="w-px h-16 bg-indigo-300 hidden md:block"></div>

      <div className="flex flex-col items-center space-y-2">
        <div className="text-4xl font-bold text-gray-900">
          500 <span className="text-indigo-600">+</span>
        </div>
        <p className="text-gray-500">500+ volunteers are available</p>
      </div>

      <div className="w-px h-16 bg-indigo-300 hidden md:block"></div>

      <div className="flex flex-col items-center space-y-2">
        <div className="text-4xl font-bold text-gray-900">
          1 <span className="text-indigo-600">M</span>
        </div>
        <p className="text-gray-500">$1 million raised for the needy</p>
      </div>
    </div>
  );
};

export default Showcase;
