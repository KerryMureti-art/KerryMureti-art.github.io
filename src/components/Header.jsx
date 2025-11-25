import { useState, useEffect } from 'react'

const Header = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const handleNavClick = () => {
    setMenuOpen(false)
  }

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
      setMenuOpen(false)
    }
  }

  return (
    <header>
      <div className="container">
        <nav>
          <a href="#home" className="logo" onClick={(e) => handleSmoothScroll(e, '#home')}>
            Kerry<span>Mureti</span>
          </a>
          <div className={`nav-center ${menuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a></li>
              <li><a href="#experience" onClick={(e) => handleSmoothScroll(e, '#experience')}>Experience</a></li>
              <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>Projects</a></li>
              <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')}>Skills</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Let's Connect</a></li>
            </ul>
            <div className="theme-toggle" onClick={toggleTheme}>
              <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </div>
          </div>
          <div className="menu-toggle" onClick={handleMenuToggle}>
            <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

