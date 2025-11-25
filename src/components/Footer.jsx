const Footer = () => {
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
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            Kerry<span>Mureti</span>
          </div>
          <ul className="footer-links">
            <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a></li>
            <li><a href="#experience" onClick={(e) => handleSmoothScroll(e, '#experience')}>Experience</a></li>
            <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>Projects</a></li>
            <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')}>Skills</a></li>
            <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a></li>
          </ul>
          <div className="copyright">
            <p>&copy; 2025 Kerry Mureti Njagi. All rights reserved. | Mechanical Engineer & Innovator</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

