import React from "react";
import Navbar from "../../Navbar/Navbar";
// import Dashboard from "../..";
import Footer from "../Home/Footer";

const Scholarship = () => {
  return (
    <div className="overflow-hidden">
      <Navbar></Navbar>
      <div
        className="w-full h-[322px] bg-center	flex items-center justify-center  "
        style={{ backgroundImage: `url(governing.png)` }}
      >
        <div className="text-white text-center leading-10  pt-12 h-[200px] ">
          <p>Home / Programs</p>

          <h1 className=" text-5xl text-center font-semibold">Scholarship</h1>
        </div>
      </div>
      <div className="px-24 py-20  text-start   w-full ">
        <div className="w-full flex gap-5  h-[300px] ">
          <div className="text-start  text-[14.5px]">
            <p className="mt-8">
              As per the MHRD report on Educational Statistics at a Glance,
              2018, the all- India average dropout rate of primary students is
              4.13 per cent while it is 4.03 per cent in upper primary and 17.06
              per cent in the secondary levels
            </p>
            <p className="mt-8">
              The inability to afford education remains one of the major reasons
              for discontinuing education in India. According to the survey,
              nearly one fourth of the boys left education for this reason.
              Financial reasons also lead to 17.7 percent of girls dropping out
              of school at different levels.
            </p>
          </div>
          <div className="w-[140vw] mt-7 h-[15rem] ">
            <img className="w-full h-full" src="Rectangle 261.png" alt="" />
          </div>
        </div>
        <div className="">
          <h1 className="w-[20vw] text-center px-2 rounded-sm py-4 bg-[#b0b8ff] text-[#5449eb] font-semibold">
            Our Aim
          </h1>
          <p className="mt-5 text-[14.5px]">
            The aim of our scholarships program is to overcome this problem, we
            provide scholarships for higher education and regular skill
            development courses to marginalized talented students who pass the
            10th grade.
          </p>
        </div>
        <div className="mt-10">
          <h1 className="w-[20vw] text-center px-2 rounded-sm py-4 bg-[#b0b8ff] text-[#5449eb] font-semibold">
            About the Program
          </h1>
          <p className="mt-5 text-[14.5px]">
            Under this program, students are also provided with Career Guidance
            & Mentoring to help them determine the kind of career they want to
            pursue. The primary beneficiaries of this program are students who
            have passed their 10th grade and want to pursue higher education.
          </p>
          <p className="mt-5 text-[14.5px]">
            The secondary beneficiaries are parents, schools and institutions.
            Scholarships are awarded annually based on quarterly performance
            reports submitted by students. We provide scholarships up to INR
            25000/- per student per year. Over 300 scholarship students have
            received scholarships from NCR and Rajasthan since 2017
          </p>
          
        </div>
        
        <div>
          <div className="">
            <div className="flex gap-5">
              <div className=" flex">
                <div className="  mt-10">
                  <h1 className="w-[20vw] text-center  rounded-sm p-3 bg-[#b0b8ff] text-[#5449eb] font-semibold">
                  Current Scholarship
                  </h1>
                  <h1 className="w-[70vw] mt-5 text-start text-3xl  rounded-sm p-3 font-semibold ">Shikshadaan – PURE India Scholarship – <span className="text-[#5449eb] ">Apply Online</span></h1>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Dashboard></Dashboard> */}
      <Footer></Footer>
    </div>
  );
};

export default Scholarship;
