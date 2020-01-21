function validateForm() {
    var x = document.forms["registerForm"]["username"].value;
	var y = document.forms["registerForm"]["password"].value;
	var z = document.forms["login"]["username"].value;
	var a = document.forms["login"]["password"].value;
	
    if (x == "" && y == "") {
        alert("Username and Password must be filled out");
        return false;
    }
	
	if (z == "" && a == "") {
		alert("Username either doesn't exist or password is incorrect");
		return false;
	}
	
}