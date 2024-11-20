import React from 'react'

const Videogallery = () => {

  const Images = [
    { image: "photo2.png" },
    { image: "photo3.png" },
    { image: "photo4.png" },
    { image: "photo5.png" },
    { image: "photo6.png" },
    { image: "photo7.png" },
    { image: "photo8.png" },
    { image: "photo9.png" },
  ];
  return (
    <div>
      <div className="   w-full">
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5'>
            {Images.map((Image, index) => (
              <div key={index} className="w-full">
                <div className=" h-[45vh] w-[25vw] max-md:w-full  flex-wrap flex max-md:flex-col bg-white border-2 rounded-2xl overflow-hidden">
                  <div className=" h-[35vh] w-[25vw] max-md:w-full bg-red-500 rounded-b-[2rem]">

                  </div>

                  <h1 className='py-5 px-5'>Headline</h1>
                {/* <img
                  src={Image.image}
                  alt={`Card image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                 */}
                </div>
              </div>
            ))}

            </div>
          
          <div className="flex py-5 justify-center">
            <button className="px-6 py-3 rounded-md text-[#6c62ee] shadow-lg">
              Load more
            </button>
          </div>
        </div>
    </div>
  )
}

export default Videogallery