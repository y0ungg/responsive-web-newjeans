import styled from "styled-components";
import Nav from "../component/Nav";
import { useEffect,useState } from "react";

const MainArea = styled.div`
position: relative;
padding-bottom: 56.25%;
height: 0;
max-width: 100%;
`;

const TitleContainer = styled.div`
text-align: center;
position: relative;
color: black;
z-index: 1;
text-shadow: 1px 1px 3px gray;
`;

const Greeting = styled.img`
color: white;
margin: 50px 0px 20px 0px;
transition: all 1s;
width: 40vw;
min-width: 20vw;
`;


const Main = ({youtube}) => {

// console.log(process.env.REACT_APP_KEY)

    return (
        <MainArea>
        <TitleContainer>
          <Greeting
            className="greeting"
            src={`${process.env.PUBLIC_URL}/title.png`}
          />
          <Nav youtube={youtube}/>
        </TitleContainer>
        {/* <iframe src='https://www.youtube-nocookie.com/embed/bNucJgetMjE?enablejsapi=1&playlist=bNucJgetMjE&loop=1&autoplay=1&mute=1&start=20&controls=0&modestbranding=1&origin=http://localhost:3000'
          frameBorder='0' sandbox="allow-same-origin allow-scripts" allowFullScreen></iframe> */}
        {/* <Youtube
          videoId="bNucJgetMjE"
          iframeClassName="video"
          opts={{ playerVars: { autoplay: 1, mute: 1, controls: 0, loop: 1, start:18 } }} //mute 설정 필수
        ></Youtube> */}
      </MainArea>
    )
}

export default Main;