<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<jsp:useBean id="student" class="gtc.edu.Student" scope="application"/>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h1>PAGE 3</h1>

<a href="ExampleBean.jsp">Go Back</a>
<br>

Student Name: <%= student.getName() %><br>
Student Grade <%= student.getGrade() %><br>


School: <%= request.getParameter("school") %><br>
City: <%= request.getParameter("city") %><br>
</body>
</html>