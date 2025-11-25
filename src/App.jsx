import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Loading from './components/Loading'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('.section')
    sections.forEach(section => {
      observer.observe(section)
    })

    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const heroContent = document.querySelector('.hero-content')
      
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Stagger animations
  useEffect(() => {
    const addStaggerAnimation = (selector, delay = 100) => {
      const elements = document.querySelectorAll(selector)
      elements.forEach((element, index) => {
        element.style.animationDelay = `${index * delay}ms`
      })
    }

    // Wait for components to mount
    setTimeout(() => {
      addStaggerAnimation('.experience-item')
      addStaggerAnimation('.skill-category')
      addStaggerAnimation('.project-item')
    }, 100)
  }, [])

  // Floating animation for hero image
  useEffect(() => {
    const heroImage = document.querySelector('.hero-image img')
    if (!heroImage) return

    const interval = setInterval(() => {
      heroImage.style.transform = 'translateY(-10px)'
      setTimeout(() => {
        heroImage.style.transform = 'translateY(0px)'
      }, 1000)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Loading />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App

