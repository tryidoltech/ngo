import Navbar from '../../Navbar/Navbar'
import Showcase from '../Home/Showcase'
// import Dashboard from '../Home/Dashboard'
import Footer from '../Home/Footer'
import Page3 from './Page3'

const About = () => {
  return (
    <div>
        <Navbar></Navbar>
    <div className='w-full h-[362px] bg-center	flex items-center justify-center  mb-24'
    style={{ backgroundImage: `url(about.png)` }}>
      <div className='text-white leading-10  pt-12 w-[230px] h-[200px] '>
        <p>Home / About us</p>

        <h1 className=' text-5xl font-semibold'>About Us</h1>
      </div>
    </div>
    {/* <Page1></Page1> */}
    < Page3></Page3>
    <Showcase></Showcase>
    <div className=' px-24 py-8'>
      <img src="Frame 1149.png" alt="" />
    </div>

  {/* <Dashboard></Dashboard> */}
  <Footer></Footer>

    </div>
  )
}

export default About