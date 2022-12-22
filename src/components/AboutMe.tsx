import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styled, { keyframes } from "styled-components";
import JinhyoImage from '../../public/image/jinhyo.jpg'
import SchoolSvg from '../../public/svg/school.svg'
import CodeSvg from '../../public/svg/code.svg'
import GoLangSvg from '../../public/svg/golang.svg'
import ReactSvg from '../../public/svg/react.svg'
import PythonSvg from '../../public/svg/python.svg'
import JavaSvg from '../../public/svg/java.svg'
import Certificate from '../../public/svg/certificate.svg'
import Award from '../../public/svg/award.svg'

const AboutMe = () => {
  useEffect(() => {
    AOS.init({duration: 3000})
  }, [])

  return (
    <div className={'container'}>
      <AboutMeContainer data-aos={'zoom-in'}>
        <Title>
          About me.
        </Title>

        <ImageContainer>
          <img src={JinhyoImage} alt={'image'}/>
        </ImageContainer>

        <TextContainer>
          <Introduce>
            김진효 (Jinhyo Kim) | Frontend & Backend Developer
          </Introduce>

          <SkillsContainer>
            <div className={'subheading'}>
              <img src={SchoolSvg} alt={'schoolLogo'} className={'logo'}/>
              Educations.
            </div>
            <Ul>
              <li>경북소프트웨어고등학교 2021.03 ~ Current</li>
            </Ul>

            <div className={'subheading'}>
              <img src={CodeSvg} alt={'codeLogo'} className={'logo'} style={{width: '1.2rem'}}/>
              Skills.
            </div>
            <Ul>
              <li><ReactLogo src={ReactSvg} alt={'react-logo'} className={'li-logo'}/>React.js</li>
              <li><img src={GoLangSvg} alt={'go-logo'} className={'li-logo'} style={{marginRight: '1px'}}/> Golang</li>
              <li><img src={PythonSvg} alt={'python-logo'} className={'li-logo'} style={{marginRight: '1px'}}/> Python
              </li>
              <li style={{marginTop: '0.1rem'}}><img src={JavaSvg} alt={'java-logo'} className={'li-logo'} style={{
                width: '1.5rem',
                marginLeft: '-2px',
                marginBottom: '-5px',
                marginRight: '2px'
              }}/>Java
              </li>
            </Ul>

            <div className={'subheading'}>
              <img src={Certificate} alt={'codeLogo'} className={'logo'} style={{marginBottom: '-6px'}}/>
              Certificates.
            </div>
            <Ul>
              <li>컴퓨터 활용능력 2급</li>
              <li>정보처리기능사</li>
              <li>리눅스 마스터 2급</li>
              <li>네트워크 관리사 2급</li>
            </Ul>

            <div className={'subheading'}>
              <img src={Award} alt={'codeLogo'} className={'logo'} style={{marginBottom: '-5px'}}/>
              Awards.
            </div>
            <Ul>
              <li>경북 지방기능경기대회 사이버보안분야 장려상 수상</li>
              <li>교내 알고리즘 대회 동상 수상</li>
            </Ul>

          </SkillsContainer>

        </TextContainer>

      </AboutMeContainer>
    </div>
  )
}

const AboutMeContainer = styled.div`
  margin-top: 10rem;
  margin-left: auto;
  margin-right: auto;
  height: 80vh;
  width: 70%;
  display: table;
  min-width: 900px;
`

const Title = styled.div`
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid #aca7cb;
  font-size: 2rem;
  color: #aca7cb;
`

const ImageContainer = styled.div`
  margin-top: 5vh;
  width: 40%;
  height: 75vh;
  line-height: 75vh;
  float: left;
  border-right: 1px solid #3b3b3b;
  text-align: center;
  //background-color: #f00;

  & img {
    justify-content: center;
    vertical-align: middle;
    width: 70%;
    border-radius: 10px;
  }
`

const TextContainer = styled.div`
  margin-top: 5vh;
  float: right;
  width: 59%;
  height: 75vh;
  //background-color: #fff;
`

const Introduce = styled.div`
  text-align: center;
  font-size: 1.3rem;
  color: #aca7cb;
`

const SkillsContainer = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
`

const Ul = styled.div`
  margin-top: 0.5rem;
  list-style: none;

  & li {
    margin-top: 0.3rem;
  }
`

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const ReactLogo = styled.img`
  animation-name: ${rotate};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

export default AboutMe