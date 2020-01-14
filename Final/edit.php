<!DOCTYPE html>
<head>

<title>Home Page</title>
<link rel="stylesheet" type="text/css" href="css/styles.css">
<head>
<?php session_start();
require 'connectDB.php';

?>
</head>
<body>
<h1>Edit Account Infomation</h1>
<h2>Need to change your password? or Add Infomation? Enter Information down below to update</h2>
<nav id="margin2">
<a href="dataArch.php">Back to Data Archive</a>
</nav>

<div class="container">

<h3>Edit/Delete Account</h3>

<p>Don't panic your password is encrypted.</p>

<form method="post">
  <label>Username:</label>
  <input type="text" name="username" value="<?php echo $_SESSION["username"]; ?>"><br>
  <label>Password:</label> 
  <input type="text" name="password" value="<?php echo $_SESSION["password"]; ?>"><br>
  <label>First Name: </label>
  <input type="text" name="firstname" value="<?php echo $_SESSION["firstname"]; ?>"><br>
  <label>Last Name: </label>
  <input type="text" name="lastname" value="<?php echo $_SESSION["lastname"]; ?>"><br>
  <label>Email: </label>
  <input type="email" name="email" value="<?php echo $_SESSION["email"]; ?>"><br>
  <br>
  <button type="submit" value="update" name="btnUpdate">Update</button>
  <button type="submit" value="delete" name="btnUpdate">Delete Account</button>
  
  <?php 
  if($_SERVER['REQUEST_METHOD'] == 'POST') {
	  $username = $_POST['username'];
	  $firstname = $_POST['firstname'];
	  $lastname = $_POST['lastname'];
	  $email = $_POST['email'];
	  $password = $_POST['password'];
	  $encyrpt = sha1($password);
	  $btnVal = $_REQUEST['btnUpdate'];
	
  if ($btnVal == 'update') {  
  $sql = "UPDATE users SET Username=:username,Password=:password,FirstName=:firstname,LastName=:lastname,EmailAddress=:email WHERE UserID=:userID";
  $stmt = $DBConnect->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
  $stmt->execute(array(':username' => $username, ':password' => $encyrpt, ':firstname' => $firstname, ':lastname' => $lastname, ':email' => $email, ':userID' => $_SESSION['userID']));
  $_SESSION['Username'] = $username;
  $_SESSION['Password'] = $password;
  $_SESSION['FirstName'] = $firstname;
  $_SESSION['LastName'] = $lastname;
  $_SESSION['EmailAddress'] = $email;
  echo 'Your Account has been updated on the database. Once you Log out your changes will saved.';   
  }
	
	
  if ($btnVal == 'delete') {
	  $sql = "DELETE FROM users WHERE UserID = ?";
	  $stmt = $DBConnect->prepare($sql);
	  $stmt->execute(array($_SESSION['userID']));
	  session_destroy();
	  header('Location: index.php?msg3=' . urlencode(base64_encode("YOUR ACCOUNT HAS BEEN DELETED")));
  }
	
  }
  ?>
  </form>
  </div>
</body>
<html>