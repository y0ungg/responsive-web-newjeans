# responsive-web-newjeans

create-react-app으로 만들고 있다가 코드만 뜯어서 `npm init`부터 리팩토링 시작    

## Youtube 컴포넌트 css 적용 중

Nav - youtube 선택시 배경 영상 멈추거나 없애는 것으로 변경중

## Youtube 동영상 가져오기
Youtube 컴포넌트: Youtube API key를 이용한 동영상 가져오기 완료 && 받아온 데이터로 더미데이터를 만들어서 사용하고 있다.  

Footer 컴포넌트: 원하는 css를 구현하기 위해 삭제    
  
  TODO: 비디오 목록 css 수정하기, Instagram 피드 받아오기 또는 로그인 구현하기  


## .env 환경변수 설정하기
`$ npm install -D --save dotenv`
```jsx
//webpack.config.js
const dotenv = require('dotenv');
dotenv.config();

...

plugins: [      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),]
```

## express server 만들기
원래 반응형 웹 css 다루는 법 연습하려고 시작한 건데  
배경 영상을 예쁜 걸 찾았고, 뉴진스 아이들이 너무 예뻐서 팬심으로 뭘 만들어야겠다는 욕심이 나기 시작...    
마침 iframe으로 유튜브 영상 가져오는 게 crossOrigin 적용이 되지 않고 있어서    
server도 만들기로 결정...
직접 instagram oEmbed도 가져오고, 유튜브도 GET 요청으로 받아오려고 한다.

`$ npm install express`  

`$ npm install cors`  

`$ npm install nodemon`  

`$ npm install morgan` // HTTP 요청 logger

`$ npm install dotenv` //환경변수 설정을 위한 모듈 설치

`$ npm install axios` //client에도 설치  

- 유튜브 API 발급 완료
환경변수로 설정해서 사용  

- `/intro` 에서 youtube API 요청 성공적으로 받아오는 것 실험 완료! 내일 동영상 화면에 출력하는 거 구현 예정
