import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";








export class WeathersController{
  constructor(){
    ProxyState.on('weather', this.draw)
    this.getWeather()
  }

  getKelvin(){
    document.getElementById('weather').innerHTML = `
      <img src="http://openweathermap.org/img/w/${ProxyState.weather.icon}.png" alt="">
      <h3 class="selectable no-select" onclick="app.weathersController.draw()"> ${ProxyState.weather.temp}° K </h3>
      <h4>${ProxyState.weather.name}</h4>
      <h5>${ProxyState.weather.description}
      `
  }
  changeTemp(){
    console.log('getting here?');
    let weather = ProxyState.weather.temp
    let c = Math.floor(weather - 273)
    let f = Math.floor(c * (9/5) + 32)
  
      console.log('how about here?');
      document.getElementById('weather').innerHTML = `
        <img src="http://openweathermap.org/img/w/${ProxyState.weather.icon}.png" alt="">
        <h3 class="selectable no-select" onclick="app.weathersController.getKelvin()"> ${c}° C</h3>
        <h4 >${ProxyState.weather.name}</h4>
        <h5>${ProxyState.weather.description}
      `
    }
  

  draw(){
    let weather = ProxyState.weather.temp
      let c = Math.floor(weather - 273)
      let f = Math.floor(c * (9/5) + 32)
      
        document.getElementById('weather').innerHTML = `
          <img src="http://openweathermap.org/img/w/${ProxyState.weather.icon}.png" alt="">
          <h3 class="selectable no-select" onclick="app.weathersController.changeTemp()"> ${f}° F</h3>
          <h4>${ProxyState.weather.name}</h4>
          <h5>${ProxyState.weather.description}
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