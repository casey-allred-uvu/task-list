var Model = {
  tasks: [],
  init: function() {
    //init task list state here
  },
  createTask: function(description) {
    var id = Model.tasks.length;
    var task = new Model.Task(id, description);
    tasks[id] = task;
  },
  deleteTask: function(id) {
    delete Model.tasks[id];
  },
  toggleTaskDone: function(id) {
    Model.tasks[id].toggleDone();
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
Model.Task.prototype.toggleDone = function() {
  this.isDone = !this.isDone;
};


window.onload = function() {
  //init to specific state

  //draw it
};
