import styled from "styled-components";
import "../style.css";
import { useState } from "react";
import Content from "./Content";
import { useNavigate } from "react-router-dom";

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

const Nav = ({youtube}) => {
  // const navigate = useNavigate();
  const [selectPhoto, setSelectPhoto] = useState(false);
  const [selectVideo, setSelectVideo] = useState(false);
  const [selectInsta, setSelectInsta] = useState(false);

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
      <Content {...{youtube, selectPhoto, selectVideo, selectInsta, setSelectPhoto, setSelectVideo, setSelectInsta}}  />
    </>
  );
};

export default Nav;
