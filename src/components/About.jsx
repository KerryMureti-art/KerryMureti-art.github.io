const About = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const targetSection = document.querySelector(targetId)
    if (targetSection) {
      const headerHeight = document.querySelector('header').offsetHeight
      const targetPosition = targetSection.offsetTop - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>
        <div className="about-content">
          <div className="about-image">
            <img src="/images/labwork1.jpg" alt="Engineering Innovation" />
            <div className="image-overlay-text">Engineering Innovation</div>
          </div>
          <div className="about-text">
            <h3>I design and develop engineering solutions that solve real-world problems</h3>
            <p>Hello! I'm Kerry Mureti Njagi, a passionate Mechanical Engineering student at Columbia University with a minor in Artificial Intelligence. I specialize in mechanical design, research, and innovative engineering solutions that make a meaningful impact.</p>
            <p>As an Egleston Scholar (top 1% of Columbia Engineering applicants) and Mahendra Mehta Scholar, I've worked on diverse impactful projects ranging from assistive mobility technologies and environmental engineering to Formula Racing aerodynamics and community development initiatives.</p>
            <p>My experience spans from leading research on photocatalytic water treatment systems that improved water quality by 70%, to developing carbon fiber aerodynamic components for Formula Racing, to mentoring over 1000 underprivileged students in STEM subjects.</p>
            <ul className="info-list">
              <li><strong>Name:</strong> Kerry Mureti Njagi</li>
              <li><strong>Email:</strong> kmn2157@columbia.edu<br />kerrymureti@gmail.com</li>
              <li><strong>Location:</strong> New York, NY</li>
              <li><strong>Education:</strong> BS Mechanical Engineering, Minor in Artificial Intelligence, Columbia University</li>
            </ul>
            <a href="#contact" className="btn" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

