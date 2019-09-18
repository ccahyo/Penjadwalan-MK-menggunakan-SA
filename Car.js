class Car {
  
    constructor(type, color) {
      this.type =  type;
      this.color = color;
      this.engineStatus = 'off';
    }
    
    engineStart () {
      this.engineStatus = 'on';
      console.log('engine start');
    }
    
    engineStop () {
      this.engineStatus = 'off';
      console.log('engine stop');
    }
    
    isEngineOn () {
      if (this.engineStatus == 'on') {
        console.log('Engine On');
      } else {
        console.log('Engine off');
      }
    }    
}