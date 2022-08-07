import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";








export class WeathersController{
  constructor(){
    ProxyState.on('weather', this.draw)
    this.getWeather()
  }

  changeTemp(){
    console.log('getting here?');
    let weather = ProxyState.weather.temp
    let c = Math.floor(weather - 273)
    let f = Math.floor(c * (9/5) + 32)
  
      console.log('how about here?');
      document.getElementById('weather').innerHTML = `
      <h4 class="selectable no-select" onclick="app.weathersController.draw()">${c}° C</h4>
      <h6>${ProxyState.weather.name}</h6>
      `
    }
  

  draw(){
    let weather = ProxyState.weather.temp
      let c = Math.floor(weather - 273)
      let f = Math.floor(c * (9/5) + 32)
      
        document.getElementById('weather').innerHTML = `
          <h4 class="selectable no-select" onclick="app.weathersController.changeTemp()">${f}° F</h4>
          <h6>${ProxyState.weather.name}</h6>
        `
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