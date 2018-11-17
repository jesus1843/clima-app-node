const axios = require('axios');

const getClima = async (lat,lng) => {
  const api_key = '89886e7fe6425783c55d3b1d3c155991';
  
  let resp = await axios(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${ lat }&lon=${ lng }&appid=${ api_key }`);

  return resp.data.main.temp;
}

module.exports = {
  getClima
}