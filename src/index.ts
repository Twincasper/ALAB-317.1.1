// @ts-check

class Vehicle {
  make: string;
  model: string;
  wheels: number;
  status: "started" | "stopped" = "stopped";

  constructor(make: string, model: string, wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  start() {
    this.status = "started";
  }

  stop() {
    this.status = "stopped";
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 4);
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}

function printStatus(vehicle: Vehicle) {
  if (vehicle.status === "started") {
    console.log("The vehicle is started.");
  } else {
    console.log("The vehicle is stopped.");
  }
}

const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());

const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);

// Copy the existing Vehicle class definition as a starting point for NCycle.
// Modify NCycle to accept a generic type.
// Allow make and model to have either the generic type or an array of the generic type.
// Adjust the constructor parameters accordingly.
// Create a new method print, which returns nothing and has a single number parameter (either optional or defaulted to 0).
// Use type guards and other appropriate techniques to implement print such that it logs:
// "This is a <make> <model> NCycle." if make and model are not arrays.
// "This NCycle has a <make> <model> at <parameter>." if make and model are arrays and the index of parameter exists in each.
// "This NCycle was not created properly." if neither of the above are true.

class NCycle<T> extends Vehicle {
  constructor(make: T, model: T, wheels: number) {
    super(make, model, wheels);
  }

  print(parameter: number = 0) {
    if (typeof this.make === "string" && typeof this.model === "string") {
      if (Array.isArray(this.make) && Array.isArray(this.model)) {
        if (parameter >= 0 && parameter < this.make.length && parameter < this.model.length) {
          console.log(`This NCycle has a ${this.make[parameter]} ${this.model[parameter]} at ${parameter}.`);
        } else {
          console.log("This NCycle was not created properly.");
        }
      } else {
        console.log(`This is a ${this.make} ${this.model} NCycle.`);
      }
    } else {
      console.log("This NCycle was not created properly.");
    }
  }

  printAll() {
    if (Array.isArray(this.make) && Array.isArray(this.model)) {
      for (let i = 0; i < Math.min(this.make.length, this.model.length); i++) {
        this.print(i);
      }
    } else {
      console.log("This NCycle was not created properly.");
    }
  }
}