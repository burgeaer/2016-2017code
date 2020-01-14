<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<jsp:useBean id="student" class="gtc.edu.Student" scope="application">
</jsp:useBean>
<jsp:forward page="page3.jsp">
	<jsp:param name="school" value="GTC"/>
	<jsp:param name="city" value="RACINE"/>
</jsp:forward>
<!DOCTYPE html>
<html>
<head>

<title>JSP BEANS 2</title>
</head>
<body>
<h1>PAGE 2</h1>

<a href="ExampleBean.jsp">Go Back</a>
<br>

Student Name: <%= student.getName() %><br>
Student Grade <%= student.getGrade() %><br>
<hr>
</body>
</html>