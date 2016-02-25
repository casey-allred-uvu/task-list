var task_div_id = "tasks_go_here";
var create_div_id = "create_task_here";

//init function
var init_view = function(objsArr) {
  genAndInsertTaskList(objsArr);
  insertCreateTaskHtml(genCreateTaskHtml());
};

//update function
var genAndInsertTaskList = function(objsArr) {
  var html = genTaskListHtml(objsArr);
  insertTaskListHtml(html);
};
// objsArr is an array of Objects with an id, description, and checked values
// test with genTaskListHtml([{id: 1, description: "task 1", checked: false},{id:2, description: "task 2", checked: true}]);
var genTaskListHtml = function(objsArr) {
  var html = "<table>";
  var cssClass = "even";
  for(var i = 0; i < objsArr.length; i++) {
    var obj = objsArr[i];
    cssClass = (cssClass == "even") ? "odd" : "even";
    html += "<tr class='"+cssClass+"'>";
    html += "<td><input type='checkbox'"+
      (obj.checked?" checked='checked'":"")+" /></td>";
    html += "<td>"+obj.description+"</td>";
    html += "<td><button type='button'>x</button></td>";
    html += "</tr>";
  }
  html += "</table>";
  return html;
};

var insertTaskListHtml = function(html) {
  document.getElementById(task_div_id).innerHTML = html;
};

var genCreateTaskHtml = function() {
  var html = "<div id='create_task'>";
  html += "<input type='text' placeholder='Task Description' />";
  html += "<button type='button'>Add Task</button>"
  html += "</div>";
  return html;
};

var insertCreateTaskHtml = function(html) {
  document.getElementById(create_div_id).innerHTML = html;
};
