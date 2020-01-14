package com.ch37.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Example
 */
@WebServlet("/Example")
public class Example extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Example() {
        super();
    
    
    }
    public void showHeader(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	PrintWriter out = response.getWriter();
    	out.println("<!DOCTYPE html>");
    	out.println("<h1>Hello World<h1>");
    	out.println("<body>");
    }
    	public void showBody(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {	
    		PrintWriter out = response.getWriter();
        	out.println("<p>This is a " + request.getParameter("name") + "</p>");
        	out.println("</body>");
    }
    
    	public void showFooter(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    		PrintWriter out = response.getWriter();
        	out.println("<footer>Copyright 2017");
        	out.println("</footer>");
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
		showFooter(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("doPost()");
	
		showHeader(request, response);
		showBody(request, response);
		showFooter(request, response);
		
		
	}
	
	

}
