import React from "react";
import Navbar from "../../Navbar/Navbar";
// import Dashboard from "../Home/Dashboard";
import Footer from "../Home/Footer";
import { NavLink } from "react-router-dom";

const GoverningCommunity = () => {
  const profiles = [
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },

    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
    {
      name: "Sanobar Ali Qureshi",
      title: "President",
      image: "bearer-2.png",
    },
  ];
  return (
    <div className="w-full">
      <Navbar></Navbar>
      <div
        className="w-full h-[362px] bg-center	flex items-center justify-center  mb-24"
        style={{ backgroundImage: `url(governing.png)` }}
      >
        <div className="text-white max-md:text-center   pt-12   ">
          <p>Home / Governing Body</p>

          <h1 className=" text-5xl max-md:text-2xl font-semibold">Governing Committee</h1>
        </div>
      </div>
      <div className="mb-24">
        <div className="flex px-[5vw] gap-12  flex-wrap justify-center ">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 w-[230px] h-[400px]"
            >
              <div className="text-black">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full "
                />
                {/* <div className="ml-4 mt-5 leading-6">
                  <h2>{profile.name}</h2>
                  <p>{profile.title}</p>
                  <button className="text-white mt-2 px-5 py-2 bg-blue-600 rounded-md">
                    View Profile
                  </button>
                </div> */}
                 <div className='card  h-full '>
                {/* <img src="bearer-3.png" alt="" /> */}
                <h1 className='text-lg font-semibold mt-5	'>Mohd Aashqeen Qureshi</h1>
                <h5>Secretary</h5>
                <NavLink to="/">
    <button className="bg-[#5044eb] text-white left-[2rem] px-10 py-2 rounded-md relative bottom-[9rem]  transition-all duration-300">
      View Profile
    </button>
    </NavLink>

            </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Dashboard></Dashboard> */}
      <Footer></Footer>
    </div>
  );
};

export default GoverningCommunity;
