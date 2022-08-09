import styled from "styled-components";
import Nav from "../component/Nav";
import ReactPlayer from "react-player/lazy";
import "../style.css";
import { useState } from "react";

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

const Main = () => {
  const [play, setPlay] = useState('');

  return (
    <>
    <MainArea>
      <TitleContainer>
        <Greeting
          className="greeting"
          src={`${process.env.PUBLIC_URL}/title.png`}
        />
      </TitleContainer>
      <Nav setPlay={setPlay}/>
      <ReactPlayer
        className={`video ${play}`}
        url="https://www.youtube.com/watch?v=bNucJgetMjE"
        width="100%"
        height="100%"
        playing
        loop
        muted
        controls={false}
        config={{
          youtube: {
            playerVars: { controls: 0, start: 18, enablejsapi: 1 },
          },
        }}
      />
    </MainArea>
    </>
  );
};

export default Main;
