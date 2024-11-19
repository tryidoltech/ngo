import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import { IoArrowForwardCircleOutline } from "react-icons/io5";
// import { IoArrowBackCircleOutline } from "react-icons/io5";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Page2 from '../Pages/Home/Page2';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const SwiperCards = () => {
    return (
       <div>
        <div className='flex h-[10vh] max-md:h-[10vh] flex-col w-full justify-center items-center px-20'>
            <h1 className='text-4xl font-semibold mt-20 max-md:text-xl '>What people say</h1>
            <p className=' mt-10  text-center max-md:text-xs'>Lorem ipsum dolor sit amet consectet, repellat aperiam eligendi explicabo eius fuga doloremque, <br /> quae veniam tempora nisi doloribus. Eaque, magni ipsa?</p>
        </div>
         <div className=" h-[80vh]    flex justify-center items-center relative">
          
          <div className="absolute px-[10rem] w-full  max-md:px-10 flex justify-between items-center ">
              <div className="prev-button cursor-pointer ">
              <IoIosArrowDropleft size={40} color='#757575'></IoIosArrowDropleft>
              </div>
              <div className="next-button cursor-pointer">
              <IoIosArrowDropright size={40} color='#757575'></IoIosArrowDropright >
              </div>
          </div>
          <div className="absolute bottom-[10vh] w-full flex justify-center">
              <div className="swiper-pagination custom-pagination"></div>
          </div>

          <div className=" w-[80vw] max-md:w-full   border-1 px-10">
              <div className='px-10'>
              <Swiper 
                  slidesPerView={2}
                  spaceBetween={80}
                  loop={true}
                  
                  pagination={{
                      clickable: true,
                      el: '.custom-pagination', // Assign custom pagination element
                  }}
                  navigation={{
                      nextEl: '.prev-button', // Assign custom navigation element
                      prevEl: '.next-button',
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                  breakpoints={{
                      // When window width is >= 640px
                      640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                      },
                      // When window width is >= 768px
                      768: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                      },
                      // Default (mobile view)
                      0: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                      },
                  }}
              >
                  <SwiperSlide className=''>
                      <Page2 />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Page2></Page2>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Page2></Page2>
                  </SwiperSlide>
                  
                  
              </Swiper>
              </div>
          </div>
      </div>
       </div>
    );
};

export default SwiperCards;
