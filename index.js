const yarg = require('yargs');
// const weather =require('weather-js');
const weather = require('./weather')

var loc = yarg.argv.zip;

// weather.find({search: loc, degreeType: 'C'}, function(err, result) {
//   if(err) console.log(err);

//     console.log(result[0].current.temperature);
//   });

var url= 'http://api.openweathermap.org/data/2.5/weather?zip='+loc+',in&appid=296047c53d7aaa77e53126aef814bc96'
var stat = weather(url)
  .then((response) => {
    console.log('Temp in F ', response.data.main.temp);
  })
  .catch((error) => {
    console.log('error ::::::: ', error);
  })