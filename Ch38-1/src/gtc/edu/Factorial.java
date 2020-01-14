package gtc.edu;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Factorial
 */
@WebServlet("/Factorial")
public class Factorial extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Factorial() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
   
   public void showHeader(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    PrintWriter out = response.getWriter();
	out.println("<!DOCTYPE html>");
	out.println("<head>");
	out.println("<link href='styles.css' rel='stylesheet' type='text/css'");
	out.println("</head>");
	out.println("<body>");
	out.println("<h3>Factorial Table</h3>");
    }
    public void showBody(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {	
		PrintWriter out = response.getWriter();
    	out.println("<table>");
    	out.println("<tr>");
    	out.println("<td>Number</td>");
    	out.println("<td>Factorial</td>");
    	out.println("</tr>");
    	out.println("<tr>");
    	out.println("<td>0</td>");
    	out.println("<td>1</td>");
    	out.println("</tr>");
    	out.println("<tr>");
    	out.println("<td>1</td>");
    	out.println("<td>1</td>");
    	out.println("</tr>");
    	out.println("<tr>");
    	out.println("<td>2</td>");
    	out.println("<td>2</td>");
    	out.println("</tr>");
    	out.println("<tr>");
    	out.println("<td>3</td>");
    	out.println("<td>6</td>");
    	out.println("</tr>");
    	out.println("<tr>");
    	out.println("<td>4</td>");
    	out.println("<td>24</td>");
    	out.println("</tr>");
    	out.println("<tr>");
    	out.println("<td>5</td>");
    	out.println("<td>120</td>");
    	out.println("</tr>");
    	out.println("<tr>");
    	out.println("<td>6</td>");
    	out.println("<td>720</td>");
    	out.println("</tr>");
    	out.println("<tr>");
    	out.println("<td>7</td>");
    	out.println("<td>5040</td>");
    	out.println("</tr>");
    	out.println("<tr>");
    	out.println("<td>8</td>");
    	out.println("<td>40320</td>");
    	out.println("</tr>");
    	out.println("<tr>");
    	out.println("<td>9</td>");
    	out.println("<td>362880</td>");
    	out.println("</tr>");
    	out.println("<tr>");
    	out.println("<td>10</td>");
    	out.println("<td>3628800</td>");
    	out.println("</tr>");
    	out.println("</table>");
    	out.println("</body>");
    	out.println("</html>");
}
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	System.out.println("Service()");
    	doGet(request, response);
    }   	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		doPost(request, response);
		showHeader(request, response);
		showBody(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("doPost()");
	}

}
