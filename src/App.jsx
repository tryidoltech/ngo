import './App.css'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import OfficeBearers from './Pages/Governing Body/OfficeBearers'
import GoverningCommunity from './Pages/Governing Body/GoverningCommunity'
import SaleemProfile from './Pages/Governing Body/SaleemProfile'
import SanobarProfile from './Pages/Governing Body/SanobarProfile'
import MohdProfile from './Pages/Governing Body/MohdProfile'
import MoinProfile from './Pages/Governing Body/MoinProfile'
import EducationGudiance from './Pages/Programs/EducationGudiance'
import SkillDevelopment from './Pages/Programs/SkillDevelopment'
import Scholarship from './Pages/Programs/Scholarship'
import Quresh from './Pages/Programs/Quresh'
import Membership from './Pages/Membership'
import ContactUs from './Pages/ContactUs'
import Gallery from './Pages/Gallery'
import PhotoGallery from './Pages/gallery/PhotoGallery'
import Donate from './Pages/Donate'
import AnnualReports from './Pages/reports/Annual'
// import Videogallery from './Pages/gallery/Videogallery'

function App() {

  return (
    <>
    <Routes>
     <Route  path="/" element={<Home></Home>} />
     <Route  path="/about" element={<About></About>} />
     <Route  path="/office" element={<OfficeBearers></OfficeBearers>} />
     <Route  path="/governing" element={<GoverningCommunity></GoverningCommunity>} />
     <Route  path="/saleem" element={<SaleemProfile></SaleemProfile>} />
     <Route  path="/sanobar" element={<SanobarProfile></SanobarProfile>} />
     <Route  path="/moin" element={<MoinProfile></MoinProfile>} />
     <Route  path="/mohd" element={<MohdProfile></MohdProfile>} />
     <Route  path="/guidance" element={<EducationGudiance></EducationGudiance>} />
     <Route  path="/skill" element={<SkillDevelopment></SkillDevelopment>} />
     <Route  path="/scholarship" element={<Scholarship></Scholarship>} />
     <Route  path="/quresh" element={<Quresh></Quresh>} />
     <Route  path="/membership" element={<Membership></Membership>} />
     <Route  path="/contact" element={<ContactUs></ContactUs>} />
     <Route  path="/photo" element={<PhotoGallery></PhotoGallery>} />/
     <Route path="/gallery" element={<Gallery></Gallery>}>
     
     {/* <Route path='gallery/videogallery' element={<Videogallery></Videogallery>}> </Route> */}
     </Route>
     <Route path="/donate" element={<Donate></Donate>}></Route>
     <Route path="/reports" element={<AnnualReports></AnnualReports>}></Route>
     
    </Routes>
    </>
  )
}

export default App
