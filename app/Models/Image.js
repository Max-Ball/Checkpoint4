

export class Image{
  constructor(data){
    this.largeImgUrl = data.largeImgUrl
    this.tags = data.tags
  }

  get imgTemplate(){
    console.log('getting here?');
    return `
    <img class="img-2" src="${this.largeImgUrl}" alt="" srcset="">
    `
  }
}