class Car {
  constructor(brand, model, year, color, price, gas) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
    this.gas = gas;
  }

  honk() {
    console.log("Tuut tuut");
    console.log(
      `Car Details - Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: $${this.price}`
    );
  }

  gasLose(currentYear) {
    const yearsOld = currentYear - this.year;
    let gasLoss = 5 + yearsOld;
    if (yearsOld === 0) {
      gasLoss -= 1;
    }
    this.gas -= gasLoss;
    if (this.gas < 0) {
      this.gas = 0;
    }
  }
}

const cars = [
  new Car("Honda", "CR-V", 2023, "Red", 50000, 45),
  new Car("Ford", "F-150", 2020, "Black", 25000, 30),
  new Car("BMW", "X5", 2022, "Green", 60000, 65),
  new Car("Mazda", "CX-5", 2019, "White", 15000, 60),
  new Car("Audi", "Q7", 2018, "Silver", 52000, 47),
  new Car("Kia", "Forte", 2020, "Blue", 21000, 56),
];

const currentYear = new Date().getFullYear();
for (let turn = 1; turn <= 7; turn++) {
  console.log(`Turn ${turn}`);
  cars.forEach((car) => {
    car.honk();
    car.gasLose(currentYear);
    console.log(`${car.brand} ${car.model} has ${car.gas} liters of gas left.`);
  });
  console.log("---------------------------");
}
