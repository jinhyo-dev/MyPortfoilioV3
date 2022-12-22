import React from 'react'
import {GlobalStyle} from "./style/GlobalStyle";
import MainLogo from "./components/MainLogo";
import AboutMe from "./components/AboutMe";

const App = () => {

  return (
    <div>
      <GlobalStyle/>
      <MainLogo/>
      <AboutMe/>
    </div>
  )
}

export default App