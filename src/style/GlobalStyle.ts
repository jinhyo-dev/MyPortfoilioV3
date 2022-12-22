import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    background-color: #212121;
  }

  .container {
    height: 100vh;
    width: 100%;
  }

  .subheading {
    margin-top: 3vh;
    height: 1.5rem;
    border-bottom: 1px solid #fff;
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
`