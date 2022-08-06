import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";


function _draw(){
  document.getElementById('weather').innerHTML = ProxyState.weather.weatherTemplate
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