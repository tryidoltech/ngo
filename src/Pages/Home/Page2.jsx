import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Karelena Marin",
    title: "Bank Manager",
    img: "Karelena.jpg",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Mathew Wade",
    title: "Social Worker",
    img: "Mathew.jpg",
  },

];

export default function Page2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col items-center h-[80vh] py-12 w-full px-6 bg-white">
      <h2 className="text-3xl font-bold mb-2 text-black">What people say</h2>
      <p className="text-gray-500 text-center mb-8 max-w-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      </p>

      <div className="grid grid-cols-3 max-md:grid-cols-1 items-center  px-22">
        <button onClick={handlePrev} className="w-10 h-10 mr-4 flex items-center justify-center  rounded-full">
          <img src="arrow-black-left.png" alt="Previous" />
        </button>

        <div className="flex flex-col md:flex-row items-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={` flex flex-col bg-white rounded-lg shadow-md  max-w-xs transition-opacity duration-300 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className=" w-5 h-5 mb-4">
                <img src="2.png" alt="" />
              </div>
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={handleNext} className="w-10 h-10 ml-[24vw] flex items-center justify-center  rounded-full">
          <img src="arrow-black-right.png" alt="Next" />
        </button>
      </div>

      <div className="flex gap-2  mt-4">
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
