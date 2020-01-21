<?php

	abstract class Vehicle {
		public $engineState;
		public $speed;
		public $engineSize;
		public $vehicleType;
		
		
		function __construct($VehicleType, $EngineSize) {
		    $this->vehicleType = $VehicleType;
		    $this->engineSize = $EngineSize;
		}
       
        public function getEngineState()
        {
            return $this->engineState;
        }
       
        public function getSpeed()
        {
            return $this->speed;
        }
    
        public function getEngineSize()
        {
            return $this->engineSize;
        }
    
        public function getVehicleType()
        {
            return $this->vehicleType;
        }
        public function setEngineState($engineState)
        {
            $this->engineState = $engineState;
        }
    
        public function setSpeed($speed)
        {
            $this->speed = $speed;
        }
        public function setEngineSize($engineSize)
        {
            $this->engineSize = $engineSize;
        }
    
        public function setVehicleType($vehicleType)
        {
            $this->vehicleType = $vehicleType;
        }
        
    abstract function startEngine();
    abstract function stopEngine();
    abstract function accerlerate();
    abstract function break();
    abstract function showInfo();
        
            
      
	}
    
	
	
?>