import axios from "axios";
import { useEffect, useState } from "react";
import "./youtubeStyle.css";

//매 렌더링마다 API 데이터 받아오는 대신 더미데이터 사용중
const { youtubeData } = require('./dummyData')

const URL = `https://www.googleapis.com/youtube/v3/search?`;
const CHANNEL_ID = "UCMki_UkHb4qSc0qyEcOHHJw";
const PLAYLIST_ID = `PLNy-PdPlJT7EW4KwMfEOk_58Niq7gm-_0`;
const opt = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "http://localhost:3000",
};

const Youtube = (props) => {
  const { selectVideo } = props;
  // const [youtubeData, setYoutubeData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `${URL}part=snippet&channelId=${CHANNEL_ID}&order=date&type=video&key=${process.env.REACT_APP_KEY}`,
  //       null,
  //       { headers: opt }
  //     )
  //     .then((res) => setYoutubeData(res.data.items))
  //     .catch((err) => {
  //       Error, err;
  //     });
  // }, []);

  return (
    <>
      {selectVideo ? (
        <section className="video--container">
          {youtubeData.map((video) => {
            return (
              <div className="video--wrapper" key={video.id.videoId}>
                <iframe
                className="video--frame"
                  frameBorder={0}
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                ></iframe>
                <div className="video--title">{video.snippet.title}</div>
              </div>
            );
          })}
        </section>
      ) : null}
    </>
  );
};

export default Youtube;