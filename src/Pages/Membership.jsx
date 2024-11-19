import React from "react";
import Navbar from "../Navbar/Navbar";
import Dashboard from "../Pages/Home/Dashboard";
import Footer from "../Pages/Home/Footer";

const Membership = () => {
  return (
   <div>
    <Navbar></Navbar>
     <div className="p-6 md:px-24 bg-gray-50">
      <div className="text-center">
        <div className="relative w-full  max-w-3xl mx-auto mb-6">
          <img
            src="membership.png" 
            alt="Volunteer"
            className="w-full rounded-lg"
          />
          <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          </button>
        </div>
        <h2 className="text-2xl text-start font-bold text-gray-800 mb-4">
          Why you should volunteer with Qureshi Conference?
        </h2>
        
      </div>

      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
        <li>You lead the change you want to see in our society and for the same you get flexible opportunities for volunteering based on your skill, time and locations.</li>
        <li>You get to work towards issues of Education, Women Empowerment, Gender equality & community development activities. Your time is the best contribution you can make to these causes.</li>
        <li>Be a part of a larger community of change-makers and influencers. Have a space where you can take charge and create solutions. We uplift ourselves and each other through bonding exercises ensuring that you’re having fun while you change the world.</li>
        <li>We provide certificates for your valuable contribution. If your college requires you to work or if you’re looking for experience letter, we shall provide a certificate as per the work you would do with us.</li>
        <li>It starts with YOU. As Gandhi said, “be the change you want to see in the world”. If you’re bothered by the state of things in the world, become volunteer to change it.</li>
      </ul>

      <div className="bg-[#5044eb] text-white py-6 h-[30vh] flex justify-center items-center flex-col px-8 text-center rounded-lg mb-8">
        <h3 className="text-lg mb-4">
          Empowering Lives, Inspiring Change: Join Us on the Journey for a <br /> Better World with Qureshi Conference!
        </h3>
        <div>
            <input type="text" placeholder="" className="mr-2 w-[30vw] px-4 py-2 rounded-lg" />
        
        <button className="bg-white text-[#5044eb] font-medium py-2 px-4 rounded-lg">
          Subscribe
        </button>
        </div>
        
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Following are some of the volunteering opportunities:
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
        <li>School wall coloring & graffiti work</li>
          <li>Conducting Life Skill trainings – Personality development, interviewing skills</li>
          <li>Conducting Cyber Security Awareness Workshops in schools</li>
          <li>Conducting career guidance & mentoring over the phone</li>
          <li>Conducting storytelling & public speaking workshops</li>
          <li>Success story and social media content development</li>
          <li>Translation of content from English to regional languages</li>
          <li>Organizing learning & exposure visits for students & women</li>
          <li>Financial literacy awareness workshops</li>
          <li>Entrepreneurship development workshops</li>
          <li>Advanced Excel training</li>
          <li>Software development & process automation</li>
          <li>Organizing sports activities for school students</li>
          <li>Computer hardware & network training</li>
          <li>Clean India movement drive</li>
          <li>Plantation & watering activities</li>
          <li>Conducting quiz, essay writing, drawing competitions for students</li>
          <li>Project fundraising online and offline</li>
          <li>Conducting communication improvement sessions</li>
        </ul>
      </div>

      {/* <div className="flex flex-col ml-[10vw] md:flex-row md:justify-between items-center gap-6">
        <div className="flex gap-4">
          <img
            src="Rectangle 257.png" 
            alt="Opportunity 1"
            className="w-60 h-w-60 rounded-lg object-cover"
          />
          <img
            src="Rectangle 258.png" 
            alt="Opportunity 2"
            className="w-60 h-w-60 rounded-lg object-cover"
          />
          <img
            src="Rectangle 259.png" 
            alt="Opportunity 2"
            className="w-60 h-w-60 rounded-lg object-cover"
          />
        </div>
       
      </div> */}
      <button className="bg-purple-600 text-white mt-[2vw] ml-[35vw] font-medium py-3 px-6 rounded-lg">
          Apply Now
        </button>
    </div>
    <Dashboard></Dashboard>
    <Footer></Footer>
   </div>
  );
};

export default Membership;
