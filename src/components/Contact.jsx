const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-title">
          <h2>Let's Connect</h2>
          <p>Get in touch for collaborations and opportunities</p>
        </div>
        <div className="contact-container">
          <div className="contact-intro">
            <h3>Ready to work together?</h3>
            <p>I'm always open to discussing new opportunities, innovative projects, or just having a great conversation about engineering and technology. Feel free to reach out through any of the channels below!</p>
          </div>
          
          <div className="contact-methods">
            <div className="contact-method" onClick={() => window.open('mailto:kmn2157@columbia.edu', '_blank')}>
              <i className="fas fa-envelope"></i>
              <h4>Email</h4>
              <p>kmn2157@columbia.edu</p>
            </div>
            
            <div className="contact-method" onClick={() => window.open('tel:+16463267525', '_blank')}>
              <i className="fas fa-phone"></i>
              <h4>Phone</h4>
              <p>+1 (646) 326-7525</p>
            </div>
            
            <div className="contact-method" onClick={() => window.open('https://linkedin.com/in/kerrymureti', '_blank')}>
              <i className="fab fa-linkedin"></i>
              <h4>LinkedIn</h4>
              <p>Connect with me professionally</p>
            </div>
            
            <div className="contact-method">
              <i className="fas fa-map-marker-alt"></i>
              <h4>Location</h4>
              <p>New York, NY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

