<?php
$db = mysql_connect("localhost","username","password");
if(!$db){
    die("Database connect failed miserably : " . mysql_error());
    
}



?>