<?php

$ErrorMsgs = array();
$DBConnect = @mysqli_connect("localhost", "aburgess", "VaniilaLatte0824",
"aburgess_online_stores");
if (!$DBConnect)
	$ErrorMsgs[] = "The database server is not avaliable.";

?>