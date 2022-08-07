

export class Task{
  constructor(data){
    this.id = data.id
    this.user = data.user
    this.completed = data.completed
    this.description = data.description

  }

  get Template(){
    return `
    <div class="row border rounded bg-light m-2 align-items-center">
      <div class="col-md-2">
        <input type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.tasksController.toggleTask('${this.id}')">
      </div>
      <div class="col-md-8 text-center">
        <h5 class="m-0">
          ${this.description}
        </h5>
      </div>
      <div class="col-md-2">
        <div class="selectable no-select fs-3" onclick="app.tasksController.deleteTask('${this.id}')">
          <i class="mdi mdi-delete-forever p-0"></i>
        </div>
      </div>
    </div>
    `
  }
}