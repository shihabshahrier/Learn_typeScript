function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
function add(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
var negateFunction = function (value) { return value * -1; }; // function expression
console.log(pow(5, 2));
console.log(pow(5));
console.log(divide({ dividend: 10, divisor: 2 }));
console.log(add(1, 2, 3, 4, 5));
console.log(negateFunction(5));
