var init_controller = function() {
  init_model();
  var tasks = getTasks();
  var objsArr = convertTasksToObjs(tasks);
  init_view(objsArr);
};

var convertTasksToObjs = function(tasks) {
  //id, description, and checked values
  var objsArr = [];
  for(var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    objsArr.push({
      id: task.getId(),
      description: task.getDescription(),
      checked: task.isChecked()
    });
  }
  return objsArr;
};

var deleteTaskAction = function(id) {
  deleteTask(id); //model
  var tasks = getTasks();
  var objsArr = convertTasksToObjs(tasks);
  genAndInsertTaskList(objsArr);
};

var createTaskAction = function(description) {
  createTask(description);
  var tasks = getTasks();
  var objsArr = convertTasksToObjs(tasks);
  genAndInsertTaskList(objsArr);
  genAndInsertCreateTask();
};

window.onload = init_controller
