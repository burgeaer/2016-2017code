<html>

<head>
</head>

<body>
<h1>Gosselin's Gourmet Coffee</h1>
<h2>Decription goes here</h2>
<p>Welcome Message goes here</p>
<?php
if (count($ErrorMsgs)==0) {
	$QueryResult= mysqli_query($DBConnect, "SELECT * FROM inventory " . "WHERE storeID='COFFEE'");
	if($QueryResult === FALSE)
		$ErrorMsgs[] = "<p>Unable to perform the query." . "<p>Error code " . mysqli_errno($DBConnect) . ": " . mysqli_error($DBConnect) . "</p>\n";
}
else {
	echo "<table width='100%'>\n";
	echo "<tr><th>Product</th><th>Decription</th>" . 
	"<th>Price Each</th></tr>\n";
	while(($Row = mysql_fetch_assoc($QueryResult)) !== NULL) {
		echo "<tr><td>" . htmlentities($Row['name']) . "</td>\n";
		echo "<td>" . htmlentities($Row['description']) . "</td>\n";
	printf("<td>$%.2f</td></tr>\n", $Row['price']);
	}
	echo "</table>";
}
require_once("inc_OnlineStoreDB.php");
if (count($ErrorMsgs)) {
foreach ($ErrorMsgs as $Msg)
echo "<p>" . $Msg . "</p>\n";
}
else {
	echo "Connection Successful";
}
	mysqli_close($DBConnect);
?>
</body>
</html>