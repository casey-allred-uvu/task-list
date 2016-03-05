<?php

$message = $_POST['message'];
$checked = $_POST['checked'];

$getMessage = $_GET['get_message'];
$getChecked = $_GET['get_checked'];

echo json_encode(array(
  array(
  "description" => $message,
  "checked" => $checked
  ),
  array(
    "description" => $getMessage,
    "checked" => $getChecked
  )
));
