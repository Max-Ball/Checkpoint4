import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js";

function _draw(){
  let template = ''
  ProxyState.tasks.forEach(t => template += t.Template)
  document.getElementById('tasks').innerHTML = template
  document.getElementById('task-header').innerHTML = `
    <h4 class="text-center text-light text-shadow">
      To Do List ${ProxyState.tasks.filter(t => t.completed).length}/${ProxyState.tasks.length}
    </h4>
    
  `
}


export class TasksController{
  constructor(){
    ProxyState.on('tasks', _draw)
    this.getTasks()
  }

  async createTask(){
    try {
      window.event.preventDefault()
      let form = window.event.target

      let newTask = {
        description: form.description.value
      }
      await tasksService.createTask(newTask)
      form.reset()
    } catch (error) {
      console.error('[create task]', error)
      Pop.error(error)
    }
  }

  async getTasks(){
    try {
      await tasksService.getTasks()
    } catch (error) {
      console.error('[getting task]', error)
      Pop.error(error)
    }
  }

  async deleteTask(taskId){
    try {
      if(await Pop.confirm()){
        tasksService.deleteTask(taskId)
      }
    } catch (error) {
      console.error('[delete task]', error)
      Pop.error(error)
    }
  }

  async toggleTask(taskId){
    try {
      await tasksService.toggleTask(taskId)
    } catch (error) {
      console.error('[toggling check]', error)
      Pop.error(error)      
    }
  }
  
  signIn(){

    // Working on localStorage - move names to ProxyState
    let names = [] 

    window.event.preventDefault()
    let form = window.event.target
    let newName = form.name.value
    form.reset()

    document.getElementById('sign-in').innerText = newName
  }

}