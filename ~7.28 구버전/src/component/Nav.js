import styled from "styled-components";
import "./Render.css";
import { useMemo, useState } from "react";

const Wrapper = styled.div`
  z-index: 1;
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EnterBtn = styled.button`
  width: 10rem;
  color: white;
  background: none;
  border: 1px white solid;
  padding: 1em;
  margin: 3px;
  border-radius: 15px;
  font-size: 0.5em;
  transition: all 0.3s;
  font-family: "Press Start 2P", cursive;
  text-shadow: 1px 1px 2px gray;

  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 10rem 0 0 0 rgba(235, 243, 245, 0.45) inset;
  }
`;
const Content = styled.div`
  margin-top: 5em;
`;

const ModalContainer = styled.div`
position: fixed;
  width: 100%; 
  height: 100%; 
  overflow: auto;
  background-color: rgba(0,0,0,0.5);
  z-index: 3;
  top: 0;
`;

const Img = styled.img`
max-width: 80%;
max-height: 100%;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  font-size: 1.5em;
  padding: 0 0.1em;
  font-weight: bold;
  transition: 0.3s;
  background-color: gray;
`;

const Carousel = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const CarouselBtn = styled.button`
  cursor: pointer;
  padding: 0.1em 0.5em;
  z-index: 1;
  background-color: rgba(0, 166, 255, 0.5);
  color: rgba(0, 0, 0, 0.65);
  border: none;
  border-radius: 3px;
  box-shadow: 1px 2px 10px 0.5px rgba(0, 86, 133, 0.7) inset;
  font-size: 2em;
  
  &:active {
    background-color: rgba(0, 166, 255, 0.7);
    box-shadow: 1px 1px 10px 1px rgba(255, 254, 250, 0.5) inset;
  }
`

const Nav = () => {
  const [selectPhoto, setSelectPhoto] = useState(false);
  const [selectVideo, setSelectVideo] = useState(false);
  const [selectInsta, setSelectInsta] = useState(false);
  const [mainPhoto, setMainPhoto] = useState(0);

  const photo = ['/intro.jpeg', '/photo.jpeg']

  const handleClick = (e) => {
    if (e.target.value === "photo" && !selectPhoto) {
      setSelectPhoto(true);
      setSelectVideo(false);
      setSelectInsta(false);
    }
    if (e.target.value === "video" && !selectVideo) {
      setSelectVideo(true);
      setSelectPhoto(false);
      setSelectInsta(false);
    }
    if (e.target.value === "Insta" && !selectInsta) {
      setSelectInsta(true);
      setSelectPhoto(false);
      setSelectVideo(false);
    }
  };

  const modalCloseEvent = () => {
    setSelectPhoto(false);
    setSelectVideo(false);
    setSelectInsta(false);
  };

  const moveCarousel = (e) => {
    if(e.target.value === 'left' && mainPhoto - 1 >= 0) {
      setMainPhoto(mainPhoto - 1)
    }
    if(e.target.value === 'right' && mainPhoto + 1< photo.length) {
      setMainPhoto(mainPhoto + 1)
    }
    console.log(mainPhoto)
  }
  // const memo = useMemo(() => moveCarousel, [mainPhoto, photo] )

  return (
    <>
      <Wrapper className="wrapper">
        <EnterBtn className={`enter_btn`} onClick={handleClick} value="photo">
          photo
        </EnterBtn>
        <EnterBtn className={`enter_btn`} onClick={handleClick} value="video">
          video
        </EnterBtn>
        <EnterBtn
          className={`enter_btn`}
          onClick={handleClick}
          value="instagram"
        >
          instagram
        </EnterBtn>
      </Wrapper>
      <Content>
        {selectPhoto ? (
          <ModalContainer>
            <CloseBtn className='close' onClick={modalCloseEvent}>x</CloseBtn>
            <Carousel>
            <CarouselBtn onClick={moveCarousel} className="button_left" value='left'>{'‹'}</CarouselBtn>
            <Img src={`${process.env.PUBLIC_URL}${photo[mainPhoto]}`} alt="사진"></Img>
            <CarouselBtn onClick={moveCarousel} className="button_right" value='right'>{'›'}</CarouselBtn>
            </Carousel>
          </ModalContainer>
        ) : null}
        {selectVideo ? (
          <iframe
          className="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/js1CtxSY38I"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : null}
      </Content>
    </>
  );
};

export default Nav;
