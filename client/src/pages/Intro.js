import { useEffect, useState } from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const [waitingOver, setWaitingOver] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setWaitingOver("waiting");
      navigate('/main');
    }, 5000);
  }, []);

  return (
    <div className={`${waitingOver} intro`}>
      <div className="words">Wanna New Jeans?</div>
    </div>
  );
};

export default Intro;
