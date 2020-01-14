<?php

$ErrorMsgs = array();
$DBConnect =  @mysqli_connect("localhost", "aburgess", "VaniilaLatte0824",
"aburgess_online_stores");
if (mysqli_errno($DBConnect)) {
	$ErrorMsgs[] = "Unable to connect to the database server." . " Error code " . mysqli_errno($DBConnect) . ": " . mysqli_error($DBConnect);
} 
?>