import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testmonials from './components/Testimonials/Testmonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/video player/Videoplayer'

const App = () => {
  const [play,setPlay]=useState(false)
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
      <Title title='Our Program' subTitle='What We Offer' />
      <Programs />
      <About setPlay={setPlay}/>
      <Title title='Our Campus' subTitle='Campus Pics' />
      <Campus />
      <Title title='Testimonials' subTitle='What Our Students say' />
      <Testmonials />
      <Title title='Contact Us' subTitle='Share What you think' />
      <Contact />
      </div>
       <Footer />
       <Videoplayer setPlay={setPlay} play={play} />
    </>
  )
}

export default App