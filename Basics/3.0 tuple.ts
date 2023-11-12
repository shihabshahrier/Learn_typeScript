let ourTuple: [number, boolean, string];
ourTuple = [1, true, 'hello world'];
ourTuple.push(5);

// readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];

console.log(ourTuple);
console.log(ourReadonlyTuple);

export { };