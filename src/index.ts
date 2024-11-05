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


class NCycle<T> {
  status: "started" | "stopped" = "stopped";
  make: T | T[];
  model: T | T[];

  constructor(make: T | T[], model: T | T[]) {
    this.make = make;
    this.model = model;
  }

  start(): void {
    this.status = "started";
  }

  stop(): void {
    this.status = "stopped";
  }

  private areBothArrays(): boolean {
    return Array.isArray(this.make) && Array.isArray(this.model);
  }

  private areArraysMatchingLength(): boolean {
    return this.isArray(this.make) && this.isArray(this.model) && this.make.length === this.model.length;
  }

  private printPair(make: T, model: T, index?: number): void {
    if (index !== undefined) {
      console.log(`This NCycle has a ${make} ${model} at ${index}.`);
    } else {
      console.log(`This is a ${make} ${model} NCycle.`);
    }
  }

  private isArray(value: T | T[]): value is T[] {
    return Array.isArray(value);
  }

  print(index: number = 0): void {
    if (!this.isArray(this.make) && !this.isArray(this.model)) {
      this.printPair(this.make, this.model);
    } else if (this.areBothArrays()) {
      if (this.make[index] && this.model[index]) {
        this.printPair(this.make[index], this.model[index], index);
      } else {
        console.log("This NCycle was not created properly.");
      }
    } else {
      console.log("This NCycle was not created properly.");
    }
  }

  // Main printAll function
  printAll(): void {
    if (this.areArraysMatchingLength()) {
      for (let i = 0; i < this.make.length; i++) {
        this.printPair(this.make[i], this.model[i], i);
      }
    } else if (!this.isArray(this.make) && !this.isArray(this.model)) {
      this.printPair(this.make, this.model);
    } else {
      console.log("This NCycle was not created properly.");
    }
  }
}

const singleNCycle = new NCycle("Yamaha", "FZ");
singleNCycle.print();
singleNCycle.printAll();

const multiNCycle = new NCycle(["Yamaha", "Honda"], ["FZ", "CBR"]);
multiNCycle.print();
multiNCycle.print(1);
multiNCycle.printAll();


const invalidNCycle = new NCycle(["Yamaha", "Honda"], "CBR");
invalidNCycle.printAll();

