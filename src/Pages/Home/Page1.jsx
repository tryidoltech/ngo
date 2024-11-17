
const Page1 = () => {
  return (
    <div className="  h-full w-full flex justify-center  items-center">
      <div className=" flex justify-center items-center px-[6vw] max-md:flex-col max-md:gap-10 w-full h-full ">
      <div className="relative flex-shrink-0  ">
        <div className="absolute w-full h-full z-10  rounded-lg  "></div>
        <div className="flex flex-col w-[50vw] max-md:w-full bg-white  ">
          <img
            src="Group 10.png"
            alt="Helping Hands"
            className="rounded-lg w-[40vw] max-md:w-full"
          />

        </div>
      </div>

      <div className=" w-[50vw] max-md:w-full bg-white    ">
        <div>
        <h2 className="text-sm font-normal   text-indigo-600">ABOUT US</h2>
        <div className='w-10 bg-blue-700 h-[2px] ml-1 rounded-sm'></div>
        </div>
        <h1 className="text-3xl max-md:text-sm text-start font-bold pb-1 text-gray-800">
          We are an NGO that helps the needy ones
        </h1>
        <p className="text-gray-600 max-md:text-sm text-start pb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          adipiscing elit, sed do eiusmod tempor.
        </p>

        <div className="space-y-4">
          <div className="p-4 text-start	pb-8  bg-indigo-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold pb-1 text-gray-800">Our Mission</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>

          <div className="p-4 text-start pb-8 bg-indigo-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold pb-1 text-gray-800">Our Vision</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page1;
