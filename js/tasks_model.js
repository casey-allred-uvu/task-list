var tasks = [];
var init_model = function() {
  //init task list state here
  createTask("newtask");
  var task = createTask("newtask2");
  task.toggleDone();
  createTask("newTask3");
};
var getTasks = function() {
  // task will only be true if it isn't null
  return tasks.filter(function(task){ return task; });
};
var createTask = function(description) {
  var id = tasks.length;
  var task = new Task(id, description);
  tasks.push(task);
  return task;
};
var deleteTask = function(id) {
  if(tasks[id]) {
    delete tasks[id];
  }
};
var toggleTaskDone = function(id) {
  if(tasks[id]) {
    tasks[id].toggleDone();
  }
};
//TODO: add due date
var Task = function(id,description) {
  this.id = id;
  this.description = description;
  this.isDone = false;
};

Task.prototype.getId = function() {
  return this.id;
};
Task.prototype.getDescription = function() {
  return this.description;
};
Task.prototype.isChecked = function() {
  return this.isDone;
};
Task.prototype.toggleDone = function() {
  this.isDone = !this.isDone;
};
