
import './App.css'
import NavBar from './Components/Header/NavBar'
import Footer from './Components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import {HashRouter as Router, Route,Routes} from 'react-router-dom'
import Error from './pages/Error'
function App() {
 
  return (
    <div  className="bg-gray-100 min-h-screen flex flex-col">
      <NavBar />
      {/* <HeroSection cardData={data}
      /> */}
      <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </Router>
      <Footer/>
    </div>
  )
}

export default App
