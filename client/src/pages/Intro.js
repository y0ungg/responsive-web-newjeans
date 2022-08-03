import { useEffect, useState } from "react";
import styled from "styled-components";
import "../style.css";
import { useNavigate } from "react-router-dom";

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  animation: fadein 7s;

  @keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0.6;
    }
    50% {
      opacity: 0.8;
    }
    to {
      opacity: 1;
    }
  }
`;


const Intro = () => {
  const [waitingOver, setWaitingOver] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setWaitingOver("waiting");
      navigate('/');
    }, 5000);
  }, []);

  return (
    <div className={`${waitingOver} intro`}>
      <div className="words">Wanna New Jeans?</div>
    </div>
  );
};

export default Intro;
