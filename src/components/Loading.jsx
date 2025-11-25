import { useState, useEffect } from 'react'

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false)
      setTimeout(() => {
        const loadingEl = document.getElementById('loading')
        if (loadingEl) {
          loadingEl.style.display = 'none'
        }
      }, 500)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="loading" id="loading">
      <div className="spinner"></div>
    </div>
  )
}

export default Loading

