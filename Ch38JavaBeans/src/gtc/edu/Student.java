package gtc.edu;

import java.io.Serializable;

public class Student implements Serializable {
	
	private String name;
	private int grade;
	
	
	public Student() {
		
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public int getGrade() {
		return grade;
	}


	public void setGrade(int grade) {
		this.grade = grade;
	}

}
