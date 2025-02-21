import React from 'react'
import HeroSection from '../Components/HeroSection/HeroSection'

function Home() {
     let data=[
    {title:'Card1', description:'This is Card 1', text:'Click me'},
    {title:'Card2', description:'This is Card 2', text:'Click me'},
    {title:'Card3', description:'This is Card 3', text:'Click me'}
  ]

  return (
    <>
     <HeroSection cardData={data}/>
    </>
  )
}

export default Home
