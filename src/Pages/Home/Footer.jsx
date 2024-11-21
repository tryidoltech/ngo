import { NavLink } from "react-router-dom";
import DonateNow from "../../component/DonateNow";

const Footer = () => {


  return (
    <div className="w-full relative px-6  bg-[#eaebfe]">
      <DonateNow></DonateNow>
      <div className=" flex max-md:flex-col md:shrink-0  min-h-[80vh]  justify-center items-center ">
      <div className="flex flex-col    items-center md:items-start  m  ">
         <div className="max-md:w-full">
         <img src="logo.png" alt="Quresh Conference Logo" className=" m" />
          <p>
          At Shiny Interiors, we blend elegance and functionality to create stunning residential and commercial interiors. Our experienced design specialists focus on delivering exceptional customer satisfaction through streamlined operations.
          </p>
         </div>
          <div className="text-center md:text-left">
          {/* <div className="flex   items-center border rounded-md p-1">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 max-md:w-[50vw] outline-none "
            />
            <button className="bg-[#4f46e5] text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div> */}
          
          <div className="">
          <p className="text-sm mt-10">©logo | All rights reserved</p>
          </div>
        </div>
        </div>


        {/* <span className="md:hidden"></span> */}
       <div className="w-full grid grid-cols-3 max-sm:grid-cols-2 gap-5 py-6 justify-between ">
       <div className="flex flex-col gap-2   ">
        <h4 className="text-sm  font-semibold ">Programs</h4>
            <ul className='text-sm leading-10 items-center	'>
              <li>Educational Guidance</li>
              <li>Skill Development</li>
              <li>Scholarship</li>
              <li>Quresh Matrimony</li>
            </ul>

        </div>

        <div className="flex flex-col   ">
        <h4 className="text-sm font-semibold ">Platform</h4>
            <ul className='text-sm leading-10	'>
              <li>Home</li>
              <li>About Us</li>
              <li>Gallery</li>
              <li>Annual Report</li>
              <li>Contact Us</li>
            </ul>



        </div>

        <div className="flex flex-col gap-2 ">
        <h4 className=" text-sm font-semibold ">Contact</h4>
            <ul className=' text-sm leading-10'>
              <li>New Delhi - 110095</li>
              <li>+91 9876543210</li>
              <li>conference@gmail.com</li>
            </ul>

        </div>
       </div>


      </div>



    </div>
  );
};

export default Footer;
