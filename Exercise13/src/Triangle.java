

public class Triangle extends GeometicObject {

	private double b1, b2, b3, h;

	public Triangle(double b1, double b2, double b3, double h) {
		this.setB1(b1);
		this.setB2(b2);
		this.setB3(b3);
		this.setH(h);

	}


	public Triangle() {
	}


	public  double getArea() {
		return 0.5 * this.b1 * this.h;
	}

	public double getPerimeter() {
		return b1 + b2 + b3;
	}

	public double getB1() {
		return b1;
	}

	public void setB1(double b1) {
		this.b1 = b1;
	}

	public double getB2() {
		return b2;
	}

	public void setB2(double b2) {
		this.b2 = b2;
	}

	public double getB3() {
		return b3;
	}

	public void setB3(double b3) {
		this.b3 = b3;
	}

	public double getH() {
		return h;
	}

	public void setH(double h) {
		this.h = h;
	}


}



