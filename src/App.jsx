
import './App.css'
import NavBar from './Components/Header/NavBar'
import HeroSection from './Components/HeroSection/HeroSection'
import Footer from './Components/Footer/Footer'

function App() {
  
  let data=[
    {title:'Card1', description:'This is Card 1', text:'Click me'},
    {title:'Card2', description:'This is Card 2', text:'Click me'},
    {title:'Card3', description:'This is Card 3', text:'Click me'}
  ]

  return (
    <div  className="bg-gray-100 min-h-screen flex flex-col">
      <NavBar />
      <HeroSection cardData={data}/>
      <Footer/>
    </div>
  )
}

export default App
