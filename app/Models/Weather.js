

export class Weather{
  constructor(data){
    this.temp = data.main.temp
    this.name = data.name
  }

  get weatherTemplate(){
    return `
      <h4>${this.temp}</h4>
      <h6>${this.name}</h6>
    `
  }
}