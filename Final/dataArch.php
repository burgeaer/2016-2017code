<!DOCTYPE html>
<head>

<title>Advanced Php Data</title>
<link rel="stylesheet" type="text/css" href="css/styles.css">
<?php 
session_start();

require 'connectDB.php';
ini_set('display_errors', 1);
?>
<head>
<body>
<h1>Archive Data Files<h1>
<h3 id="welcome">Welcome 
<?php
echo $_SESSION['username'];
?>
</h3>
<div class="container">
<nav>
<a href="logout.php">Logout</a>
<a href="edit.php">Account Information</a>
</nav>


<h4>You now have access to all the files for Advanced Php</h4>
<h4>Remember Copying code doesn't teach you anything so please use at your own risk</h4>

<h5>How it works: </h5>
<p>Click on the link</p>
<p>Then click SAVE FILE</p>
<p>The zip file will go to your downloads folder</p>

<p>The zip file will give you all the files and file information you need. 
<p>If you find a bug or an error with some of the code it will be easier to fix</p> 
<p>when you have the code in front of you.</p>
<p>If there are any errors with the code, or you have any questions please email me at aerynburgess@gmail.com.</p>

<h5>Links:</h5>
<ul>
<li><a href="Php/Ch8P-Exercises.zip">Chapter 8 Practice Files</a></li>
<li><a href="Php/8-1.zip">Exercise 8-1</a></li>
<li><a href="Php/Chapter9.zip">Chapter 9 Files</a></li>
<li><a href="Php/Chapter10.zip">Chapter 10 Files</a></li>
</ul>
<ul>
<li><a href="Php/Script5.3.zip">Chapter4-5 Apply</a></li>
<li><a href="Php/Chapter6.zip">Chapter 6 Practice files</a></li>
<li><a href="Php/Unit8.zip">Unit 8</a></li>
<li><a href="Php/Unit9.zip">Unit 9</a></li>
<li><a href="Php/Unit10.zip">Unit 10</a></li>
<li><a href="Php/Unit11.zip">Unit 11</a></li>
<li><a href="Php/Unit12 (2).zip">Unit 12</a></li>
</ul>
</div>
</body>
<footer>
An Aeryn Burgess Created Website &copy 2018
</footer>
</html>
