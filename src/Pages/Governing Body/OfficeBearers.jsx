import Navbar from '../../Navbar/Navbar'
import Showcase from '../Home/Showcase'
import Footer from '../Home/Footer'
import { NavLink } from 'react-router-dom'

const OfficeBearers = () => {
  return (
    <div className='w-full'>
        <Navbar></Navbar>
        <div
        className="w-full h-[362px] bg-center	flex items-center justify-center  mb-20"
        style={{ backgroundImage: `url(governing.png)` }}
      >
        <div className="text-white leading-10  max-md:text-center  pt-12 ">
          <p className='max-md:text-xl'>Home / Governing Body</p>

          <h1 className=" text-5xl max-md:text-2xl font-semibold">Office Bearers</h1>
        </div>
      </div>
    <div className='w-full  max-md:flex  flex items-center  '>
        <div className='w-full  max-md:flex-wrap justify-center items-center   gap-10 flex'>
            <div className='card'>
                <img src="bearer1.png" alt=""  className=''/>
                <h1 className='text-lg font-semibold 	'>Sanobar Ali Qureshi</h1>
                <h5>President</h5>
                <NavLink to="/sanobar">
    <button className="bg-[#5044eb] text-white px-10 py-2 left-[4rem] rounded-md relative bottom-[9rem]  transition-opacity duration-300">
      View Profile
    </button>
    </NavLink>
            </div>
            <div className="card  h-full group relative">
  <div>
    <img src="bearer-2.png" alt="" />
  </div>

  <div className="card">
    <h1 className="text-lg font-semibold">Saleem Ahmed Qureshi</h1>
    <h5>Vice President</h5>

    <NavLink to="/saleem">
    <button className="bg-[#5044eb] text-white px-10 py-2 left-[4rem] rounded-md relative bottom-[9rem]  transition-all duration-300">
      View Profile
    </button>
    </NavLink>
  </div>
</div>
            <div className='card  h-full '>
                <img src="bearer-3.png" alt="" />
                <h1 className='text-lg font-semibold 	'>Mohd Aashqeen Qureshi</h1>
                <h5>Secretary</h5>
                <NavLink to="/mohd">
    <button className="bg-[#5044eb] text-white px-10 py-2 left-[4rem] rounded-md relative bottom-[9rem]  transition-all duration-300">
      View Profile
    </button>
    </NavLink>

            </div>
            <div className='card w-[300px] h-full '>
                <img src="bearer-4.png" alt="" />
                <h1 className='text-lg font-semibold	'>Moin Khaleel Qureshi</h1>
                <h5>Women&apos;s wing President</h5>
                <NavLink to="/moin">
    <button className="bg-[#5044eb] text-white  px-10 py-2 left-[4rem] rounded-md relative bottom-[9rem]  transition-all duration-300">
      View Profile
    </button>
    </NavLink>
            </div>

        </div>
    </div>
    <Showcase></Showcase>
    <div className='w-full h-20'></div>
    <Footer></Footer>
    </div>
  )
}

export default OfficeBearers