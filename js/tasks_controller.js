var init_controller = function() {
  init_model();
  var tasks = getTasks();
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
  init_view(objsArr);
};


window.onload = init_controller
