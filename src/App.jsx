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

function App() {

  return (
    <>
    <Routes>

     <Route exact path="/" element={<Home></Home>} />
     <Route exact path="/about" element={<About></About>} />
     <Route exact path="/office" element={<OfficeBearers></OfficeBearers>} />
     <Route exact path="/governing" element={<GoverningCommunity></GoverningCommunity>} />
     <Route exact path="/saleem" element={<SaleemProfile></SaleemProfile>} />
     <Route exact path="/sanobar" element={<SanobarProfile></SanobarProfile>} />
     <Route exact path="/moin" element={<MoinProfile></MoinProfile>} />
     <Route exact path="/mohd" element={<MohdProfile></MohdProfile>} />
     <Route exact path="/guidance" element={<EducationGudiance></EducationGudiance>} />
     <Route exact path="/skill" element={<SkillDevelopment></SkillDevelopment>} />
     <Route exact path="/scholarship" element={<Scholarship></Scholarship>} />
     <Route exact path="/quresh" element={<Quresh></Quresh>} />
    </Routes>


    </>
  )
}

export default App
