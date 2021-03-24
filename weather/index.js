'use strict';
const axios = require("axios");
const apikey = 'API_KEY';

const bc = "\x1b[32m"; // bot color
const uc = "\x1b[33m"; // user color
const ec = "\x1b[0m";  // exit color

const get = async (url) => {
    try{
        return await axios.get(url);
    } catch(error){
        if (error.response) {
            console.log(bc,'Error '+error.response.status+': '+error.response.data.Message,uc);
        }
        else {
            console.log(bc,'Error unknown',uc);
        }
    }
}

const getWeather = async (location) => {
    const get0 = await get('http://dataservice.accuweather.com/locations/v1/cities/search?apikey='+apikey+'&q='+location+'&language=en-us');
    try{
        const citykey = get0.data[0].Key;
        const cityname = get0.data[0].LocalizedName;
        const get1 = await get('http://dataservice.accuweather.com/currentconditions/v1/'+citykey+'?apikey='+apikey+'&language=en-us');
        const data = get1.data[0];
        return 'It is ' + data.WeatherText.toLowerCase() + ' in ' + cityname + ' (' + data.Temperature.Metric.Value + '°' + data.Temperature.Metric.Unit + ')';
    }
    catch(error){}; 
}

module.exports = getWeather;
