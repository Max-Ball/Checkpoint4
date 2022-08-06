import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { WeathersController } from "./Controllers/WeathersController.js";


class App {
  imagesController = new ImagesController();
  quotesController = new QuotesController();
  weathersController = new WeathersController();
  tasksController = new TasksController();
}

window["app"] = new App();
