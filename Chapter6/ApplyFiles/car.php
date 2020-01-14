<?php

class Car extends Vehicle {
	
	public function startEngine(){
    if ($this->engineState != "ON") {
      $this->engineState = "ON";
      echo "Starting " . $this->getVehicleType() . " engine  " . $this->getEngineSize();
  } else {
      echo "Engine is already ON";
  }
	}
  public function accerlerate(){
   if ($this->engineState = "ON") {
	   $this->speed = "Moving";
	   echo "Accelerating ". $this->getVehicleType();
   }
   else {
	   echo $this->getVehicleType() . "is already accelerating";
   }
 }
  public function break()
    {
        if ($this->speed = "Moving") {
            $this->speed = "stop";
            echo "This ". $this->getVehicleType() . " is now breaking";
        } else {
            echo $this->getVehicleType() . " is not moving";
        }
    }
    

    public function stopEngine()
    {
        if ($this->speed = "stop") {
            $this->engineState = "OFF";
            echo "Stoping ". $this->getVehicleType() . " engine.";
        } else {
            echo "Engine is already OFF";
        }
    }
 public function showInfo() {
	 $this->startEngine();
	 echo "</br>";
	 $this->accerlerate();
	 echo "</br>";
	 $this->break();
     echo "<br>";
     $this->stopEngine();
        
        
 }


}
?>