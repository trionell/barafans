var express = require('express');
var router = express.Router();

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

/* GET home page. */
router.get('/', function(req, res, next) {

 fetch("https://tenor.googleapis.com/v2/search?key=" + process.env.TENOR_API_KEY + "=fan&media_filter=gif&random=true&limit=1", requestOptions)
  .then(response => response.json())
  .then(result => res.render('index', { title: 'Bara Fans', fanGifUrl: result.results[0]["media_formats"]["gif"]["url"] }))
  .catch(error => {
    console.log('error', error);
    res.render('error', { message: 'Bara Fans', error: { status: 'Fläktarna har slutat snurra', stack: ''}});
  });
});

module.exports = router;
