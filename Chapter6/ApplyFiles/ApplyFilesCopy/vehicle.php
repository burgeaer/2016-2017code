<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Vehicle</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<?php
require('vehicleClass.php');
require('car.php');
require('boat.php');
require('plane.php');



$car = new Car('Car', 'V6');
$boat = new Boat('Boat', 'V8');
$plane = new Plane('Plane', 'GE90-115B');

$car->showInfo();
echo "<br>";
$boat->showInfo();
echo "<br>";
$plane->showInfo();


?>
<body>
</html>