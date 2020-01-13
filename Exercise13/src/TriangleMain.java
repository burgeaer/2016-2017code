import java.util.Scanner;

public class TriangleMain extends Triangle {


	public static void main(String[] args) {


		Triangle t = new Triangle();

		t.getDateCreated();
		@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
		System.out.print("Enter a number for side1: ");
		double side1 = input.nextDouble();
		System.out.print("Enter a number for side2: ");
		double side2 = input.nextDouble();
		System.out.print("Enter a number for side3: ");
		double side3 = input.nextDouble();
		System.out.print("Enter a number for height: ");
		double height = input.nextDouble();
		System.out.print("Enter a color:  ") ;
		String color = input.next();
		System.out.print("Is the shape filled? True or False?" );
		boolean mess = input.nextBoolean();

		System.out.println("The Area of the Triangle is: " + (side1 * side2 * height));
		System.out.println("The Perimeter of the Triangle is: " + (side1 + side2 + side3)) ;
		System.out.println("The color of the Triangle is: " + color );
		System.out.println("Is it filled?: " + mess);




	}





}
