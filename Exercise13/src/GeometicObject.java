
public abstract class GeometicObject {
	private String color = "";
	private boolean filled;
	private java.util.Date dateCreated;


	protected GeometicObject() {
		dateCreated = new java.util.Date();

	}

	protected GeometicObject(boolean filled) {
		dateCreated = new java.util.Date();
		this.color = "";
		this.filled = filled;
	}

	public String getColor() {
		return color;
	}


	public void setColor(String color) {
		this.color = color;
	}

	public boolean isFilled(boolean filled) {
		return filled;
	}

	public void setFilled(boolean filled) {
		this.filled = filled;
	}

	public java.util.Date getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(java.util.Date dateCreated) {
		this.dateCreated = dateCreated;
	}

	@Override

	public String toString() {
		return "created on " + dateCreated + "\ncolor: " + color + " and filled: " + filled;
	}

	public abstract double getArea();

	public abstract double getPerimeter();


}
