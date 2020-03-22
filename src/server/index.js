const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const AYLIENTextAPI = require('aylien_textapi');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const result = {};

app.use(express.static('dist'))
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

const textapi = new AYLIENTextAPI({
  application_id: process.env.API_Aylien_ID,
  application_key: process.env.API_Aylien_KEY
});

app.post("/api", (req, res) => {

  textapi.sentiment({
    'url': req.body.text 
  },
  (error, resp) => {
    if (error === null) {
      result.one = resp.polarity_confidence;
      result.two = resp.polarity;
      console.log(resp.polarity_confidence);
      res.send(result);
    } else {
      res.send({msg: "Error"});
    }
  });
});

const getData = async (url) => {
  let result = await fetch(url);
  let data = await result.json(); 
  return data;
}

console.log(getData("https://pixabay.com/api/?key=15531999-aed38dc5f031183eadf4855e8&q=yellow+flowers&image_type=photo"));
