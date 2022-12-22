import React from 'react'
import MainLogo from "./components/MainLogo";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useMediaQuery } from 'react-responsive';

const App = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 900px)'
  })

  return (
    isDesktop ? (
      <div>
        <MainLogo/>
        <AboutMe/>
        <Projects/>
        <Contact/>
      </div>
    ): (<h2 className={'error'}>Mobile version is not yet supported. Please use the desktop.</h2>)
  )
}

export default App