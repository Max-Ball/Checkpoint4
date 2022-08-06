import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";

function _draw(){
  document.getElementById('quote').innerHTML = ProxyState.quotes.quoteTemplate
}

export class QuotesController{
  constructor(){
    ProxyState.on('quotes', _draw)
    this.getQuotes()
  }

  async getQuotes(){
    try {
      await quotesService.getQuotes()
    } catch (error) {
      console.error('[getting quotes]', error);
      Pop.error(error)
    }
  }
}