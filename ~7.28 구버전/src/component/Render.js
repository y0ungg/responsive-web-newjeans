import { useEffect, useState } from "react";
import styled from "styled-components";
import './Render.css'
import Nav from "./Nav";

const MainArea = styled.div`
position: relative;
padding-bottom: 56.25%;
height: 0;
max-width: 100%;
`;

const Iframe = styled.iframe`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
pointer-events: none;
animation: fadein 7s;

  @keyframes fadein { /* Safari and Chrome */
    from {
        opacity:0.6;
    }
    50% {
      opacity: 0.8;
    }
    to {
        opacity:1;
    }
}
`

const TitleContainer = styled.div`
text-align: center;
position: relative;
color: black;
z-index: 1;
text-shadow: 1px 1px 3px gray;
`

const Greeting = styled.img`
color: white;
margin: 50px 0px 20px 0px;
transition: all 1s;
width: 40vw;
min-width: 20vw;
`

const Render = () => {
  const [isWaiting, setIsWaiting] = useState('waiting');
  const [waitingOver, setWaitingOver] = useState('');

useEffect(() => {
    setTimeout(() => {
      setWaitingOver('waiting')
      setIsWaiting('')
    }, 5000)
},[])

  return (
    <>
      <div className={`${waitingOver} intro`}>
        <div className="words">Wanna New Jeans?</div>
      </div>
      <MainArea className={isWaiting}>
          <TitleContainer>
            <Greeting className="greeting" src={`${process.env.PUBLIC_URL}/title.png`}/>
            <Nav />
          </TitleContainer>
          <Iframe src='http://www.youtube-nocookie.com/embed/bNucJgetMjE?playlist=bNucJgetMjE&loop=1&autoplay=1&mute=1&start=20&controls=0&modestbranding=1'
          frameBorder='0' allowFullScreen></Iframe>
      </MainArea>
    </>
  )
};

export default Render;
