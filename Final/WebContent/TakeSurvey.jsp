<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<jsp:useBean id="yvc" scope="session" class="gtc.edu.YourVoteCounts"/>
<jsp:useBean id="q" scope="session" class="gtc.edu.Question"/>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Take Survey</title>
</head>
<body>
<form>
1: <%= Q1 %><br>
<input type="radio" ><%= Q1A1 %><br>
<input type="radio" ><%= Q1A2 %><br>
<input type="radio" ><%= Q1A3 %><br>
<input type="radio" ><%= Q1A4 %><br>
2: <%= Q2 %><br>
<input type="radio" ><%= Q2A1 %><br>
<input type="radio" ><%= Q2A2 %><br>
<input type="radio" ><%= Q2A3 %><br>
<input type="radio" ><%= Q2A4 %><br>
3: <%= Q3 %><br>
<input type="radio" ><%= Q3A1 %><br>
<input type="radio" ><%= Q3A2 %><br>
<input type="radio" ><%= Q3A3 %><br>
<input type="radio" ><%= Q3A4 %><br>
4: <%= Q4 %><br>
<input type="radio" ><%= Q4A1 %><br>
<input type="radio" ><%= Q4A2 %><br>
<input type="radio" ><%= Q4A3 %><br>
<input type="radio" ><%= Q4A4 %><br>

<input type="submit" value="Submit" formaction="ViewTallies.jsp">

</form>

<%!

String Q1 = "What is your favorite news channel?";
String Q1A1 = "Fox News";
String Q1A2 = "CNN";
String Q1A3 = "MSNBC";
String Q1A4 = "Reuters";

String Q2 = "What country will send the first public transit spaceship?";
String Q2A1 = "USA";
String Q2A2 = "Russia";
String Q2A3 = "Africa";
String Q2A4 = "China";

String Q3 = "How many years will it take to build the US/Mexico Wall?";
String Q3A1 = "Zero there isn't going to be a wall!";
String Q3A2 = "4 years";
String Q3A3 = "10 years";
String Q3A4 = "100 years";

String Q4 = "What is your favorite browser?";
String Q4A1 = "Google";
String Q4A2 = "Bing";
String Q4A3 = "Yahoo";
String Q4A4 = "Other";


String answer1;
String answer2;
String answer3;
String answer4;


public String getAnswer1() {
	return answer1;
}

public void setAnswer1(String answer1) {
	this.answer1 = answer1;
}

public String getAnswer2() {
	return answer2;
}

public void setAnswer2(String answer2) {
	this.answer2 = answer2;
}

public String getAnswer3() {
	return answer3;
}

public void setAnswer3(String answer3) {
	this.answer3 = answer3;
}

public String getAnswer4() {
	return answer4;
}

public void setAnswer4(String answer4) {
	this.answer4 = answer4;
}
%>





<p>If you wish to go back to the main menu <a href="index.jsp">Click Here</a></p>
<p>If you wish to exit<a href="Exit.jsp">Click Here</a></p>
</body>
</html>