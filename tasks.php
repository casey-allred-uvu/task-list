<html>
  <head>
    <title>Our Awesome Task List</title>
    <link rel="stylesheet" href="css/main.css">
  </head>
  <body>
    <div id="container" style="display:none;">
      <div id="square">
      </div>
    </div>
<?php sleep(5); ?>
    <div id="content">
      <h1>Task List</h1>
      <div id="tasks_go_here">
        <table><tbody>
          <tr class="odd"><td><input data-taskid="0" type="checkbox"></td><td>newtask</td><td><button data-taskid="0" type="button">x</button></td></tr>
          <tr class="even"><td><input data-taskid="1" type="checkbox" checked="checked"></td><td>newtask2</td><td><button data-taskid="1" type="button">x</button></td></tr>
          <tr class="odd"><td><input data-taskid="2" type="checkbox"></td><td>newTask3</td><td><button data-taskid="2" type="button">x</button></td></tr>
          <tr class="even"><td><input data-taskid="3" type="checkbox"></td><td>Long Task 1</td><td><button data-taskid="3" type="button">x</button></td></tr>
          <tr class="odd"><td><input data-taskid="4" type="checkbox" checked="checked"></td><td>Long Task 2</td><td><button data-taskid="4" type="button">x</button></td></tr>
          <tr class="even"><td><input data-taskid="5" type="checkbox"></td><td>Long Task 3</td><td><button data-taskid="5" type="button">x</button></td></tr>
        </tbody></table></div>
    </div>
</body>
</html>
