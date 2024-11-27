import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "./Home/Footer";
import Dashboard from "./Home/Dashboard";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const formRef = useRef(); // Ref for the form

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7roa454", // Replace with your Service ID
        "template_n5jzkqe", // Replace with your Template ID
        formRef.current,
        "8UZY187OxwbQ5OV8y" // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Email sending failed!", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );

    e.target.reset(); // Reset the form fields
  };

  return (
    <div>
      <Navbar />
      <div>
        <div
          className="w-full h-[362px]  bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(governing.png)` }}
        >
          <div className="text-white leading-10 text-center pt-12 w-[600px] h-[200px]">
            <p>Home / About Us</p>
            <h1 className="text-5xl font-semibold">Contact Us</h1>
          </div>
        </div>
        <div className="">
          <div className="bg-[#eaebfe] py-10 h-screen  max-md:px-5   px-24 ">
            <div className="px-4"></div>
            <div className="max-w-7xl  px-4">
              <div className="grid grid-cols-1  md:grid-cols-2  gap-8">
                <div>
                  <h2 className="text-xl mb-5 font-semibold w-[20vw]">
                    Registered Office
                  </h2>
                  <p className="font-semibold text-gray-700">Our Office</p>
                  <p className="text-gray-600 mt-2">Delhi</p>
                  <p className="text-gray-600">
                    F-100, Dilshad Colony, Delhi - 110095
                  </p>
                  <div className="mt-4">
                    <p className="text-gray-600">
                      📧{" "}
                      <a
                        href="mailto:info@rnbtobic.in"
                        className="text-blue-500"
                      >
                        info@nxtbloc.in
                      </a>
                    </p>
                    <p className="text-gray-600">
                      📧{" "}
                      <a
                        href="mailto:investorrelations@rnbtobic.in"
                        className="text-blue-500"
                      >
                        Investor.relations@nxtbloc.in
                      </a>
                    </p>
                    <p className="text-gray-600">
                      📧{" "}
                      <a
                        href="mailto:subjectsecretary@rnbtobic.in"
                        className="text-blue-500"
                      >
                        subjectsecretary@rnbtobic.in
                      </a>
                    </p>
                    <p className="text-gray-600">
                      📞 <span className="font-medium">011-35756656</span>
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    className="h-[50vh] w-[35vw]  max-md:w-full"
                    src="map.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            
          </div>
          <div className=" bg-white h-screen  flex justify-center items-center  relative  ">
              <div className=" bg-white w-[80vw] max-md:h-screen shadow-lg   absolute bottom-[30vh] max-md:bottom-0  border-2 max-md:px-5  px-20 py-10 ">
                <h2 className="text-2xl text-center font-bold text-gray-800">
                  Get in touch
                </h2>
                <p className="text-gray-600 mb-8 text-center">
                  Our team is happy to address all your queries. <br /> Fill out the
                  form and we will be in touch with you as soon as we can.
                </p>
                <form
                  ref={formRef}
                  onSubmit={sendEmail}
                  className=" w-full flex flex-col gap-6"
                >
                 <div className=" flex max-md:flex-col w-full justify-between ">
                 <div className="">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      id="name"
                      placeholder="Enter your full name"
                      className=" w-[30vw] max-md:w-full mt-2 p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      id="email"
                      placeholder="Enter your email id"
                      className=" w-[30vw] max-md:w-full mt-2 p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                 </div>
                  <div className="flex max-md:flex-col w-full justify-between">
                  <div className="">
                    <label
                      htmlFor="mobile"
                      className="block text-gray-700 font-medium"
                    >
                      Mobile *
                    </label>
                    <input
                      type="text"
                      name="from_mobile"
                      id="mobile"
                      placeholder="Enter your mobile number"
                      className="w-[30vw] max-md:w-full mt-2 p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="from_subject"
                      id="subject"
                      placeholder="e.g. Amazon"
                      className="w-[30vw] max-md:w-full mt-2 p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  </div>
                  
                  <div className="col-span-2">
                    <label
                      htmlFor="query"
                      className="block text-gray-700 font-medium"
                    >
                      Your Query
                    </label>
                    <textarea
                      name="message"
                      id="query"
                      placeholder="Type your message"
                      className="w-full mt-2 p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className=" col-span-2  max-w-full  flex justify-center items-center ">
                    <button
                      type="submit"
                      className=" bg-blue-600 w-[10vw] max-md:w-full text-white py-3 rounded-md hover:bg-blue-700 transition"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          <Dashboard />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
