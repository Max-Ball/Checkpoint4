import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";


function _draw(){
  let weather = ProxyState.weather.temp
    let c = weather - 273
    let f = c * (9/5) + 32
    let fahrenheit = Math.floor(f)
  document.getElementById('weather').innerHTML = `
      <h4>${fahrenheit}</h4>
      <h6>${ProxyState.weather.name}</h6>
    
  `
}
export class WeathersController{
  constructor(){
    ProxyState.on('weather', _draw)
    this.getWeather()
  }

  async getWeather(){
    try {
      await weathersService.getWeather()
    } catch (error) {
      console.error('[getting weather]', error);
      Pop.error(error)
    }
  }
}