
// const Dashboard = () => {


//   return (

//      <div className=" h-[80vh]">
//        <div className='w-full h-full flex justify-center items-center'>
//         <div className="w-full md:w-0  bg-slate-400 ">
//         <h2 className="text-sm font-medium py-10	 text-center text-black ">Our Trusted  Partner</h2>
//         </div>
//       <div className="flex justify-center items-center h-[20vh] w-[60rem] px-10 gap-20 bg-white ">
//         <img src="Header-1.png" alt=""  className="  h-10 " />
//         <img src="Header-2.png" alt="" className=" h-10 " />
//         <img src="Header-3.png" alt="" className=" h-10 " />
//         <img src="Header-4.png" alt="" className=" h-10 " />
//       </div>
//       </div>
//      </div>

//   )
// }

// export default Dashboard

import React from 'react';
// import './Dashboard.css'; // Import the CSS file for styles

const Dashboard = () => {
  return (
    <div className=" max-md:mb-[5rem]  mb-[10rem] px-10 bg-[#f5f5f5] py-6">
      <div className="w-full flex max-md:flex-col justify-between items-center">
        <div className="  ">
          <h2 className="text-4xl max-md:text-2xl font-semibold  text-center">
            Our Trusted Partner
          </h2>
        </div>
        <div className="marquee-container  ">
          <div className="marquee">
            <img src="Header-1.png" alt="Partner 1" className="h-10" />
            <img src="Header-2.png" alt="Partner 2" className="h-10" />
            <img src="Header-3.png" alt="Partner 3" className="h-10" />
            <img src="Header-4.png" alt="Partner 4" className="h-10" />
            <img src="Header-1.png" alt="Partner 1" className="h-10" />
            <img src="Header-2.png" alt="Partner 2" className="h-10" />
            <img src="Header-3.png" alt="Partner 3" className="h-10" />
            <img src="Header-4.png" alt="Partner 4" className="h-10" />
            <img src="Header-1.png" alt="Partner 1" className="h-10" />
            <img src="Header-2.png" alt="Partner 2" className="h-10" />
            <img src="Header-3.png" alt="Partner 3" className="h-10" />
            <img src="Header-4.png" alt="Partner 4" className="h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
