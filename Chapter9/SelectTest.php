<!DOCTYPE html>
<html>
<head></head>
<body>

<?php
include("Ch8P-3.php");

if($DBConnect !== FALSE) {
	echo "<p>Selected the \"$DBName\" database</p>\n";
	mysqli_close($DBConnect);
}
?>

</body>
<html>
