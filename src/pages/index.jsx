import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Contact from '../components/Contact'
import Facts from '../components/Facts'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Portfolio from '../components/Portofolio'
import Resume from '../components/Resume'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Testimonials from '../components/Testimonials'

const Pages = () => {
  return (
    <div>
        <Header/>
        <main id='main'>
          <Hero/>
          <About/>
          <Facts/>
          <Skills/>
          <Resume/>
          <Portfolio/>
          <Services/>
          {/* <Testimonials/> */}
          <Contact/>
        </main>
        <Footer/>
    </div>
  )
}

export default Pages;