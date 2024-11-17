import React from 'react';
// import Dashboard from '../Home/Dashboard';
import Footer from '../Home/Footer';
import Navbar from '../../Navbar/Navbar';

const MoinProfile = () => {
  const profiles = [
    {
      name: "Moin Khaleel Qureshi",
      title: "Women's wing President",
      image: "bearer-4.png",
      contact: {
        email: "email123@gmail.com",
        phone: "+91 9876543210",
      },
      description:
        "I am Sanobar Ali Qureshi, Advocate practicing in Supreme Court of India. I am also the National President, Quresh Conference Regd.",
      posts: [
        "I did my B.A. Honors (Psychology) in 1993 and Law in 1996 from Aligarh Muslim University and Completed my LLM in 2023 from Chaudhary Charan Singh University, Meerut",
        "I am associated with several organizations and discharging functions in various capacities and hold various posts like General Sec. in Law Society during 1994-1995",
        "I was president of Indian Lawyers Association, Delhi Unit, National President of 80% OBC Muslim Adhikar Federation",
        "Ex-District President, AIJQ in the year 2007",
      ],
    }
  ];

  return (
    <div className="w-full">
      <Navbar></Navbar>
      <div className="w-full flex flex-col items-center bg-white">
        {profiles.map((profile, index) => (
          <div key={index} className="w-full px-24 py-10 gap-5 flex">
            <div className="w-[300px]">
              <img src={profile.image} alt={`${profile.name} profile`} />
              <h1 className="text-2xl font-semibold text-start">{profile.name}</h1>
              <h5 className="text-start font-semibold">{profile.title}</h5>
              <div className="h-[100px] leading-8 mt-10">
                <h6 className="text-lg font-medium text-start">Contact Us</h6>
                <p className="text-start">{profile.contact.email}</p>
                <p className="text-start">{profile.contact.phone}</p>
              </div>
            </div>
            <div className="w-[900px] text-start p-3">
              <div className="text-md">
                <p>{profile.description}</p>
                <h1 className="mt-5 font-bold text-[24px]">Other Posts:</h1>
                {profile.posts.map((post, postIndex) => (
                  <p key={postIndex} className="flex mt-3">
                    <img className="w-3 mr-3 mt-[6px] h-3" src="dot.png" alt="bullet point" />
                    {post}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Dashboard></Dashboard> */}
      <Footer></Footer>
    </div>
  );
};

export default MoinProfile;
