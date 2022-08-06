

export class Task{
  constructor(data){
    this.id = data.id
    this.user = data.user
    this.completed = data.completed
    this.description = data.description

  }

  get Template(){
    return `
      <div>
        <input type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.tasksController.toggleTask('${this.id}')">
        <h6>${this.description}</h6>
        <button class="btn text-white selectable" onclick="app.tasksController.deleteTask('${this.id}')">
          <i class="mdi mdi-delete-forever"></i>
        </button>
      </div>
    `
  }
}