import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { sandboxApi } from "./AxiosService.js"


class TasksService{

  async createTask(newTask){
    let res = await sandboxApi.post('/max/todos', newTask)
    let task = new Task(res.data)
    ProxyState.tasks = [...ProxyState.tasks, task]
    console.log(ProxyState.tasks);

  }

  async getTasks(){
    let res = await sandboxApi.get('/max/todos')
    ProxyState.tasks = res.data.map(t => new Task(t))
  }

  async deleteTask(taskId){
    console.log('service', ProxyState.tasks);
    await sandboxApi.delete(`max/todos/${taskId}`)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
    console.log('deleting task', ProxyState.tasks);
  }

  async toggleTask(taskId){
    let task = ProxyState.tasks.find(t => t.id == taskId)
    if(!task){
      throw new Error('No Task ID')
    }
    task.completed = !task.completed
  
    let res = await sandboxApi.put(`/max/todos/${taskId}`, task)

    let updatedTask = new Task(res.data)
    let taskIndex = ProxyState.tasks.indexOf(task)
    ProxyState.tasks.splice(taskIndex, 1, updatedTask)

    ProxyState.tasks = ProxyState.tasks
    console.log(ProxyState.tasks);

  }
}

export const tasksService = new TasksService()