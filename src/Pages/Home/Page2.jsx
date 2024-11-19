import React from 'react'

const Page2 = () => {
  return (
    <div>
     
      <div className=' h-[45vh] max-md:h-full  bg-white   py-10 flex flex-col px-20 max-md:px-2 justify-between '>
       <div className='flex w-full max-md:gap-3 gap-5 flex-col text-start '>
       <div className='h-8 w-8 max-md:h-5 max-md:w-5'>
          <img src="2.png" alt="" />
        </div>
        <div className='max-md:w-full'>
          <p className='max-md:text-xs text-[#757575] text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur amet quam quos quis iste iusto at unde expedita odio dolor, nesciunt ut veniam sunt labore quaerat quae similique quo earum?
          </p>
        </div>
       </div>
        <div className='flex gap-10 mt-5  bg-white'>
          <div className='h-14 w-14 object-cover rounded-full overflow-hidden'>
            <img src="/Karelena.jpg" alt="" className='h-10 w-10 ' />
          </div>
          <div className='text-[#757575] '>
            <h1 className='max-md:text-sm'>Karelena Marin</h1>
            <p className='text-xs'>bank manager</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page2