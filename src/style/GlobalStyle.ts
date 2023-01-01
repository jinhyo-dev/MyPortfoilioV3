import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    background-color: #313131;
    transition: all 0.35s;
  }

  .error {
    color: #fff;
    text-align: center;
  }
  
  .project-mobile-container {
    height: 250vh;
    width: 100%;
  }
  
  .container {
    height: 100vh;
    width: 100%;
  }

  .subheading {
    margin-top: 3vh;
    height: 1.5rem;
    border-bottom: 1px solid #fff;
    font-size: 1rem;

    @media screen and (max-width: 1200px) {
      font-size: 0.8rem;
    }

    @media screen and (max-width: 900px) {
      width: 100%;
      margin-top: 2vh;
    }
  }

  .logo {
    width: 1.4rem;
    margin-bottom: -2px;
    margin-right: 6px;

    @media screen and (max-width: 1200px) {
      width: 1.2rem;
    }

    @media screen and (max-width: 1000px) {
      width: 1rem;
    }
  }
  
  .li-logo {
    margin-bottom: -3px;
    width: 1.2rem;
    margin-right: 6px;

    @media screen and (max-width: 900px) {
      width: 1rem;
    }
  }
  
  .github-icon {
    font-size: 3.2rem;
    cursor: pointer;
    
    &:hover {
      color: #5c6bc0;
    }
    
    @media screen and (max-width: 900px) {
      width: 2.2rem;
    }
  }

  
  .instagram-icon {
    font-size: 3.2rem;
    width: 3.2rem;
    margin-left: 2rem;
    cursor: pointer;
    
    &:hover {
      color: #e1306c;
    }
    @media screen and (max-width: 900px) {
      margin-left: 1.3rem;
      width: 2.2rem;
    }
  }
  
  .discord-icon {
    font-size: 3.5rem;
    margin-left: 2rem;
    cursor: pointer;
    
    &:hover {
      color: #5562ea;
    }
    
    @media screen and (max-width: 900px) {
      margin-left: 1.3rem;
      width: 2.5rem;
    }
  }
  
  .mail-icon {
    font-size: 3.5rem;
    margin-left: 2rem;
    cursor: pointer;
    
    &:hover {
      color: #d43f33;  
    }
    
    @media screen and (max-width: 900px) {
      margin-left: 1.3rem;
      width: 2.5rem;
    }
  }
`