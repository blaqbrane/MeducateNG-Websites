import React from 'react'
import { Navbar,Hero, Features, CTA, Footer, Brand, FormData, About, Carousel, DisplayMouse } from "./ManageApp";
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='md:px-20'>
        
        <Hero/>
        <Features/>
        <Brand/>
        <About/>
        <Carousel/>
        {/* <CTA/> */}
      </div>
      <DisplayMouse/>
      <Footer/>
    </div>
  )
}

export default Home