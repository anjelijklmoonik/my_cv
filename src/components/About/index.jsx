const About = () => {
  return (
<section id="about" className="about">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>About</h2>
        <p>Hi.. My Name is Anjeli.</p>
      </div>
      <div className="row">
        <div className="col-lg-4">
        <img src="img/profile.jpeg" class="img-fluid" alt="Profile Picture of Anjeli Saskia Moonik"/>
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content">   
          <h3>Application Developer &amp; Web Developer.</h3>
          <p className="fst-italic">HI! My full name is Moonik, Anjeli Saskia, and you can call me Anjeli. 
            I'm a part of Computer Science Faculty of Klabat University, and my major is Informatics.
            I'm not that good when it comes to Coding, but I really want to be an Application Developer in the future.
            This is my Mid Project from Front-End Web Development. So, I would like to welcome You and enjoy!
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right" /> <strong>Birthday:</strong> <span>09 December 2002</span></li>
                <li><i className="bi bi-chevron-right" /> <strong>Website:</strong> <span>www.example.com</span></li>
                <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>+6285825529340</span></li>
                <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>Manado, Indonesia</span></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right" /> <strong>Age:</strong> <span>20</span></li>
                <li><i className="bi bi-chevron-right" /> <strong>Education:</strong> <span>S1 Student</span></li>
                <li><i className="bi bi-chevron-right" /> <strong>PhEmailone:</strong> <span>moonikanjeli@gmail.com</span></li>
                <li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Available</span></li>
              </ul>
            </div>
          </div>
          <p>As you can see, that some informations about me. It's not that attractive, but still I like it.
          </p>
        </div>
      </div>
    </div>
  </section>

  )
}

export default About;