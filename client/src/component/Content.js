import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Youtube from "./Youtube";

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
margin-top: 2em;
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

const Content = (props) => {
    const [mainPhoto, setMainPhoto] = useState(0);
    const { youtube, selectPhoto, selectVideo, selectInsta, setSelectPhoto, setSelectVideo, setSelectInsta } = props;
    const photo = ['/photo2.jpeg', '/photo1.jpeg'];
  
    const modalCloseEvent = () => {
        setSelectPhoto(false);
      };
    
      const moveLeft = () => {
        if(mainPhoto - 1 >= 0) {
          setMainPhoto(mainPhoto - 1)
        }
        else {setMainPhoto(photo.length - 1)}
      }
      const moveRight = () => {
        if(mainPhoto + 1< photo.length) {
          setMainPhoto(mainPhoto + 1)
        }
        else {setMainPhoto(0)}
      }

    return (
        <>
        {selectPhoto ? (
            <ModalContainer>
              <CloseBtn className='close' onClick={modalCloseEvent}>x</CloseBtn>
              <Carousel>
              <CarouselBtn onClick={moveLeft} className="button_left">{'‹'}</CarouselBtn>
              <Img src={`${process.env.PUBLIC_URL}${photo[mainPhoto]}`} alt="사진"></Img>
              <CarouselBtn onClick={moveRight} className="button_right">{'›'}</CarouselBtn>
              </Carousel>
            </ModalContainer>
          ) : null}
          {selectVideo ? (
            // <iframe
            // className="video"
            //   width="560"
            //   height="315"
            //   src="https://www.youtube.com/embed/js1CtxSY38I"
            //   title="YouTube video player"
            //   frameBorder="0"
            //   allow="; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //   allowFullScreen
            // ></iframe>
            // <Youtube youtube={youtube} />
            null
          ) : null}
        </>
    )
}

export default Content;