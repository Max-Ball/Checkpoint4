import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { sandboxApi } from "./AxiosService.js"


class QuotesService{

  async getQuotes(){
    let res = await sandboxApi.get('/quotes')
    ProxyState.quotes = new Quote(res.data)
  }


}

export const quotesService = new QuotesService()