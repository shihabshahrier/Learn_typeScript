let x: unknown = 'hello'; // unknown is a type-safe version of any
console.log((x as string).length); // type assertion


let y: unknown = 4;
console.log((y as string).length); // Error: Object is of type 'unknown'.

// Force casting

// let str = 'hello'; 
// console.log(((str as unknown) as number).length); 

export { };
