<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<jsp:useBean id="yvc" scope="session" class="gtc.edu.YourVoteCounts"/>
<jsp:useBean id="q" scope="session" class="gtc.edu.Question"/>
<jsp:useBean id="t" scope="session" class="gtc.edu.Tally"/>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>View Tallies</title>
</head>
<body>


	<p>Total for answer 1 =<%= ans1 %></p>
		
	<p>Total for answer 2 =<%= ans2 %></p>
	
	<p>Total for answer 3 =<%= ans3 %></p> 
	
	<p>Total for answer 4 =<%= ans4 %></p>

<%!
private int ans1 = 0, ans2 = 0, ans3 = 0, ans4 = 0;

public void addToTotal(int x)
{
	switch(x)
	{
	case 1:
		ans1++;
		break;
	case 2:
		ans2++;
		break;
	case 3:
		ans3++;
		break;
	case 4:
		ans4++;
		break;
	}
}

%>



<p>If you wish to go back to the main menu <a href="index.jsp">Click Here</a></p>
<p>If you wish to exit<a href="Exit.jsp">Click Here</a></p>
</body>
</html>