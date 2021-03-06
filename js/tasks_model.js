var tasks = [];
var init_model = function() {
  //init task list state here
  createTask("newtask");
  var task = createTask("newtask2");
  task.toggleDone();
  createTask("newTask3");
  //LOAD AJAX HERE
  // askServerForTasks();
};
var askServerForTasks = function() {
  modelMakingRequest();
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    console.log(request.readyState);
    if(request.readyState == 4 && request.status == 200) {
      var data = JSON.parse(request.responseText);
      if(typeof data.length != "undefined") {
        for(var i = 0; i < data.length; i++) {
          var obj = data[i];
          var task = createTask(obj.description);
          if(obj.checked) {
            task.toggleDone();
          }
        }
      }
      modelUpdated();
      modelRequestDone();
    }
  };
  console.log("starting");
  request.open("GET", "data/tasks.json");//, false);
  // request.open("GET", "data/tasks.php");
  request.send(null);
  console.log("after send");
};

var askServerForTasksPost = function() {
  modelMakingRequest();
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    console.log(request.readyState);
    if(request.readyState == 4 && request.status == 200) {
      var data = JSON.parse(request.responseText);
      if(typeof data.length != "undefined") {
        for(var i = 0; i < data.length; i++) {
          var obj = data[i];
          var task = createTask(obj.description);
          if(obj.checked) {
            task.toggleDone();
          }
        }
      }
      modelUpdated();
      modelRequestDone();
    }
  };
  console.log("starting");
  // request.open("GET", "data/tasks.json", false);
  request.open("POST", "handle_post.php?get_message=get task&get_checked=true");
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send("message=post task&checked=false");
  console.log("after send");
};

var askServerForTasksXML = function() {
  modelMakingRequest();
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    console.log(request.readyState);
    if(request.readyState == 4 && request.status == 200) {
      var doc = request.responseXML;

      var parser = new DOMParser();
      var doc = parser.parseFromString(request.responseText, "text/xml");
      console.log(doc.parseError);
      console.log(doc);
      var data = doc.getElementsByTagName("task");
      if(typeof data.length != "undefined") {
        for(var i = 0; i < data.length; i++) {
          var obj = data[i];
          var description = obj.getElementsByTagName("description")[0].innerHTML;
          var checked = obj.getElementsByTagName("checked")[0].innerHTML;
          var task = createTask(description);
          if(checked == "true") {
            task.toggleDone();
          }
        }
      }
      modelUpdated();
      modelRequestDone();
    }
  };
  console.log("starting");
  // request.open("GET", "data/tasks.json", false);
  request.open("GET", "data/tasks.xml");
  //request.responseType = "document";
  request.send();
  console.log("After send");
};

var saveToLocalStorage = function() {
  var taskStr = JSON.stringify(tasks);
  localStorage.setItem("tasks", taskStr);
};

var restoreFromLocalStorage = function() {
  var taskStr = localStorage.getItem("tasks");
  var objs = JSON.parse(taskStr);
  if(typeof objs.length != "undefined") {
    tasks = [];
    for(var i = 0; i < objs.length; i++) {
      var obj = objs[i];
      if(obj) {
        var task = createTask(obj.description);
        if(obj.isDone) {
          task.toggleDone();
        }
      }
    }
    modelUpdated();
  }
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
