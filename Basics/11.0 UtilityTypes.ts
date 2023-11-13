// Partial

interface Point {
    x: number;
    y: number;
}

let pointPart: Partial<Point> = {};
pointPart.x = 10;

// Required

interface Car {
    make: string;
    model: string;
    mileage?: number;
}

let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // Error: Property 'mileage' is missing in type '{ make: string; model: string; }' but required in type 'Required<Car>'.
};


// Record
const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
};

// Omit

interface Person {
    name: string;
    age: number;
    location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
};

// Pick
interface Person {
    name: string;
    age: number;
    location?: string;
}

const bob2: Pick<Person, 'name'> = {
    name: 'Bob'
};
