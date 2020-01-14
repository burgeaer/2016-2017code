<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ include file="header.html" %>
<%@ page import="gtc.edu.Student" %>
<h1>Hello :)</h1>

<%
	String name = "Joe";
	Student s1 = new Student();
	s1.setAge(23);
	s1.setName("Mary");	
	String str = request.getParameter("str");
	out.print(str);
%>
<br>
Your name is <%= name %>
<br>
5+6 = <% out.print(5+6); %>

<%!
	int a = 5;
	public int getSum() {
	return a+2;
	
}
	
	

%>

<br>
The sum of 2 + <%= a %> is <%= getSum() %>

</body>
</html>