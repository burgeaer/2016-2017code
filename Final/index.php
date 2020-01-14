<!DOCTYPE html>
<head>

<title>Home Page</title>
<link rel="stylesheet" type="text/css" href="css/styles.css">
<head>
<body>
<h1>Advanced PHP<h1>
<h2>All Homework Assignments For Advanced PHP at Gateway Technical College</h2>
<nav>
<a href="index.php">Home</a>
<a href="login.php">Login</a>
</nav>
<div class="container">
<?php 
ini_set('display_errors', 0);
session_start(); 
if ($_GET['msg']){
       echo '<div class="success_message">' . base64_decode(urldecode($_GET['msg'])) . '</div>';
}
else {
	echo 'Login or Register below';
}

if ($_GET['msg2']) {
	 echo '<div class="success_message">' . base64_decode(urldecode($_GET['msg2'])) . '</div>';
}
else {
	echo ' ';
}
if ($_GET['msg3']) {
	 echo '<div class="success_message">' . base64_decode(urldecode($_GET['msg3'])) . '</div>';
}
else {
	echo ' ';
}

?>
<h3 id="space">Haven't Registered Yet?</h3>
<h4>Sign Up below</h4>
<?php 
include("register.php");
?>
<form method="post" action="register.php">
  <label>Username:</label>
  <input type="text" name="username" required><br>
  <label>Password:</label>
  <input type="password" name="password" required><br>
  <label>First Name: </label>
  <input type="text" name="firstname" required><br>
  <label>Last Name: </label>
  <input type="text" name="lastname" required><br>
  <label>Email: </a>
  <input type="email" name="email"><br>
  <br>
  
  <button type="submit">Submit</button>

</form>
</body>
</div>
<footer>
An Aeryn Burgess Created Website &copy 2018
</footer>
<!-- Special Thanks to the websites and person who made this a success 
http://www.developphp.com/video/PHP/Sign-Up-Form-and-Email-Activation-PHP-MySQL-JavaScript-Programming-Tutorial - Helped with the register page
https://stackoverflow.com/questions/15594807/redirect-on-logout-and-display-you-have-successfully-logged-out - Helped with the logout page
https://www.toptal.com/designers/subtlepatterns/page/6/ - Helped with Css
https://www.sitepoint.com/community/t/using-session-variables-to-keep-user-logged-in-if-they-havent-logged-out/294407
Alex Parys - Helped me to understand what is going on with me code and explained how to fix my code. 

and Thank you Christian Hur. I know we have had quite a journey together with this class and Java. but you really were a great help throughout this process. Thank you very much for believing in me :)

--->

</html>
