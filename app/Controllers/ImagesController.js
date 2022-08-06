import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";

// function _draw(){
//   document.getElementById('img-body').innerHTML = ProxyState.image.imgTemplate
// }

function _drawClock(){
  let time = new Date().toLocaleTimeString('en-US')
  document.getElementById('clock').innerText = time
}

export class ImagesController{
  constructor(){
    // ProxyState.on('image', _draw)
    this.getImages()
    setInterval(_drawClock, 1000)
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