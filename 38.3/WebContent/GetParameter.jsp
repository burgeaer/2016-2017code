<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Student Registration</title>
</head>
<body>
<%  String lastName = request.getParameter("lastname");
    String firstName = request.getParameter("firstname");
    String mi = request.getParameter("middlename");
    String gender = request.getParameter("gender");
    String major = request.getParameter("major");
    String[] minors = request.getParameterValues("minor");
    String tennis = request.getParameter("tennis");
    String golf = request.getParameter("golf");
    String pingPong = request.getParameter("pingPong");

	out.println("Student Information: ");
    out.println("Last Name: <b>" + lastName + "</b> First Name: <b>"
      + firstName + "</b> MI: <b>" + mi + "</b><br>");
    out.println("Gender: <b>" + gender + "</b><br>");
    out.println("Major: <b>" + major + "</b> Minor: <b>");
	
    if (minors != null)
      for (int i = 0; i < minors.length; i++)
        out.println(minors[i] + " ");
    
	out.println("<br>");
    out.println("<br>Favorite Sport<br>");
    out.println("</b><br> Tennis: <b>" + tennis + "</b> Golf: <b>" +
      golf + "</b> PingPong: <b>" + pingPong + "</b><br>");
%>
</body>
</html>