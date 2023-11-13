function pow(value: number, exponent: number = 10): number { // exponent is optional
    return value ** exponent;
}

function divide({ dividend, divisor }: { dividend: number, divisor: number }) { // destructuring the object
    return dividend / divisor;
}

function add(a: number, b: number, ...rest: number[]) { // rest parameter
    return a + b + rest.reduce((p, c) => p + c, 0);
}

type Negate = (value: number) => number; // type alias
const negateFunction: Negate = (value) => value * -1; // function expression

console.log(pow(5, 2));
console.log(pow(5));
console.log(divide({ dividend: 10, divisor: 2 }));
console.log(add(1, 2, 3, 4, 5));
console.log(negateFunction(5));
