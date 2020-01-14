<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
<title>Verify Intern Login</title>
</head>
<body>
<h1>College Internship</h1>
<h2>Verify Intern Login</h2>
<?php
$errors = 0;
$DBConnect = @mysqli_connect("localhost", "aburgess", "VaniilaLatte0824");
if ($DBConnect === FALSE) {
     echo "<p>Unable to connect to the database server. " .
          "Error code " . mysqli_errno() . ": " .
          mysqli_error() . "</p>\n";
     ++$errors;
} 
else {
     $DBName = "aburgess_internships";
     $result = @mysqli_select_db($DBConnect,$DBName);
     if ($result === FALSE) {
          echo "<p>Unable to select the database. " .
               "Error code " . mysqli_errno($DBConnect) .
               ": " . mysqli_error($DBConnect) . "</p>\n";
          ++$errors;
     }
}
$TableName = "interns";
if ($errors == 0) {
     $SQLstring = "SELECT internID, first, last FROM $TableName "
          . " where email='" . stripslashes($_POST['email']) . 
          "' and password_md5='" . 
          md5(stripslashes($_POST['password'])) . "'";
    $QueryResult = @mysqli_query($DBConnect,$SQLstring);
     if (mysqli_num_rows($QueryResult)==0) {
          echo "<p>The email address/password " . 
               " combination entered is not valid.</p>\n";
          ++$errors;
     }
     else {
          $Row = mysqli_fetch_assoc($QueryResult);
          $_SESSION['internID'] = $Row['internID'];
          $InternName = $Row['first'] . " " . $Row['last'];
          echo "<p>Welcome back, $InternName!</p>\n";     }
}
if ($errors > 0) {
     echo "<p>Please use your browser's BACK button to return " .
          " to the form and fix the errors indicated.</p>\n";
}
if ($errors == 0) {
echo "<p><a href='AvailableOpportunities.php?" .
          SID . "'>Available Opportunities</a></p>\n";
}

?>
</body>
</html>

