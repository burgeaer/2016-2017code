package gtc.edu;
import java.util.Scanner;

public class YourVoteCounts {
	public static Scanner input = new Scanner(System.in);
	public static Question question[] = new Question[4];

	//public static void main(String[] args) {

		//createQuestions();
		//displayMainMenu();
		//int choice = getUserChoice();
		//runSurvey(choice);
	//}
	public static void displayMainMenu()
	{
		System.out.println("_____________________________");
		System.out.println("| Welcome to the WNN Survey |");
		System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
		System.out.println(" ***************************");
		System.out.println(" *                         *");
		System.out.println(" *         Main Menu       *");
		System.out.println(" * _______________________ *");
		System.out.println(" *                         *");
		System.out.println(" * 1. Take the Survey      *");
		System.out.println(" * 2. View the Tallies     *");
		System.out.println(" * 3. Edit the Survey      *");
		System.out.println(" * 4. Exit                 *");
		System.out.println(" *                         *");
		System.out.println(" ***************************");
		System.out.println("");

	}
	private static int getUserChoice()
	{ System.out.println("Enter your selection >>> ");
		int userChoice = input.nextInt();

		while(userChoice < 1 || userChoice > 4)
		{
			System.out.println("");
			System.out.println("Invalid entry. Try again >> ");
			//userChoice = input.nextInt();
			System.out.print("Please enter your choice (1-4) >> ");
			userChoice = input.nextInt();
		}
		return userChoice;
	}
	private static void displayEditMenu()
	{
		System.out.println("");
		System.out.println("***************************");
		System.out.println("*                         *");
		System.out.println("*         Edit Menu       *");
		System.out.println("* _______________________ *");
		System.out.println("*                         *");
		System.out.println("* 1. Edit Survey          *");
		System.out.println("* 2. Current Questions    *");
		System.out.println("* 3. Clear Tallies        *");
		System.out.println("* 4. Exit                 *");
		System.out.println("*                         *");
		System.out.println("***************************");
		System.out.println("");
	}
	public static void runSurvey(int choice)
	{
		while(choice != 4)
		{
		if(choice == 1){
			displaySurvey();
			displayMainMenu();
			choice = getUserChoice();
		}
		else if(choice == 2){
				for(int i = 0; i < question.length; i++)
				{
					System.out.println(question[i].getQuestion());
					question[i].displayTallies();
				}
				displayMainMenu();
				choice = getUserChoice();
				input.nextLine();
		}
		else if(choice == 3){
				password();
				displayEditMenu();
				int edit = 0;
				edit = getUserChoice();

				while(edit < 4){
				if(edit == 1){
					editSurvey();
					displayEditMenu();
					edit = getUserChoice();
				}
				else if(edit == 2){
					 viewSurveyQuestions();
					 displayEditMenu();
					 edit = getUserChoice();
					 input.nextLine();
					}
				else if (edit == 3){
					for(int i = 0; i < question.length; i++)
					{
					question[i].clearTallies();
					System.out.println("Complete");
					}
					displayEditMenu();
					edit = getUserChoice();
					input.nextLine();
					}
				}displayMainMenu();
				choice = getUserChoice();
			}
		}System.out.print("Thank you for your participation in our Survey!");
	}

	public static void password()
	{
	int password;
	boolean validEntry = false;
	while(validEntry != true){
try
{
	System.out.print("Enter Password");
	password = input.nextInt();
	if(password == 1234)
		validEntry = true;

	if(password != 1234)
	{
		System.out.println("");
		System.out.println("The password you have entered is Invalid, please try again.");
		System.out.println("");
	}
}
	catch(Exception e)
	{
		input.nextLine();
		System.out.println("");
		System.out.println("INVALID ENTRY!!!");
		System.out.println("");
		}
	}
}


	private static void editSurvey()
	{
		System.out.println("Choose a question to Edit(1-4) \n Enter 5 to exit>>> ");
		int edit = input.nextInt();
		while(edit != 5)
		{
			switch(edit)
			{
			case 1:
				System.out.println("Enter new question: ");
				input.nextLine();
				question[0].setQuestion(input.nextLine());
				System.out.println("");
				System.out.println("Enter new answer number 1: ");
				question[0].setAnswer1(input.nextLine());
				System.out.println("");
				System.out.println("Enter new answer number 2: ");
				question[0].setAnswer2(input.nextLine());
				System.out.println("");
				System.out.println("Enter new answer number 3: ");
				question[0].setAnswer3(input.nextLine());
				System.out.println("");
				System.out.println("Enter new answer number 4: ");
				question[0].setAnswer4(input.nextLine());
				System.out.println("");
				edit = getUserEdit();
				break;
			case 2:
				System.out.println("Enter new question: ");
				input.nextLine();
				question[1].setQuestion(input.nextLine());
				System.out.println("");
				System.out.println("Enter new answer number 1: ");
				question[1].setAnswer1(input.nextLine());
				System.out.println("");
				System.out.println("Enter new answer number 2: ");
				question[1].setAnswer2(input.nextLine());
				System.out.println("");
				System.out.println("Enter new answer number 3: ");
				question[1].setAnswer3(input.nextLine());
				System.out.println("");
				System.out.println("Enter new answer number 4: ");
				question[1].setAnswer4(input.nextLine());
				System.out.println("");
				edit = getUserEdit();
				break;
			case 3:
				System.out.println("Enter new question: ");
				input.nextLine();
				question[2].setQuestion(input.nextLine());
				System.out.println("");
				System.out.println("Enter new answer number 1: ");
				question[2].setAnswer1(input.nextLine());
				System.out.println("");
				System.out.println("Enter new answer number 2: ");
				question[2].setAnswer2(input.nextLine());
				System.out.println("");
				System.out.println("Enter new answer number 3: ");
				question[2].setAnswer3(input.nextLine());
				System.out.println("");
				System.out.println("Enter new answer number 4: ");
				question[2].setAnswer4(input.nextLine());
				System.out.println("");
				edit = getUserEdit();
				break;
			case 4:
				System.out.println("Enter new question: ");
				input.nextLine();
				question[3].setQuestion(input.nextLine());
				System.out.println("");
				System.out.println("Enter new answer number 1: ");
				question[3].setAnswer1(input.nextLine());
				System.out.println("");
				System.out.println("Enter new answer number 2: ");
				question[3].setAnswer2(input.nextLine());
				System.out.println("");
				System.out.println("Enter new answer number 3: ");
				question[3].setAnswer3(input.nextLine());
				System.out.println("");
				System.out.println("Enter new answer number 4: ");
				question[3].setAnswer4(input.nextLine());
				System.out.println("");
				edit = getUserEdit();
				break;
			}
		}
	}

	private static int getUserEdit() {
		{ System.out.println("Choose a question to Edit(1-4) \n Enter 5 to exit>>> ");
		int userEdit = input.nextInt();

		while(userEdit < 1 || userEdit > 5)
		{
			System.out.println("");
			System.out.println("Invalid entry. Try again >> ");
			//userEdit = input.nextInt();
			System.out.print("Please enter your choice (1-4) >> ");
			userEdit = input.nextInt();
		}
		return userEdit;
	}
	}
	private static void viewSurveyQuestions() {

		System.out.println("1. " + question[0].getQuestion());
		System.out.println("");
		System.out.println("1. " + question[0].getAnswer1());
		System.out.println("2. " + question[0].getAnswer2());
		System.out.println("3. " + question[0].getAnswer3());
		System.out.println("4. " + question[0].getAnswer4());
		System.out.println("");
		System.out.println("2. " + question[1].getQuestion());
		System.out.println("");
		System.out.println("1. " + question[1].getAnswer1());
		System.out.println("2. " + question[1].getAnswer2());
		System.out.println("3. " + question[1].getAnswer3());
		System.out.println("4. " + question[1].getAnswer4());
		System.out.println("");
		System.out.println("3. " + question[2].getQuestion());
		System.out.println("");
		System.out.println("1. " + question[2].getAnswer1());
		System.out.println("2. " + question[2].getAnswer2());
		System.out.println("3. " + question[2].getAnswer3());
		System.out.println("4. " + question[2].getAnswer4());
		System.out.println("");
		System.out.println("4. " + question[3].getQuestion());
		System.out.println("");
		System.out.println("1. " + question[3].getAnswer1());
		System.out.println("2. " + question[3].getAnswer2());
		System.out.println("3. " + question[3].getAnswer3());
		System.out.println("4. " + question[3].getAnswer4());
		System.out.println("");
		input.nextLine();

	}
	private static void displaySurvey()
	{
		for (int i = 0; i < question.length; i++)
		{
			System.out.println("");
			System.out.println("Question " + (i+1) + ": ");
			System.out.println(question[i].getQuestion());
			System.out.println("1. " + question[i].getAnswer1());
			System.out.println("2. " + question[i].getAnswer2());
			System.out.println("3. " + question[i].getAnswer3());
			System.out.println("4. " + question[i].getAnswer4());
			System.out.println("");
			int x;
			x = getUserChoice();
			question[i].addToTotal(x);
		}
	}
	private static void createQuestions()
	{
	Question ques1 = new Question();
	Question ques2 = new Question();
	Question ques3 = new Question();
	Question ques4 = new Question();

	question[0] = ques1;
	question[1] = ques2;
	question[2] = ques3;
	question[3] = ques4;


	String Q1 = "What is your favorite news channel?";
	String Q1A1 = "Fox News";
	String Q1A2 = "CNN";
	String Q1A3 = "MSNBC";
	String Q1A4 = "Reuters";

	question[0].setQuestion(Q1);
	question[0].setAnswer1(Q1A1);
	question[0].setAnswer2(Q1A2);
	question[0].setAnswer3(Q1A3);
	question[0].setAnswer4(Q1A4);

	String Q2 = "What country will send the first public transit spaceship?";
	String Q2A1 = "USA";
	String Q2A2 = "Russia";
	String Q2A3 = "Africa";
	String Q2A4 = "China";

	question[1].setQuestion(Q2);
	question[1].setAnswer1(Q2A1);
	question[1].setAnswer2(Q2A2);
	question[1].setAnswer3(Q2A3);
	question[1].setAnswer4(Q2A4);

	String Q3 = "How many years will it take to build the US/Mexico Wall?";
	String Q3A1 = "Zero there isn't going to be a wall!";
	String Q3A2 = "4 years";
	String Q3A3 = "10 years";
	String Q3A4 = "100 years";

	question[2].setQuestion(Q3);
	question[2].setAnswer1(Q3A1);
	question[2].setAnswer2(Q3A2);
	question[2].setAnswer3(Q3A3);
	question[2].setAnswer4(Q3A4);

	String Q4 = "What is your favorite browser?";
	String Q4A1 = "Google";
	String Q4A2 = "Bing";
	String Q4A3 = "Yahoo";
	String Q4A4 = "Other";

	question[3].setQuestion(Q4);
	question[3].setAnswer1(Q4A1);
	question[3].setAnswer2(Q4A2);
	question[3].setAnswer3(Q4A3);
	question[3].setAnswer4(Q4A4);
	}
{
}
}
