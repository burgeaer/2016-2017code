package com.javafx.ch14;


import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Pane;
import javafx.stage.Stage;

public class MultipleStage extends Application {

	public static void main(String[] args) {
		launch(args);
	}

	@Override

	public void start(Stage primaryStage) throws Exception {

		GridPane gdpane = new GridPane();
		Label lblUsername = new Label("Username:");
		Label lblPassword = new Label("Password:");
		TextField txtUsername = new TextField();
		TextField txtPassword = new TextField();
		Button btnSubmit = new Button("Submit");
		Button btnClear = new Button("Clear");

		HBox hbox = new HBox();

		hbox.getChildren().addAll(btnSubmit,btnClear);


		gdpane.add(hbox,1,2);

		//gdpane.add(btnClear,1,2);

		gdpane.add(lblUsername,0,0);
		gdpane.add(txtUsername,1,0);
		gdpane.add(lblPassword,0,1);
		gdpane.add(txtPassword,1,1);
		gdpane.add(btnSubmit,0,2);
		gdpane.add(btnClear,1,2);


		gdpane.setPadding(new Insets(10,10,10,10));
		gdpane.setVgap(10);
		gdpane.setHgap(10);

		Scene scene = new Scene(gdpane, 500,250);
		primaryStage.setScene(scene);
		primaryStage.show();


		Stage newStage = new Stage(); //new window
		Pane pane = new Pane();
		Button btnNew = new Button("New Button");
		pane.getChildren().add(btnNew);
		Scene newScene = new Scene(pane,250,250);
		newStage.setScene(newScene);
		newStage.show();


	}

}
