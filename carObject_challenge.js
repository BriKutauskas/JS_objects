function createCar (newMake, newModelYear, newColor, newSpeed) {
  return {
    make: newMake,
    model: newModelYear,
    color: newColor,
    carInfo: function () {
      return this.make + " " + this.model + " " + this.color;
    },
    speed: newSpeed,
    getSpeed: function(){
      return this.speed;
    },
    accelerate: function() {this.speed += 10},
    brake: function (){this.speed -= 7}
  }
}
let car1 = createCar("Honda", "1995", "Tan");
car1.carInfo();

// let car2 = createCar("Chevy", "1964", "Red", 0);
// function toFifty (car){
//   while(car.speed < 50){
//     car.accelerate();
//     car.getSpeed();
//   }
// }
// toFifty(car2);

// let car2 = createCar("Chevy", "1964", "Red", 70);
// function toZero (car){
//   while(car.speed > 0){
//     car.brake();
//     car.getSpeed();
//   }
//   while(car.speed === 0){
//     return car.speed;
//   }
// }
// toZero(car2);

// loop will stop at 80!!!
// let car2 = createCar("Chevy", "1964", "Red", 85);
// function maxSpeed (car){
//   while(car.speed < 85){
//     car.accelerate();
//     car.getSpeed();
//   }
// }
// toZero(car2);
function createCar (newMake, newModelYear, newColor, newSpeed) {
  return {
    make: newMake,
    model: newModelYear,
    color: newColor,
    carInfo: function () {
      return this.make + " " + this.model + " " + this.color;
    },
    speed: newSpeed,
    getSpeed: function(){
      return this.speed;
    },
    accelerate: function() {this.speed += 10},
    brake: function (){this.speed -= ((Math.floor(Math.random() * this.speed) + 1) / 2)}
  }
}

let car2 = createCar("Chevy", "1964", "Red", 100);
function toStop (car){
  while(car.speed > 0){

    car.brake();
    console.log(car.getSpeed());
  }
}
toStop(car2);
