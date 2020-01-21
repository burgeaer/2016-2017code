<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Triangle</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<?php
require('Shape.php');
require('Triangle.php');

$side1 = 5;
$side2 = 10;
$side3 = 13;

echo "<h2>With Sides of $side1, $side2, $side3...</h2>";

$t = new Triangle($side1, $side2, $side3);
echo '<p>The area of the triangle is ' . $t->getArea() . '</p>';
echo '<p>The perimeter of the triangle is ' . $t->getPerimeter() . '</p>';
unset($t);

?>
<body>
</html>