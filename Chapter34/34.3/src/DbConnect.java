import java.sql.Connection;
import java.sql.DriverManager;


import javafx.application.Application;
import javafx.collections.FXCollections;
import javafx.geometry.HPos;

import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.ComboBox;
import javafx.scene.control.Label;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.GridPane;
import javafx.stage.Stage;

public class DbConnect extends Application {

	@Override
	public void start(Stage primaryStage) {
	
	Scene scene = new Scene(new DBConnectionPane(), 410, 180);
	primaryStage.setTitle("Excercise 34.3");
	primaryStage.setScene(scene);
	primaryStage.show();
	
	}
	
	public static void main(String[] args) {
		launch(args);

	}
	
	class DBConnectionPane extends BorderPane {
		private Connection connection;
		private Label lblStatus = new Label("???");
		private Button btnConnect = new Button("Connect to DB");
		private TextField txtUser = new TextField();
		private PasswordField pwd = new PasswordField();
		private ComboBox<String> driver = new ComboBox<>(
				FXCollections.observableArrayList(
						"com.mysql.jdbc.Driver",
						"sun.jdbc.odbc,JdbcOdbcDriver",
						"oracle.jdbc.driver.OracleDriver"
				));
		private ComboBox<String> url = new ComboBox<>(
				FXCollections.observableArrayList(
				"jdbc:mysql://apollo.gtc.edu/aburgess_javabook",
				"jdbc:odbc:exampleMDBDataSource",
				"jdbx:oracle:thin:@liang.armstrong.edu:1521:ora91"
				
				));
	
		
		public DBConnectionPane() {
			driver.setEditable(true);
			url.setEditable(true);
			GridPane gridpane = new GridPane();
			gridpane.add(new Label("JDBC"), 0, 0);
			gridpane.add(new Label("Database URL"), 0, 1);
			gridpane.add(new Label("Username"), 0, 2);
			gridpane.add(new Label("Password"), 0, 3);
			gridpane.add(driver, 1, 0);
			gridpane.add(url, 1, 1);
			gridpane.add(txtUser, 1, 2);
			gridpane.add(pwd, 1, 3);
			gridpane.add(btnConnect, 1, 4);
			GridPane.setHalignment(btnConnect, HPos.RIGHT);
			
			this.setTop(lblStatus);
			this.setCenter(gridpane);
			
			btnConnect.setOnAction(e -> connectDB());
			
		}
		public void connectDB() {
			String dbDriver = driver.getValue();
			String dbUrl = url.getValue();
			String username = txtUser.getText().trim();
			String password = new String(pwd.getText());
			try {
				Class.forName(dbDriver);
		        System.out.println("Driver loaded");
		        connection = DriverManager.getConnection
		                (dbUrl, username, password);
		        System.out.println("Database connected");
		        lblStatus.setText("Database Connected");

			} catch(Exception e) {
				System.out.println("IM NOT WORKING, SEND BATMAN TO HELP");
				lblStatus.setText("Database Connection Failed: " + e);
			}
		}
		
		public Connection getConnection() {
			return connection;
		}
	}
}
