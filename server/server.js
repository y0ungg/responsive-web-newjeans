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

server.get('/intro', async(req, res) => {
  const result = await axios({
    method: 'get',
    url: `https://www.googleapis.com/youtube/v3/playlistItems?part=id&id=bNucJgetMjE&key=${process.env.KEY}`,
  }
  )
  .catch((err) => console.log(err))
  console.log(result)
  return res.send('hi')
})

server.listen(PORT, () => {
  console.log(`my app listening on port ${PORT}`);
})