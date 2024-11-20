import React from 'react'

const VisionCard = () => {

    const cards = [
        {
          name: "Our Mission",
          image: "mission.png",
        },
        {
          name: "Our Vision",
          
          image: "Group 37.png",
        },
      ];
  return (
    <div>
        <div className=" w-full max-md:px-5 px-24 flex items-center  justify-center gap-20  max-md:flex-wrap   py-8">
        {cards.map((cards, index) => (
          <div className="bg-white rounded-2xl shadow-lg w-[50vw] h-[30vh] max-md:w-full" key={index}>
            <div className="px-5  bg-red-600py-3">
              <div className="w-9 h-9 ">
                <img src={cards.image} alt="" />
              </div>
              <div>
                <h1 className="font-semibold text-lg">{cards.name}</h1>
                <p className="text-[#868686]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor adipiscing elit, sed do eiusmod tempor{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* <img src="Frame 1149.png" alt="" /> */}
      </div>
    </div>
  )
}

export default VisionCard