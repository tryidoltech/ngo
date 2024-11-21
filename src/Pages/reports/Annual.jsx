import React from "react";
import Navbar from "../../Navbar/Navbar";
import Showcase from "../Home/Showcase";
import Dashboard from "../Home/Dashboard";
import Footer from "../Home/Footer";
import Reports from "./Reports";
// import Page3 from "../About/Page3";
// import Page4 from "./Page4";

const AnnualReports = () => {
  const cards = [
    {
      name: "Our Mission",
      image: "mission.png",
    },
    {
      name: "Our Vision",
      
      image: "Group 37.png",
    },
  ];
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="w-full h-[362px] bg-center	flex items-center justify-center  mb-24"
        style={{ backgroundImage: `url(gallery.png)` }}
      >
        <div className="text-white leading-10 text-center pt-12  w-[600px] h-[200px]">
          <p>Home / Reports </p>

          <h1 className=" text-5xl font-semibold">Annual Report</h1>
        </div>
      </div>
      <Reports></Reports>
      <Showcase></Showcase>
      

      <Dashboard></Dashboard>
      <Footer></Footer>
    </div>
  );
};

export default AnnualReports;