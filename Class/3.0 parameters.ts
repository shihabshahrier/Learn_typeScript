class Person {
    public constructor(private name: string) { }

    public getName(): string {
        return this.name;
    }
}

const person = new Person("Jane");
console.log(person.getName());

export { };