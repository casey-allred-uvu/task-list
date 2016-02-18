var View = {
  task_div_id: "tasks_go_here",
  create_div_id: "create_task_here",
  init: function() {

  },
  // objsArr is an array of Objects with an id, description, and checked values
  // test with View.genTaskListHtml([{id: 1, description: "task 1", checked: false},{id:2, description: "task 2", checked: true}]);
  genTaskListHtml: function(objsArr) {
    var html = "<table>";
    var cssClass = "even";
    for(var i = 0; i < objsArr.length; i++) {
      var obj = objsArr[i];
      cssClass = (cssClass == "even") ? "odd" : "even";
      html += "<tr>";
      html += "<td><input type='checkbox'"+
        (obj.checked?" checked='checked'":"")+" /></td>";
      html += "<td>"+obj.description+"</td>";
      html += "<td><button type='button'>x</button></td>";
      html += "</tr>";
    }
    html += "</table>";
    return html;
  }
};
