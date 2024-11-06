"use strict";
// @ts-check
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, wheels) {
        this.status = "stopped";
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    Vehicle.prototype.start = function () {
        this.status = "started";
    };
    Vehicle.prototype.stop = function () {
        this.status = "stopped";
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model) {
        return _super.call(this, make, model, 4) || this;
    }
    return Car;
}(Vehicle));
var MotorCycle = /** @class */ (function (_super) {
    __extends(MotorCycle, _super);
    function MotorCycle(make, model) {
        return _super.call(this, make, model, 2) || this;
    }
    return MotorCycle;
}(Vehicle));
function printStatus(vehicle) {
    if (vehicle.status === "started") {
        console.log("The vehicle is started.");
    }
    else {
        console.log("The vehicle is stopped.");
    }
}
var myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());
var myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);
var NCycle = /** @class */ (function () {
    function NCycle(make, model) {
        this.status = "stopped";
        this.make = make;
        this.model = model;
    }
    NCycle.prototype.start = function () {
        this.status = "started";
    };
    NCycle.prototype.stop = function () {
        this.status = "stopped";
    };
    NCycle.prototype.areBothArrays = function () {
        return Array.isArray(this.make) && Array.isArray(this.model);
    };
    NCycle.prototype.areArraysMatchingLength = function () {
        return this.isArray(this.make) && this.isArray(this.model) && this.make.length === this.model.length;
    };
    NCycle.prototype.printPair = function (make, model, index) {
        if (index !== undefined) {
            console.log("This NCycle has a " + make + " " + model + " at " + index + ".");
        }
        else {
            console.log("This is a " + make + " " + model + " NCycle.");
        }
    };
    NCycle.prototype.isArray = function (value) {
        return Array.isArray(value);
    };
    NCycle.prototype.print = function (index) {
        if (index === void 0) { index = 0; }
        if (!this.isArray(this.make) && !this.isArray(this.model)) {
            this.printPair(this.make, this.model);
        }
        else if (this.areBothArrays()) {
            // Had to do another check if they're arrays to avoid element implicitly being seen as any
            if (this.isArray(this.make) && this.isArray(this.model) && this.make[index] && this.model[index]) {
                this.printPair(this.make[index], this.model[index], index);
            }
            else {
                console.log("This NCycle was not created properly.");
            }
        }
        else {
            console.log("This NCycle was not created properly.");
        }
    };
    // Main printAll function
    NCycle.prototype.printAll = function () {
        if (this.areArraysMatchingLength()) {
            // Need to explicitly check if they're arrays to avoid element implicitly being seen as any
            if (this.isArray(this.make) && this.isArray(this.model)) {
                for (var i = 0; i < this.make.length; i++) {
                    this.printPair(this.make[i], this.model[i], i);
                }
            }
        }
        else if (!this.isArray(this.make) && !this.isArray(this.model)) {
            this.printPair(this.make, this.model);
        }
        else {
            console.log("This NCycle was not created properly.");
        }
    };
    return NCycle;
}());
var singleNCycle = new NCycle("Yamaha", "FZ");
singleNCycle.print();
singleNCycle.printAll();
var multiNCycle = new NCycle(["Yamaha", "Honda"], ["FZ", "CBR"]);
multiNCycle.print();
multiNCycle.print(1);
multiNCycle.printAll();
var invalidNCycle = new NCycle(["Yamaha", "Honda"], "CBR");
invalidNCycle.printAll();
//# sourceMappingURL=index.js.map