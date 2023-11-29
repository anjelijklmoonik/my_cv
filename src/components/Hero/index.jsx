import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  useEffect(() => {
    // Element for Typed.js
    const typedElement = document.querySelector('.typed');

    // Options for Typed.js (adjust as needed)
    const options = {
      strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // Initialize Typed.js
    const typed = new Typed(typedElement, options);

    // Clean up Typed.js on component unmount
    return () => {
      typed.destroy();
    };
  }, []); // Make sure to provide an empty dependency array so the effect runs only once

  return (
    <div>
      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay={100}>
          <h1>ANJELI SASKIA MOONIK</h1>
          <p>I'm <span className="typed" /></p>
          <div className="social-links">
            {/* <a href="#" className="twitter"><i className="bx bxl-twitter" /></a> */}
            <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
            {/* <a href="#" className="google-plus"><i className="bx bxl-skype" /></a> */}
            {/* <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
