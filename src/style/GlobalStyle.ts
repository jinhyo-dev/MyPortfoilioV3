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
  }

  .logo {
    width: 22px;
    margin-bottom: -2px;
    margin-right: 6px;
  }
  
  .li-logo {
    margin-bottom: -3px;
    width: 1.2rem;
    margin-right: 6px;
  }
  
  .github-icon {
    font-size: 3.2rem;
  }

  .github-icon:hover {
    color: #5c6bc0;
    cursor: pointer;
  }
  
  .instagram-icon {
    font-size: 3.2rem;
    width: 3.2rem;
    margin-left: 2rem;
  }
  
  .instagram-icon:hover {
    cursor: pointer;
  }
  
  .discord-icon {
    font-size: 3.5rem;
    margin-left: 2rem;
  }

  .discord-icon:hover {
    cursor: pointer;
    color: #5562ea;
  }
  
  .mail-icon {
    font-size: 3.5rem;
    margin-left: 2rem;
  }

  .mail-icon:hover {
    cursor: pointer;
    color: #d43f33;
  }
  
  
`