const Skills = () => {
  return (
<div>        {/* ======= Skills Section ======= */}
  <section id="skills" className="skills section-bg">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Skills</h2>
        <p>I'm just an ordinary girl, so I don't think that I have that much of skills, but I do have some skills. And you can read it below.</p>
      </div>
      <div className="row skills-content">
        <div className="col-lg-6">
          <div className="progress">
            <span className="skill">HTML <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="progress">
            <span className="skill">CSS <i className="val">80%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="progress">
            <span className="skill">JavaScript <i className="val">70%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="progress">
            <span className="skill">WORD <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="progress">
            <span className="skill">EXCEL <i className="val">80%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="progress">
            <span className="skill">POWER POINT <i className="val">85%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/* End Skills Section */}
</div>


  )
}

export default Skills