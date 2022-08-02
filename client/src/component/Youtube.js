import React from "react";
import axios from 'axios';

const Youtube = ({youtube}) => {
    async function search() {
        const res = await youtube.get('search', {
            params: {
                part: 'snippet'
            }
        })
    }
}

export default Youtube;


//todo: react-player로 인트로 영상 보기
//todo: videos 탭 누르면 youtube video  받아오기