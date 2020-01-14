package gtc.edu;

import javax.faces.bean.*;

@ManagedBean
@ViewScoped

public class Factorial {
	private int num;
	private String title;
	public Factorial() {
		setNum(10);
		setTitle("Display Factorials");
	}
	public String getShow() {
		String html ="<table><tr><td>Number</td><td>Factorial</td></tr>";
		for (int i = 0; i <=num; i++) {
			html += "<tr><td>" + i + "</td><td>" + computeFactorial(i) + "</td></tr>";
		} 
		html += "</table>";
		
		return html;
		}
	
	public int getNum() {
		return num;
	}
	private void setNum(int num) {
		this.num = num;
		
	}
	
	public int computeFactorial(int n) {
		if (n==0 || n==1)
			return 1;
		else 
			return n*computeFactorial(n-1);
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
}
