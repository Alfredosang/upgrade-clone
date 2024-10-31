import Hero from '@/components/Hero'
import React from 'react'
import AboutUs from '@/components/AboutUs'
import Trust from '@/components/Trust'
import Services from '@/components/Services'
import Testimonal from '@/components/Testimonal'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <Trust/>
      <Services/>
      <Testimonal/>
      <Footer/>
      
    </div>
  )
}

export default page
