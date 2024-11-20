import Navbar from '../../Navbar/Navbar'
import Showcase from '../Home/Showcase'
import Dashboard from '../Home/Dashboard'
import Footer from '../Home/Footer'
import Page3 from './Page3'
import VisionCard from '../../component/VisionCard'

const About = () => {
  return (
    <div>
        <Navbar></Navbar>
    <div className='w-full  bg-black bg-center	flex items-center justify-center  mb-24'
    >
      <img src="about.png" alt="about.png" className='w-fit' />
      <div className='text-white max-md:text-xs text-center leading-10 absolute  pt-12 '>
        <p>Home / About us</p>


        <h1 className=' text-5xl max-md:text-xs font-semibold'>About Us</h1>
      </div>
    </div>
    {/* <Page1></Page1> */}
    < Page3></Page3>
    <Showcase></Showcase>
    <VisionCard></VisionCard>

  <Dashboard></Dashboard>
  <Footer></Footer>

    </div>
  )
}

export default About