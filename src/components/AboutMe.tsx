import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AboutMe = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div>
      <h1>Fade</h1>
      <div style={{ width: '80%', height: '20rem', backgroundColor: '#f00' }} data-aos={"zoom-in"}></div>
    </div>
  )
}

export default AboutMe