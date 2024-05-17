class Car{
    //properties
    brand :string;
    model : string;
    year : number;

    //constructor
    constructor(brand : string, model : string, year: number){
        this.brand = brand;
        this.model = model;
        this.year  = year;
    }

    //method
    displayCarInfo()
    {
        console.log(`This ia a ${this.brand} ${this.model} in 2024.`);
    }
}

const objCar1 = new Car('Audi', 'A4', 2024);//after creating obj constructor gets called
const objCar2 = new Car("TATA", "Harrier", 2024);

objCar1.displayCarInfo();
objCar2.displayCarInfo();


