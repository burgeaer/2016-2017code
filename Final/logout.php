<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();
require 'connectDB.php';

if ($_SESSION['UserID']) {
	$_SESSION = array();

session_destroy();
}
header('Location: index.php?msg=' . urlencode(base64_encode("You have been successfully logged out!")));

?>