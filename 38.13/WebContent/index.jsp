<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<jsp:useBean id="poll" scope="session" class="gtc.edu.Poll"/>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Poll</title>
</head>
<body>
<form action="result.jsp">
<table>
	<%
	
		for(int i=0; i< poll.getTotalQuestions(); i++){
	%>

	<tr><td><%= i + 1 %> <%= poll.getQuestions(i) %></td> 
	<td><input type="radio" name="q<%= i %>" value="1">Yes</td> 
	<td><input type="radio" name="q<%= i %>" value="0">No</td>
	</tr>
	<% } %>
	 <tr><td><input type="submit" value="Submit"></td><td><input type="reset" value="Reset"></td></tr>
</table>
</form>
</body>
</html>