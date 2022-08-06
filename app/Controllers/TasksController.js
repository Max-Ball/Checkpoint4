import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js";

function _draw(){
  let template = ''
  ProxyState.tasks.forEach(t => template += t.Template)
  document.getElementById('tasks').innerHTML = template
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


}