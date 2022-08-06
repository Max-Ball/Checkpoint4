

export class Image{
  constructor(data){
    this.largeImgUrl = data.largeImgUrl
    this.tags = data.tags
  }

  get imgTemplate(){
    console.log('getting here?');
    return `
    <img src="${this.largeImgUrl}" alt="" srcset="">
    `
  }
}