interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) { }

    public getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }

}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea());

const square = new Square(5);
console.log(square.getArea());


export { };