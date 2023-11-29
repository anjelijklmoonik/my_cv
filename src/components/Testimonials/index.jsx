const Testimonials = () => {
  return (
<div>
  {/* ======= Besties Section ======= */}
  <section id="testimonials" className="testimonials section-bg">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Besties</h2>
      </div>
      <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="img\testimonials\mon.jpg" className="testimonial-img" alt />
              <h3>Monica</h3>
              <h4>FKIP Student</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                She is whom I can tell all of my problem and my comfort person. She has a lot of talents, but she didn't realize it.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
          </div>{/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="img/testimonials/gus.jpg" className="testimonial-img" alt />
              <h3>Agustina</h3>
              <h4>FKIP Student</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                She is a very nice girl. She is so kind-hearted. Even though it also her weaknesses. 
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
          </div>{/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="img/testimonials/dey.jpg" className="testimonial-img" alt />
              <h3>Deyla</h3>
              <h4>FK Student</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                She is the person who I appreciated. She has a pure heart, a good personality, and she is a nice kid.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
          </div>{/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="img/testimonials/nessa.jpg" className="testimonial-img" alt />
              <h3>Vanessa</h3>
              <h4>FKIP Student</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                She is the first girl that I know in my highschool life. She has a unique personality. She can be in a good mood and then, the next minute she can have a vary bad mood.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
          </div>{/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
              <h3>Swingly</h3>
              <h4>Entrepreneur</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                He is the only boy that we can trade on. He is our gentlement.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
          </div>{/* End testimonial item */}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  </section>{/* End Testimonials Section */}
</div>

  )
}

export default Testimonials;