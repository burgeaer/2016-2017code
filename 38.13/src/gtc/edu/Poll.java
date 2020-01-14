package gtc.edu;

import javax.faces.bean.*;

@ManagedBean
@SessionScoped
public class Poll {
	
	
	String[] questions = {"Are you CSS Major?","Do you live in the Savannah?"};
	int [][] answers = new int[questions.length][2];
	
	
	public int getTotalQuestions() {
		return questions.length;
	}
	
	
	public String getQuestions(int i) {
		return questions[i];
	}
	public void setQuestions(String question, int i) {
		this.questions[i] = question;
	}
	public int getAnswers(int q, int a) {
		return answers[q][a];
	}
	public void setAnswers(int q, int a) {
		this.answers[q][a]++;
	}
	
	public Poll() {
		
	}
	public static void main(String[] args) {
		

	}

}
