<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Edit Question 2</title>
</head>
<body>
<form action="TakeSurvey.jsp" method="post">
Enter new question: 
<input type="text" value= <%= %>>
Enter new answer 1:
<input type="text">
Enter new answer 2:
<input type="text">
Enter new answer 3:
<input type="text">
Enter new answer 4:
<input type="text">

</form>
<p>Back to Edit Questions? <a href="EditSurvey.jsp">Click Here</a>
<p>If you wish to go back to the edit menu <a href="Edit.jsp">Click Here</a></p>
<%!




%>
</body>
</html>