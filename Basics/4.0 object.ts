const car1: { type: string, model: string, year: number } = {
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
const car: { type: string, mileage?: number } = { // no error
    type: "Toyota"
  };
car.mileage = 2000;
export{}