import React, { useEffect } from 'react'
import styled from "styled-components";
import AOS from 'aos'
import 'aos/dist/aos.css'
import BusTimeTable from '../../public/gif/BusTimeTable.gif'
import BlackBoard from '../../public/gif/blackboard.gif'
import ErrorPage from '../../public/image/404.png'
import GBSWBookManager from '../../public/gif/GBSWBookManager.gif'
import GreenMileage from '../../public/gif/GreenMileage.gif'

const Projects = () => {
  useEffect(() => {
    AOS.init({duration: 3000})
  }, [])

  const navigate = (url: string) => {
    window.open(`https://github.com/${url}`, '_blank')
  }

  return (
    <div className={'container'}>
      <ProjectContainer>
        <Title>
          Projects.
        </Title>

        <BoxContainer data-aos={'fade-up'}>
          <ProjectBox onClick={() => navigate('jinhyo-dev/gbsw-bustimetable')}>
            <ImgContainer>
              <img src={BusTimeTable} alt={'bus-png'} style={{width: '55%'}}/>
            </ImgContainer>

            <TextContainer>
              <TagButton style={{marginLeft: '0.7rem'}}>react</TagButton>
              <TagButton>go</TagButton>
              <TagButton>typescript</TagButton>

              <ProjectName>GBSW Bus Timetable</ProjectName>
              <ProjectInfo>학교 교통에 불편한점이 많아서 개발하게 된 의성 시.내외 버스 시간을 빠르게 확인 할 수 있는 페이지 입니다.</ProjectInfo>
            </TextContainer>
          </ProjectBox>

          <ProjectBox onClick={() => navigate('team-raise')}>
            <ImgContainer>
              <img
                src={'https://user-images.githubusercontent.com/86733620/176645512-c7d86f75-0834-4f2d-b3f7-a55ce9460057.gif'}
                alt={'smartfarm-gif'}/>
            </ImgContainer>
            <TextContainer>
              <TagButton style={{marginLeft: '0.7rem'}}>nextjs</TagButton>
              <TagButton>csharp</TagButton>
              <TagButton>arduino</TagButton>

              <ProjectName>Smart Farm</ProjectName>
              <ProjectInfo>농작물 혹은 식물 재배를 자동화한 '스마트 팜'이며 웹 사이트에서 작물의 현재 현황을 확인 할 수 있습니다.</ProjectInfo>
            </TextContainer>
          </ProjectBox>

          <ProjectBox style={{marginRight: '0'}} onClick={() => navigate('jinhyo-dev/Electronic-Blackboard-Web')}>
            <ImgContainer>
              <img src={BlackBoard} alt={'black board'}/>
            </ImgContainer>

            <TextContainer>
              <TagButton style={{marginLeft: '0.7rem'}}>nextjs</TagButton>
              <TagButton>javascript</TagButton>

              <ProjectName>GBSW E-Blackboard</ProjectName>
              <ProjectInfo>학교 공지사을 공유하는 공지사항 게시판과 오늘의 급식 메뉴를 전자칠판을 통해 알 수 있습니다.</ProjectInfo>
            </TextContainer>
          </ProjectBox>
        </BoxContainer>

        <BoxContainer data-aos={'fade-up'}>

          <ProjectBox onClick={() => navigate('gbsw-book-manager')}>
            <ImgContainer>
              <img src={GBSWBookManager} alt={'gbsw book manager'}/>
            </ImgContainer>

            <TextContainer>
              <TagButton style={{marginLeft: '0.7rem'}}>react</TagButton>
              <TagButton>typescript</TagButton>
              <TagButton>spring boot</TagButton>

              <ProjectName>GBSW Book Manager</ProjectName>
              <ProjectInfo>학교 전공 도서를 대출.반납 할 수 있는<br/> 도서 관리 프로그램입니다.</ProjectInfo>
            </TextContainer>
          </ProjectBox>

          <ProjectBox onClick={() => navigate('team-firewall')}>
            <ImgContainer>
              <img src={GreenMileage} alt={'green mileage'}/>
            </ImgContainer>

            <TextContainer>
              <TagButton style={{marginLeft: '0.7rem'}}>react</TagButton>
              <TagButton>typescript</TagButton>
              <TagButton>nestjs</TagButton>
              <TagButton>rust</TagButton>

              <ProjectName>Green Mileage</ProjectName>
              <ProjectInfo>경북소프트웨어고등학교 상벌점 관리 시스템입니다.</ProjectInfo>
            </TextContainer>
          </ProjectBox>

          <ProjectBox style={{marginRight: '0'}}>
            <ImgContainer>
              <img src={ErrorPage} alt={'404'}/>
            </ImgContainer>

            <TextContainer>
              <ProjectName>Building...</ProjectName>
            </TextContainer>
          </ProjectBox>

        </BoxContainer>

      </ProjectContainer>
    </div>
  )
}

const ProjectContainer = styled.div`
  margin-top: 10rem;
  margin-left: auto;
  margin-right: auto;
  height: 80vh;
  width: 70%;
  display: table;
`

const Title = styled.div`
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid #d3fbd8;
  font-size: 2rem;
  color: #d3fbd8;
`

const BoxContainer = styled.div`
  min-width: 1100px;
  margin-top: 1rem;
  width: 100%;
  height: 38vh;
  display: flex;
  justify-content: center;
`

const ProjectBox = styled.div`
  width: 33%;
  margin-right: 1%;
  background-color: #faf7ff;
  border-radius: 10px;
  transition: all 0.2s;
  
  &:hover {
    width: 36%;
    cursor: pointer;
  }
`

const ImgContainer = styled.div`
  background-color: #fff;
  height: 24vh;
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  & img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`

const TextContainer = styled.div`
  background: none;
  width: 100%;
  height: 14vh;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

const TagButton = styled.button`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  border-radius: 2rem;
  height: 1.5rem;
  background-color: #ddf4ff;
  color: #0969da;
  border: none;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
`

const ProjectName = styled.div`
  margin-top: 1vh;
  text-align: center;
  background: none;
  font-size: 1.2rem;
`

const ProjectInfo = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  margin-top: 0.5vh;
  text-align: center;
  background: none;
  font-size: 0.8rem;
`

export default Projects