import React from 'react'
import Navbar from './Home/NavBar'
import HeroSection from './Home/HeroSection'
import OurProject from './Home/OurProject'
import News from './Home/News'
import Service from './Home/Service'
import Resources from './Home/Resources'
import PhotoGallery from './Home/PhotoGallery'
import Clients from './Home/Clients'
import Poster from './Home/Poster'
import Footer from './Home/Footer'
import ScrollToTopButton from './Home/ScrollToTop'
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OurProject />
      <News />
      <Service />
      <Resources />
      <PhotoGallery />
      <Clients />
      <Poster />
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default App
