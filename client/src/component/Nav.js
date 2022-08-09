import styled from "styled-components";
import "../style.css";
import { useState } from "react";
import Photo from "./Photo";
import Youtube from "./Youtube";

const Wrapper = styled.div`
  position: relative;
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

const Nav = ({setPlay}) => {
  const [selectPhoto, setSelectPhoto] = useState(false);
  const [selectVideo, setSelectVideo] = useState(false);
  const [selectInsta, setSelectInsta] = useState(false);

  const handleClick = (e) => {
    if (e.target.value === "photo" && !selectPhoto) {
      setSelectPhoto(true);
      setSelectVideo(false);
      setSelectInsta(false);
      setPlay('')
    }
    if (e.target.value === "video" && !selectVideo) {
      setSelectVideo(true);
      setSelectPhoto(false);
      setSelectInsta(false);
      setPlay('waiting')
    }
    if (e.target.value === "instagram" && !selectInsta) {
      setSelectInsta(true);
      setSelectPhoto(false);
      setSelectVideo(false);
      setPlay('')
    }
  };

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
      <Photo {...{selectPhoto, setSelectPhoto}}  />
      <Youtube {...{selectVideo}} />
    </>
  );
};

export default Nav;
