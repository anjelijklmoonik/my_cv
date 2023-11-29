const Footer = () => {
  return (
<footer id="footer">
    <div className="container">
      <h3>Anjeli Moonik</h3>
      <p>You can conntac me here!</p>
      <div className="social-links">
        {/* <a href="#" className="twitter"><i className="bx bxl-twitter" /></a> */}
        <a href="https://www.facebook.com/monichaanjeli.moonik?mibextid=ZbWKwL" className="facebook"><i className="bx bxl-facebook" /></a>
        <a href="https://instagram.com/saskianjeli?igshid=OGQ5ZDc2ODk2ZA==" className="instagram"><i className="bx bxl-instagram" /></a>
        {/* <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
        <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a> */}
      </div>
      <div className="copyright">
        © Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: [license-url] */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ */}
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer;