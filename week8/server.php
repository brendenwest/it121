<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');  

  $students = array(
      "Thomas",
      "Steve",
      "Jonathan",
      "Amy",
      "Rick",
      "Aubrey",
      );

if ($q = $_REQUEST) {
    echo $_REQUEST["firstname"]; 
    echo $students[$_REQUEST["firstname"]];
} else {
    echo $_POST["firstname"]; 
}
?>