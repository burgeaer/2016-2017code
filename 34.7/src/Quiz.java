
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;

import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.ScrollPane;
import javafx.scene.control.TextArea;
import javafx.scene.control.TextField;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;

public class Quiz extends Application {
	private Label lblstatus = new Label();
	private TextField txtTable = new TextField();
	private Button btnshowContents = new Button("Show Contents");
	private TextArea rs = new TextArea();
	private Statement stmt;
	
	@Override
	public void start(Stage primaryStage) {
	HBox hbox = new HBox(5);
	hbox.getChildren().addAll(new Label("Table Name"), txtTable, btnshowContents);
	hbox.setAlignment(Pos.CENTER);
	BorderPane pane = new BorderPane();
	pane.setTop(hbox);
	pane.setBottom(lblstatus);
	pane.setCenter(new ScrollPane(rs));
	
	
	Scene scene = new Scene(pane, 410, 180);
	primaryStage.setTitle("Excercise 34.5");
	primaryStage.setScene(scene);
	primaryStage.show();
	
	connectDB();
	
	btnshowContents.setOnAction(e -> showContents());
	}
	
	public static void main(String[] args) {
		launch(args);

	}
	
	public void connectDB() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
	        System.out.println("Driver loaded");
	        Connection connection = DriverManager.getConnection
	                ("jdbc:mysql://apollo.gtc.edu/aburgess_javabook", "aburgess", "VaniilaLatte0824");
	        System.out.println("Database connected");
	        lblstatus.setText("Database Connected");
	        stmt = connection.createStatement();

		} catch(Exception e) {
			System.out.println("IM NOT WORKING, SEND BATMAN TO HELP");
			lblstatus.setText("Database Connection Failed: " + e);
		}
	}
	
	private void showContents() {
		String tableName = txtTable.getText();
		
		try {
			String queryString = "SELECT * FROM " + tableName;
			ResultSet resultSet = stmt.executeQuery(queryString);
			ResultSetMetaData metaData = resultSet.getMetaData();
			
			for(int i = 1; i <= metaData.getColumnCount(); i++) {
				rs.appendText(metaData.getColumnName(i) + "           ");
			}
			rs.appendText("\n");
			
			while (resultSet.next()) {
				for(int i = 1; i <= metaData.getColumnCount(); i++) {
					rs.appendText(resultSet.getObject(i) + "            ");
			}
				rs.appendText("\n");
			}
		}
		catch (SQLException ex) {
			ex.printStackTrace();
		}
	}

	

}
