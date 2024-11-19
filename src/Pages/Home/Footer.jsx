import { NavLink } from "react-router-dom";
import DonateNow from "../../component/DonateNow";

const Footer = () => {


  return (
    <div className="w-full relative px-6  bg-[#eaebfe]">
      <DonateNow></DonateNow>
      <div className="w-full grid  grid-cols-2 pt-[20vh] min-md:grid-cols-3 lg:grid-cols-4 gap-5 py-10 place-items-start ">
      <div className="flex flex-col    items-center md:items-start text-center md:text-left ">
          <img src="logo.png" alt="Quresh Conference Logo" className=" mb-4" />
          <h3 className="text-lg pb-2 font-medium">QURESH CONFERENCE (Regd.)</h3>
          <p>(A SOCI ORGANISATION OF QURESH <br /> COMMUNITY IN INDIA)</p>
          <div className="text-center md:text-left">
          <div className="flex   items-center border rounded-md p-1">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 max-md:w-[50vw] outline-none "
            />
            <button className="bg-[#4f46e5] text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>
          
          <div className="">
          <p className="text-sm mt-10">©logo | All rights reserved</p>
          </div>
        </div>
        </div>


        <span className="md:hidden"></span>
        <div className="flex flex-col gap-2 justify-center ">
        <h4 className="text-sm  font-semibold mb-2">Programs</h4>
            <ul className='text-sm leading-10 items-center	'>
              <li>Educational Guidance</li>
              <li>Skill Development</li>
              <li>Scholarship</li>
              <li>Quresh Matrimony</li>
            </ul>

        </div>

        <div className="flex flex-col gap-2 justify-center items-start">
        <h4 className="text-sm font-semibold mb-2">Platform</h4>
            <ul className='text-sm leading-10	'>
              <li>Home</li>
              <li>About Us</li>
              <li>Gallery</li>
              <li>Annual Report</li>
              <li>Contact Us</li>
            </ul>



        </div>

        <div className="flex flex-col gap-2 justify-center items-start">
        <h4 className=" text-sm font-semibold mb-2">Contact</h4>
            <ul className=' text-sm leading-10'>
              <li>New Delhi - 110095</li>
              <li>+91 9876543210</li>
              <li>conference@gmail.com</li>
            </ul>

        </div>


      </div>



    </div>
  );
};

export default Footer;
