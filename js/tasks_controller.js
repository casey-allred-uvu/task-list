var init_controller = function() {
  init_model();
  var tasks = getTasks();
  var objsArr = convertTasksToObjs(tasks);
  init_view(objsArr);
};

//for the model to signal something updated independently
var requestModelUpdateAJAX = function() {
  askServerForTasks();
};
var modelUpdated = function() {
  var tasks = getTasks();
  var objsArr = convertTasksToObjs(tasks);
  init_view(objsArr);
};
var modelMakingRequest = function() {
  greyOutScreen();
};
var modelRequestDone = function() {
  unGreyOutScreen();
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

var toggleTaskAction = function(id) {
  toggleTaskDone(id);
};

var animate = function() {
  var right = 0;
  var totalTime = 0;
  var square = document.getElementById("square");

  var moveSquare = function() {
    //update to new bottom and right values
    right += 10;
    if(right > 200) {
      right = 0;
    }
    //assign to the square
    square.style.right = right;

    //setup the next frame
    totalTime += 100;
    if(totalTime < 5000) { // only do it for 5 seconds
      setTimeout(moveSquare, 100);
    }
  };
  setTimeout(moveSquare, 100);
};


window.onload = init_controller;
