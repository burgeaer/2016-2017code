<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ page import = "gtc.edu.Student" %> 
<jsp:useBean id="student" class="gtc.edu.Student" scope="application"/>
<jsp:setProperty name="student" property="name" value="Jason" />


<%
	Student s1 = new Student();
	s1.setName("John");
	s1.setGrade(18);

	//student.setName("Sabrina");
	student.setGrade(19);
%> 
<!DOCTYPE html>
<html>
<head>

<title>JSP BEANS</title>
</head>
<body>
<h1>HOME PAGE</h1>
<a href="Beans2.jsp">Go to Page 2</a>

<br>
Student Name:  <%= s1.getName() %><br>
Student Grade: <%= s1.getGrade() %><br>
<hr>


<jsp:include page="page3.jsp">
	<jsp:param name="school" value="GATEWAY" />
	<jsp:param name="city" value="Racine"/>
</jsp:include>

	</body>
</html>