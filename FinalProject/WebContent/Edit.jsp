<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<jsp:useBean id="yvc" scope="session" class="gtc.edu.YourVoteCounts"/>
<jsp:useBean id="q" scope="session" class="gtc.edu.Question"/>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Edit</title>
</head>
<body>
		<h1>Welcome to the WNN Survey</h1>
		<p>***************************</p>
		<p>*                         *</p>
		<p>*         Edit Menu       *</p>
		
		<p>*                         *</p>
		<p>* 1. Edit Survey          *</p>
		<p>* 2. Current Questions    *</p>
		<p>* 3. Clear Tallies        *</p>
		<p>* 4. Exit                 *</p>
		<p>*                         *</p>
		<p>***************************</p>
		

		<form action="EditSurvey.jsp" method="get">
		Click the Edit Survey button to Edit our survey: 
		<input type="submit" value="Edit Survey">
		</form>
		<br>
		<form action="CurrentQuestions.jsp" method="get">
		Click the Current Questions button to see our Questions: 
		<input type="submit" value="Current Questions">
		</form>
		<br>
		<form action="ClearTallies.jsp" method="get">
		Want to clear the Tallies? Click the Clear Tallies Button: 
		<input type="submit" value="Clear Tallies">
		</form>
		<br>
		<form action="Exit.jsp" method="get">
		To leave this site press the Exit button: 
		<input type="submit" value="Exit">
		</form>
		
		<p>If you wish to go back to the main menu <a href="index.jsp">Click Here</a></p>

</body>
</html>