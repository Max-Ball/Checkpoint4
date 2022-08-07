import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";

function _draw(){
  document.getElementById('img-body').innerHTML = ProxyState.image.imgTemplate
}

function _drawClock(){
  let time = new Date().toLocaleTimeString('en-US')
  document.getElementById('clock').innerText = time
}

function _timeOfDay(){
  console.log('showing?');
  let time = new Date()
  let hours = time.getHours()
  if(hours >= 6 && hours < 12){
    document.getElementById('time-of-day').innerText = `Good Morning,`
  } else if(hours >=12 || hours <= 4) {
    document.getElementById('time-of-day').innerText = `Good Afternoon,`
  } else {
    document.getElementById('time-of-day').innerText = `Good Evening,`
  }
}

export class ImagesController{
  constructor(){
    ProxyState.on('image', _draw)
    this.getImages()
    setInterval(_drawClock, 1000)
    _timeOfDay()
  }

  async getImages(){
    try {
      await imagesService.getImages()
    } catch (error) {
      console.error('[get image]', error)
      Pop.error(error)
    }
  }
}