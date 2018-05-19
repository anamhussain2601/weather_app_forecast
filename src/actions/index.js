import axios from 'axios';


const  API_KEY ='8f3426a3280201154278fa36c4343043';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER  = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;    //this is according to the website   
    const request = axios.get(url);  //axios is a library solely made for making ajax request 
                                     // request here will return 'PROMISE'.
    

    console.log('Request:',request);
                                
    return{
        type: FETCH_WEATHER,
        payload: request    //promise
    };
}