const express = require('express');
const cors = require('cors');
const server = express();
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();
const PORT = 3001;

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS']
  };
server.use(cors(corsOptions));
server.use(express.json({strict: false}));

server.use(morgan('dev'));

server.get('/', (req, res) => {
  res.send('Health Check')
})

//영상 id를 검색해서 해당 1개만 출력되도록 설정
server.get('/intro', (req, res) => {
  let result;
 axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=bNucJgetMjE&maxResults=1&key=${process.env.KEY}`)
  .then(res =>  {
    // const {data} = res;
    // data.items.forEach(item => {
    //   console.log(item.snippet.title)
    //  })
    result = res.data.items[0].snippet.title
  })
  .then(res.send(result))
  .catch(err =>  console.log(err))
  // console.log(result)
})

server.listen(PORT, () => {
  console.log(`my app listening on port ${PORT}`);
})