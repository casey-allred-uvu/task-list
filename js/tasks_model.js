var Model = {
  tasks: [],
  init: function() {
    //init task list state here
    Model.createTask("newtask");
    var task = Model.createTask("newtask2");
    task.toggleDone();
    Model.createTask("newTask3");
  },
  getTasks: function() {
    // task will only be true if it isn't null
    return Model.tasks.filter(function(task){ return task; });
  },
  createTask: function(description) {
    var id = Model.tasks.length;
    var task = new Model.Task(id, description);
    Model.tasks.push(task);
    return task;
  },
  deleteTask: function(id) {
    if(Model.tasks[id]) {
      delete Model.tasks[id];
    }
  },
  toggleTaskDone: function(id) {
    if(Model.tasks[id]) {
      Model.tasks[id].toggleDone();
    }
  },
  //TODO: add due date
  Task: function(id,description) {
    this.id = id;
    this.description = description;
    this.isDone = false;
  }
};

Model.Task.prototype.getId = function() {
  return this.id;
};
Model.Task.prototype.getDescription = function() {
  return this.description;
};
Model.Task.prototype.isChecked = function() {
  return this.isDone;
};
Model.Task.prototype.toggleDone = function() {
  this.isDone = !this.isDone;
};
