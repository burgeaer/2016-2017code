<!DOCTYPE html>
<head>

<title>Login</title>
<link rel="stylesheet" type="text/css" href="css/styles.css">
<!-- <script src="validateForm.js"></script> -->
<body>
<h1>Advanced PHP<h1>
<h2>All Homework Assignments For Advanced PHP at Gateway Technical College</h2>
<nav id="margin1">
<a href="index.php">Home</a>
</nav>
<div class="container">


<h3>Login</h3>

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();
require 'connectDB.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST["username"];
    $password = $_POST["password"];
	$encyrpt = sha1($password);

	$stmt = $DBConnect->prepare("SELECT * FROM users WHERE username=:Username");
	$stmt->execute([":Username" => $username]);
	$user = $stmt->fetchAll();
	
	
	if (empty($user)) { 
	echo "Username doesn't exist. Please Return to the Home Page and Make an account";
	}
	else {
		$_SESSION["userID"] = $user[0]["UserID"];
		$_SESSION["username"] = $user[0]["Username"];
		$_SESSION["password"] = $user[0]["Password"];
		$_SESSION["firstname"] = $user[0]["FirstName"];
		$_SESSION["lastname"] = $user[0]["LastName"];
		$_SESSION["email"] = $user[0]["EmailAddress"];
		header('Location: ' . 'dataArch.php');
	} 
}
?>

<form method="post" action="login.php">
  <label>Username:</label>
  <input type="text" name="username" required><br>
  <label>Password:</label> 
  <input type="password" name="password" required><br>
  <br>
  <button type="submit">Login</button>
  </form>

</div> 
</body>
<footer>
An Aeryn Burgess Created Website &copy 2018
</footer>
</html>