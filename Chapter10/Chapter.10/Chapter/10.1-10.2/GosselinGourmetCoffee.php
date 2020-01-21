<html>

<head>
</head>

<body>
<h1>Gosselin's Gourmet Coffee</h1>
<h2>Decription goes here</h2>
<p>Welcome Message goes here</p>
<p>Inventory goes here</p>
<?php
require_once("inc_OnlineStoreDB.php");
if (count($ErrorMsgs)) {
foreach ($ErrorMsgs as $Msg)
echo "<p>" . $Msg . "</p>\n";
}
else
echo "<p>Successfully connected to the database.</p>\n";
mysqli_close($DBConnect);
?>
</body>
</html>