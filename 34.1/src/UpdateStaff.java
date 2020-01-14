
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;


public class UpdateStaff extends Application{
	private Label lblStatus = new Label();
	Label lblID = new Label("ID");
	Label lblfName = new Label("First Name");
	Label lbllName = new Label("Last Name");
	Label lblmName = new Label("MI");
	Label lbladdress = new Label("Address");
	Label lblState = new Label("State");
	Label lblCity = new Label("City");
	Label lblPhone = new Label("Phone");
	Label lblEmail = new Label("Email");
	TextField txtID = new TextField();
	TextField txtfName = new TextField();
	TextField txtlName = new TextField();
	TextField txtmName = new TextField();
	TextField txtaddress = new TextField();
	TextField txtState = new TextField();
	TextField txtCity = new TextField();
	TextField txtPhone = new TextField();
	TextField txtEmail = new TextField();
	Button btnView = new Button("View");
	Button btnClear = new Button("Clear");
	Button btnUpdate = new Button("Update");
	Button btnInsert = new Button("Insert");
	private Statement stmt;

	@Override
	public void start(Stage primaryStage) {
	
	
	HBox hbox1 = new HBox(5);
	HBox hbox2 = new HBox(5);
	HBox hbox3 = new HBox(5);
	HBox hbox4 = new HBox(5);
	HBox hbox5 = new HBox(5);
	
	hbox1.getChildren().addAll(lblID, txtID);
	hbox2.getChildren().addAll(lblfName, txtfName, lbllName, txtlName, lblmName, txtmName);
	hbox3.getChildren().addAll(lbladdress, txtaddress);
	hbox4.getChildren().addAll(lblState, txtState, lblCity, txtCity);
	hbox5.getChildren().addAll(lblPhone, txtPhone);
	txtmName.setPrefHeight(1);
	
	VBox vbox = new VBox(5);
	vbox.getChildren().addAll(hbox1, hbox2, hbox3, hbox4, hbox5);
	
	
	HBox btnBox = new HBox(5);
	btnBox.getChildren().addAll(btnView, btnUpdate, btnInsert, btnClear);
	btnBox.setAlignment(Pos.CENTER);
	
	
	
	BorderPane pane = new BorderPane();
	pane.setTop(lblStatus);
	pane.setCenter(vbox);
	pane.setBottom(btnBox);
	
		
	Scene scene = new Scene(pane, 800, 500);
	primaryStage.setTitle("Staff DataBase");
	primaryStage.setScene(scene);
	primaryStage.show();
	
	
	connectDB();
	btnClear.setOnAction(e -> clearFields());
	btnView.setOnAction(e -> view());
	btnInsert.setOnAction(e -> insert());
	btnUpdate.setOnAction(e -> update());

	}
	
	public void view()  {
		String sql = "SELECT * FROM Staff WHERE id = " + "'" + txtID.getText().trim() + "'";
		try {
		ResultSet result = stmt.executeQuery(sql);
		loadFields(result);
		}
		catch(SQLException ex) {
			lblStatus.setText("Failure.");
			System.out.println("NOT FOUND, FIND BATMAN?!!");
		}

		}

		private void loadFields(ResultSet result) throws SQLException {
			if(result.next()) {
				txtlName.setText(result.getString(2));
				txtfName.setText(result.getString(3));
				txtmName.setText(result.getString(4));
				txtaddress.setText(result.getString(5));
				txtCity.setText(result.getString(6));
				txtState.setText(result.getString(7));
				txtPhone.setText(result.getString(8));
				lblStatus.setText("Record Found :)");
			}
			else {
				lblStatus.setText("NOT FOUND. FIND BATMAN TO HELP");
			}
	}
		public void insert() {
			String insertStmt ="INSERT INTO Staff(id, lastName, firstName, mi, address," + "city, state, telephone) VALUES('" +
			txtID.getText().trim() + "','" +
			txtlName.getText().trim() + "','" +			
			txtfName.getText().trim() + "','" +
			txtmName.getText().trim() + "','" +
			txtaddress.getText().trim() + "','" +
			txtCity.getText().trim() + "','" +
			txtState.getText().trim() + "','" +
			txtPhone.getText().trim() + "','" +
			"');";
			try {
				stmt.executeUpdate(insertStmt);
			}
			catch (SQLException ex) {
				lblStatus.setText("Insert Statement Failed " + ex);
			}
			
			lblStatus.setText("Statement Successful");
		}
		
		public void update() {
			String updateStmt = "UPDATE Staff " +
			"SET lastName = '" + txtlName.getText().trim() + "'," +
			"firstName = '" + txtfName.getText().trim() + "'," +
			"mi = '" + txtmName.getText().trim() + "'," +
			"address = '" + txtaddress.getText().trim() + "'," +
			"city = '" + txtCity.getText().trim() + "'," +
			"state = '" + txtState.getText().trim() + "'," +
			"telephone = '" + txtPhone.getText().trim() + "' " +
			"WHERE id = '" + txtID.getText().trim() + "'";
			try {
				stmt.executeUpdate(updateStmt);
				lblStatus.setText("Record updated");
			}
			catch (SQLException ex) {
				lblStatus.setText("Update Statement Failed: " + ex);
			}
		}
		public void clearFields() {
			txtID.setText(null);
			txtfName.setText(null);
			txtlName.setText(null);
			txtmName.setText(null);
			txtaddress.setText(null);
			txtCity.setText(null);
			txtEmail.setText(null);
			txtState.setText(null);
			txtPhone.setText(null);
		}

		public void connectDB() {
			try {
				Class.forName("com.mysql.jdbc.Driver");
		        System.out.println("Driver loaded");
		        Connection connection = DriverManager.getConnection
		                ("jdbc:mysql://apollo.gtc.edu/aburgess_javabook", "aburgess", "VaniilaLatte0824");
		        System.out.println("Database connected");
		        lblStatus.setText("Database Connected");
		        stmt = connection.createStatement();

			} catch(Exception e) {
				System.out.println("IM NOT WORKING, SEND BATMAN TO HELP");
				lblStatus.setText("Database Connection Failed: " + e);
			}
		}
	
	
	public static void main(String[] args) {
		launch(args);

	}
	

}
