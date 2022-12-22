import React from 'react'
import styled, { keyframes } from 'styled-components'
import Tilt from 'react-parallax-tilt';
import { BsChevronDoubleDown } from 'react-icons/bs'

const MainLogo = () => {
  return (
    <MainPage>
      <LogoContainer>
        <PortfolioName>
          <Tilt>Jinhyo's Portflio</Tilt>
        </PortfolioName>
        <ScrollText>
          Scroll Down
          <Icon><BsChevronDoubleDown style={{marginBottom: '-5px'}}/></Icon>
        </ScrollText>
      </LogoContainer>
    </MainPage>
  )
}

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-10px);
  }
`

const MainPage = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`

const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 13vh;
  width: 50%;
  background: #212121;
  text-align: center;

  &:hover {
    cursor: default;
  }
`

const PortfolioName = styled.div`
  color: #fff;
  font-size: 6rem;
  animation: ${fadein} 2s;
`

const ScrollText = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 9.5rem;
  margin-top: 6rem;
  color: #8685ef;
  opacity: 0;
  animation-name: ${fadein};
  animation-duration: 2s;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;
  font-size: 20px;
`

const Icon = styled.div`
  float: right;
  animation: ${bounce} 3s ease infinite;
`

export default MainLogo