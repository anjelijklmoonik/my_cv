import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Facts from '../components/Facts';
import Skills from '../components/Skills';
import Resume from '../components/Resume';
// import Services from '../components/Services';
import Testimonial from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import Portfolio from '../components/Portofolio';


const Pages = () => {
  return (
    <div className='body-wrap'>
      <Header />
      <Hero />
        <main id='main'>
          <About />
          {/* <Facts /> */}
          <Skills />
          <Resume />
          {/* <Portfolio /> */}
          {/* <Services /> */}
          <Testimonial />
          <Contact />
        </main>
        <Footer />
    </div>
  )
}

export default Pages;