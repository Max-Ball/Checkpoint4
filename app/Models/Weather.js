

export class Weather{
  constructor(data){
    this.temp = data.main.temp
    this.name = data.name
  }

}