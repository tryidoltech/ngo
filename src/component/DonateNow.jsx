import React from 'react'
import { NavLink } from 'react-router-dom'

const DonateNow = () => {
  return (
    <div className=''>
       <div className=" h-full w-full  relative  flex justify-center items-center ">
        <div className=" absolute bottom-[-3rem]  ">

<div className='h-full w-full  relative  flex justify-center items-center'>
<img src="/Footerframe.png" alt="" className='h-[30vh] w-[90vw] max-md:h-[20vh]' />
<h1 className=' absolute text-4xl max-md:text-sm font-bold text-white text-center'>Start Contributing for <br /> better tomorrow <br /> <NavLink to="/donate">
<span className='text-sm max-md:text-xs font-normal relative top-3 bg-white  text-[#5044eb] px-3 py-3 max-md:p-1 rounded-lg'>Donate Now</span></NavLink></h1>
{/* <button className='absolute mt-[10rem] max-md:mt-[5rem] bg-white p-2 rounded-lg border-2'></button> */}
</div>

        </div>
      </div>
    </div>
  )
}

export default DonateNow

