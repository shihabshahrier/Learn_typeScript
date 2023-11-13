enum power_level {
  slave = 1,
  leader,
  minister,
  king
}

console.log(power_level.slave);
console.log(power_level.minister);

enum power_level1 {
  slave,
  leader,
  minister,
  king
}

console.log(power_level.slave);
console.log(power_level.minister);

enum power_level2 {
  slave = 1,
  leader = 5,
  minister = 10,
  king = 100
}

console.log(power_level.slave);
console.log(power_level.minister);

export { };