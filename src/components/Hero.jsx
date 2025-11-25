import { useEffect, useState } from 'react'

const FULL_TITLE = "Hello, Welcome to Mureti's Portfolio"

const Hero = () => {
  const [displayedTitle, setDisplayedTitle] = useState('')

  useEffect(() => {
    let i = 0
    let timeoutId = null
    let initialTimer = null
    
    const typeWriter = () => {
      if (i < FULL_TITLE.length) {
        setDisplayedTitle(FULL_TITLE.substring(0, i + 1))
        i++
        timeoutId = setTimeout(typeWriter, 50)
      }
    }
    
    initialTimer = setTimeout(() => {
      typeWriter()
    }, 1000)

    return () => {
      if (initialTimer) clearTimeout(initialTimer)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

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
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{displayedTitle}</h1>
            <p>Mechanical Engineering Student at Columbia University specializing in automotive engineering and innovative mechanical solutions. Egleston Scholar, Mahendra Mehta Scholar, and passionate researcher developing assistive technologies and sustainable engineering solutions.</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn" onClick={(e) => handleSmoothScroll(e, '#projects')}>View My Work</a>
              <a href="#contact" className="btn" style={{background: 'transparent', border: '2px solid var(--primary-color)', color: 'var(--primary-color)'}} onClick={(e) => handleSmoothScroll(e, '#contact')}>Let's Connect</a>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com/in/kerrymureti" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/coverphoto.JPG" alt="Kerry Mureti Njagi" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

