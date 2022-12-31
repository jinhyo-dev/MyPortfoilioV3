import React from 'react'
import MainLogo from "./components/MainLogo";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {

  return (
    <div>
      <MainLogo/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App