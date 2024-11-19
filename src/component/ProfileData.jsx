// import Dashboard from "../Home/Dashboard";

const ProfileData = (name,title, contact,email,phone, bio,otherPosts,) => {
  return (
    <div className="w-full">
      <Navbar></Navbar>
      <div className="w-full min-h-full py-10 flex  bg-white">
        <div className="w-full px-24 max-md:px-10  py-20 max-md:flex-col   flex">
          <div className=" min-w-[18vw] max-md:w-full   ">
            <img className="w-[15vw] max-md:w-fit" src="bearer-1.png" alt="" />
            <h1 className="text-xl font-semibold py-2 	" UserName={name}>
            </h1>
            <h5 className="  italic"title={title}>President</h5>
            <div className=" leading-8 py-2  mt-6">
              <h6 className="text-sm font-semibold   " contact={contact}></h6>
              <p className=" py-2  text-sm" email={email}></p>
              <p className="   text-sm" phone={phone}></p>
            </div>
          </div>
          <div className="  ">
          <div className="">
  <p className="text-lg">
    I am Sanobar Ali Qureshi, Advocate practicing in Supreme Court of India. I
    am also the National President, Quresh Conference Regd.
  </p>
  <h1 className="mt-5 font-bold text-xl">Other Posts :</h1>
  <ul className="list-disc marker:text-2xl leading-relaxed mt-3">
    <li>

    </li>
  </ul>
</div>

          </div>
        </div>
      </div>
      {/* <Dashboard></Dashboard> */}
      <Footer></Footer>
    </div>
  );
};

export default ProfileData;
