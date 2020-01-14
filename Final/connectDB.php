<?php
try{
$DBConnect = new PDO('mysql:host=localhost;dbname=aburgess_accounts','aburgess','VaniilaLatte0824');
$DBConnect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (Exception $ex) {
	echo "<p>$ex</p>";
}