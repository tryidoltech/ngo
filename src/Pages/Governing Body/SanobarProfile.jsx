import Navbar from "../../Navbar/Navbar";
// import Dashboard from "../Home/Dashboard";
import Footer from "../Home/Footer";

const SanobarProfile = () => {
  return (
    <div className="w-full">
      <Navbar></Navbar>
      <div className="w-full flex  bg-white">
        <div className="w-full px-24 py-20    gap-5 flex">
          <div className="w-[300px]    ">
            <img src="bearer-1.png" alt="" />
            <h1 className="text-2xl font-semibold text-start		">
              Sanobar Ali Qureshi
            </h1>
            <h5 className="text-start font-semibold	">President</h5>
            <div className=" h-[100px]  leading-8  mt-10">
              <h6 className="text-lg font-medium  text-start">Contact Us</h6>
              <p className="text-start">email123@gmail.com</p>
              <p className="text-start">+91 9876543210</p>
            </div>
          </div>
          <div className=" w-[900px] text-start p-3 ">
            <div className="text-md">
            <p>
              I am Sanobar Ali Qureshi, Advocate practicing in Supreme Court of
              India. I am also the National President, Quresh Conference Regd.
            </p>
            <h1 className="mt-5 font-bold text-[24px]">Other Posts :</h1>
            <p className="flex mt-3">
              <img className="w-35 mr-3 mt-[6px] h-3" src="dot.png" alt="" /> I
              did my B.A. Honors (Psychology) in 1993 and Law in 1996 from
              Aligarh Muslim University and Completed my LLM in 2023 from
              Chaudhary Charan Singh University, Meerut
            </p>
            <p className="flex mt-3">
              <img className="w-35 mr-3 mt-[6px] h-3" src="dot.png" alt="" />I
              am associated with several Organization and discharging functions
              in various capacities and I hold various post like General Sec. in
              Law Society during 1994-1995,
            </p>
            <p className="flex mt-3">
              <img className="w-35 mr-3 mt-[6px] h-3" src="dot.png" alt="" /> I
              was president of Indian Lawyers Association, Delhi Unit, National
              President of 80% OBC Muslim Adhikar Federation
            </p>
            <p className="flex mt-3">
              <img className="w-35 mr-3 mt-[6px] h-3" src="dot.png" alt="" />{" "}
              Ex-District President, AIJQ in the year 2007
            </p>
            <p className="flex mt-3">
              <img className="w-35 mr-3 mt-[6px] h-3" src="dot.png" alt="" />
              Ex- Delhi State President, of AIJQ in the year 2008
            </p>
            <p className="flex mt-3">
              <img className="w-35 mr-3 mt-[6px] h-3" src="dot.png" alt="" />{" "}
              National Youth President of AIJQ from 2008-2012
            </p>
            <p className="flex mt-3">
              <img className="w-35 mr-3 mt-[6px] h-3" src="dot.png" alt="" /> I
              am running my law firm with the name and style “Global Juris
              Consultants
            </p>
            <p className="flex mt-3">
              <img className="w-35 mr-3 mt-[6px] h-3" src="dot.png" alt="" />I
              filed several PIL in Delhi High Court and Hon’ble Supreme Court. I
              am also the RTI activist.
            </p>
            <p className="flex mt-3">
              <img className="w-35 mr-3 mt-[6px] h-3" src="dot.png" alt="" />I
              do feel that every Muslim must remain associated with acquisition
              of education throughout the life and must prepared our children
              for business and we must have the commitment to uplift our
              relatives, friends, neighbors etc. and we must hold our religious
              practice strongly.
            </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Dashboard></Dashboard> */}
      <Footer></Footer>
    </div>
  );
};

export default SanobarProfile;
