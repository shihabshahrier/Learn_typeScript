"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car1 = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car1);
//================================
// const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//     type: "Toyota",
//   };
//   car.mileage = 2000;
var car = {
    type: "Toyota"
};
car.mileage = 2000;
