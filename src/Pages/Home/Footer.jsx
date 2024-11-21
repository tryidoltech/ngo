import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaPhone } from "react-icons/fa";
import DonateNow from "../../component/DonateNow";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] text-black py-10">
      <DonateNow></DonateNow>
      <div className="container mx-auto  px-6 pt-20">
        <div className="grid grid-cols-1 max-md:grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo and About Section */}
          <div>
            <img src="logo.png" alt="Shiny Interiors Logo" className="mb-4" />
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, doloribus! Fugit sint accusantium ipsam nisi.
            </p>
            <div className="flex space-x-4 mt-4">
              <FaFacebook size={24} />
              <FaInstagram size={24} />
              <FaYoutube size={24} />
              <FaLinkedin size={24} />
              <FaPhone size={24} />
            </div>
          </div>

          {/* Services Area */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>Educational Guidance</li>
              <li>Skill Development</li>
              <li>Muzaffarpur</li>
              <li>Scholarship</li>
              <li>Quresh Matrimony</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Gallery</li>
              <li>Annual Report</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>New Delhi - 110095</li>
              <li>+91 9876543210</li>
              <li>qureshconference@gmail.com</li>
              {/* <li>Portfolio</li>
              <li>FAQs</li>
              <li>Contact Us</li> */}
            </ul>
          </div>

          {/* Contact Section */}
          
          
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-wrap justify-between text-sm">
          <p>© 2024 Quresh Conference. All rights reserved.</p>
          <p>
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>{" "}
            ·{" "}
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </p>
          <p>Designed & Developed by Tryidol Technologies</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
