

export class Quote{
  constructor(data){
    this.content = data.content
    this.author = data.author
  }

  get quoteTemplate(){
    return `
    <div class="no-select">
      <h5>
        ${this.content}
      </h5>
      <h6 class="on-hover text-end my-3">
        ${this.author}
      </h6>
    </div>
    `
  }
}