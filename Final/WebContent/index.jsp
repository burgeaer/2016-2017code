<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<jsp:useBean id="yvc" scope="session" class="gtc.edu.YourVoteCounts"/>
<jsp:useBean id="q" scope="session" class="gtc.edu.Question"/>

<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Your Vote Counts Final</title>
</head>
<body>

		<h1>Welcome to the WNN Survey</h1>
		<p>***************************</p>
		<p>*                         *</p>
		<p>*         Main Menu       *</p>
		
		<p>*                         *</p>
		<p>* 1. Take the Survey      *</p>
		<p>* 2. View the Tallies     *</p>
		<p>* 3. Edit the Survey      *</p>
		<p>* 4. Exit                 *</p>
		<p>*                         *</p>
		<p>***************************</p>
		
		<form action="TakeSurvey.jsp" method="get">
		Click the Take Survey button to take our survey: 
		<input type="submit" value="Take Survey">
		</form>
		<br>
		<form action="ViewTallies.jsp" method="get">
		Click the View Tallies button to see who took our survey: 
		<input type="submit" value="View Tallies">
		</form>
		<br>
		<form action="Edit.jsp" method="get">
		Want to edit the survey? Click the Edit Survey button: 
		<input type="submit" value="Edit Survey">
		</form>
		<br>
		<form action="Exit.jsp" method="get">
		To leave this site press the Exit button: 
		<input type="submit" value="Exit">
		</form>
<% 
	
	
%>



</body>
</html>