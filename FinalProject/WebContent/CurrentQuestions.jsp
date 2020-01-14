<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Current Questions</title>
</head>
<body>

1: <%= Q1 %><br>
<%= Q1A1 %><br>
<%= Q1A2 %><br>
<%= Q1A3 %><br>
<%= Q1A4 %><br>
2: <%= Q2 %><br>
<%= Q2A1 %><br>
<%= Q2A2 %><br>
<%= Q2A3 %><br>
<%= Q2A4 %><br>
3: <%= Q3 %><br>
<%= Q3A1 %><br>
<%= Q3A2 %><br>
<%= Q3A3 %><br>
<%= Q3A4 %><br>
4: <%= Q4 %><br>
<%= Q4A1 %><br>
<%= Q4A2 %><br>
<%= Q4A3 %><br>
<%= Q4A4 %><br>


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
%>

</body>
</html>