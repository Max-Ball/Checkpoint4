

export class Weather{
  constructor(data){
    this.temp = data.main.temp
    this.name = data.name
    this.description = data.weather[0].description
    this.icon = data.weather[0].icon
  }

}