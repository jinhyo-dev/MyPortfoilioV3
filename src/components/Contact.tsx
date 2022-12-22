import React, { useEffect, useState } from "react"
import styled from "styled-components";
import { BsInstagram, BsGithub } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import instagram from '../../public/svg/instagram.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  const [isMouseHover, setIsMouseHover] = useState<boolean>(false)

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  const toastAlert = (success: boolean, discordNick: string) => {
    if (success) {
      alert(`${discordNick} has been copied!`)
    } else {
      alert('복사하기가 지원되지 않는 브라우저입니다.')
    }
  }

  const handleCopy = (discordNick: string) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(discordNick)
        .then(() => {
          toastAlert(true, discordNick)
        })
        .catch(() => {
          alert("복사를 다시 시도해주세요.");
        });
    } else {
      if (!document.queryCommandSupported("copy")) {
        toastAlert(false, discordNick)
        return alert("복사하기가 지원되지 않는 브라우저입니다.");
      }
    }
  }


  return (
    <div className={'container'} style={{height: '30vh'}}>
      <LogoContainer data-aos="fade-down">

        <Navigate href={'https://github.com/jinhyo-dev'} target={'_blank'}>
          <BsGithub className={'github-icon'}/>
        </Navigate>

        {
          isMouseHover ?
            (
              <Navigate href={'https://www.instagram.com/jinhyo___/'} target={'_blank'}>
                <img src={instagram} alt={'instagram'} className={'instagram-icon'}
                     onMouseLeave={() => setIsMouseHover(false)}/>
              </Navigate>
            )
            : (<BsInstagram className={'instagram-icon'} onMouseOver={() => setIsMouseHover(true)}/>)
        }

        <FaDiscord className={'discord-icon'} onClick={() => handleCopy('Jinhyo#4116')}/>

        <Navigate href={'mailto: admin@jinhyo.dev'}>
          <IoMdMail className={'mail-icon'}/>
        </Navigate>

      </LogoContainer>
    </div>
  )
}

const LogoContainer = styled.div`
  margin-top: 20vh;
  width: 21.8rem;
  margin-left: auto;
  margin-right: auto;
`

const Navigate = styled.a`
  color: #000;
  text-decoration: none;
`

export default Contact