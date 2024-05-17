var Car = /** @class */ (function () {
    //constructor
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    //method
    Car.prototype.displayCarInfo = function () {
        console.log("This ia a ".concat(this.brand, " ").concat(this.model, " in 2024."));
    };
    return Car;
}());
var objCar1 = new Car('Audi', 'A4', 2024); //after creating obj constructor gets called
var objCar2 = new Car("TATA", "Harrier", 2024);
objCar1.displayCarInfo();
objCar2.displayCarInfo();
