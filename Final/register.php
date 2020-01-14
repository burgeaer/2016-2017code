
<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST["username"];
   
    $password = $_POST["password"];
	
	$encyrpt = sha1($password);
	
	$firstname = $_POST["firstname"];
	
	$lastname = $_POST["lastname"];
	
	$email = $_POST["email"];



    if (isset($username)) {
        include_once("connectDB.php");
        $sql = "SELECT Username FROM users WHERE username=:Username";
        $stmt = $DBConnect->prepare($sql);
        $stmt->execute([":Username" => $username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
      
    }
    if (isset($encyrpt)) {
        include_once("connectDB.php");
        $sql = "SELECT Password FROM users WHERE password=:Password";
        $stmt = $DBConnect->prepare($sql);
        $stmt->execute([":Password" => $encyrpt]);
        $pass = $stmt->fetch(PDO::FETCH_ASSOC);
		  
		$sql = "INSERT INTO users (Username, Password, FirstName, LastName, EmailAddress) VALUES (?, ?, ?, ?, ?)";
		$stmt = $DBConnect->prepare($sql);
		$stmt->execute([$username, $encyrpt, $firstname, $lastname, $email]);
		
	}
	header('Location: index.php?msg2=' . urlencode(base64_encode("You have successfully made an account! :)")));

}
?>



