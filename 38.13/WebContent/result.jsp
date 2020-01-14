<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<jsp:useBean id="poll" scope="session" class="gtc.edu.Poll"/>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Result</title>
</head>
<body>

<%
for(int i=0; i< poll.getTotalQuestions(); i++){

	String ans = request.getParameter("q"+ i);
	
	poll.setAnswers(i, Integer.parseInt(ans));
}	
/*
if (request.getParameter("q" + i).equals("No"))
	poll.setAnswers(i, 0);
else
	poll.setAnswers(i,1);
}
*/


for(int i=0; i< poll.getTotalQuestions(); i++){
%>
	
	<%= i + 1 %>. <%= poll.getQuestions(i) %> (<%= poll.getAnswers(i, 1) %> Yes) (<%= poll.getAnswers(i, 0) %> No)
	<br>
<% } %>

</body>
</html>