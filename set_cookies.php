<?php

setcookie("server_value", "httponly", 0, "/", "cs2550.edu", false, true);
setcookie("server_value2", "secure httponly", 0, "/", "cs2550.edu", true, true);
setcookie("server_value3", "nothing", 0, "/", "cs2550.edu", false, false);

echo "DONE!";
